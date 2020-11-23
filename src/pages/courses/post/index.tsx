import React, { useEffect, useState } from "react";
import { CoursesAPI } from "../../../api/courses";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import {
  setCurrentCourse,
  clearCurrentCourse,
} from "../../../store/slices/coursesSlice";
import Spinner from "../../../components/spinner";
import Status from "../../../components/status";
import {
  StyledArticleContainer,
  StyledArticleLeft,
  StyledArticleRight,
  StyledCourseTime,
  StyledCourseTitle,
  StyledHoverContainer,
  StyledHoverImg,
  StyledHoverSection,
  StyledWrapper,
} from "./styles";

const CoursePost = (routerProps: any) => {
  const { id } = routerProps?.match?.params;
  const [showSpinner, setShowSpinner] = useState(false);
  const { currentCourse } = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch();

  const getPost = async (id: string) => {
    setShowSpinner(true);
    try {
      const data = await CoursesAPI.getCourseById(id);
      dispatch(setCurrentCourse(data));
    } finally {
      setShowSpinner(false);
    }
  };

  useEffect(() => {
    getPost(id).then();

    return () => {
      dispatch(clearCurrentCourse());
    };
  }, []);

  if (!currentCourse || showSpinner) {
    return <Spinner size={150} isAbsolute />;
  }

  return (
    <StyledWrapper>
      <StyledHoverContainer>
        <StyledHoverImg src={currentCourse.coverImg} />
        <StyledHoverSection>
          <Status status={currentCourse.status} />
          <StyledCourseTitle>{currentCourse.title}</StyledCourseTitle>
          <StyledCourseTime>{currentCourse.creationDate}</StyledCourseTime>
        </StyledHoverSection>
      </StyledHoverContainer>
      <StyledArticleContainer>
        <StyledArticleLeft>{currentCourse.content}</StyledArticleLeft>
        <StyledArticleRight>{currentCourse.content}</StyledArticleRight>
      </StyledArticleContainer>
    </StyledWrapper>
  );
};

export default CoursePost;
