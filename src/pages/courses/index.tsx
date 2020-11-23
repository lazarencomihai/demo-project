import React, { useEffect, useState } from "react";
import { CoursesAPI } from "../../api/courses";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourses,
  setFilterByStatus,
  clearCourses,
} from "../../store/slices/coursesSlice";
import styled from "@emotion/styled";
import { RootState } from "../../store/rootReducer";
import Card from "../../components/card";
import Spinner from "../../components/spinner";
import Filter from "../../components/filter";
import { useHistory } from "react-router-dom";
import { Routes } from "../../constants/routes";
import AddCourseCard from "./add-course/card";

const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 35px 63px 35px 33px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;

  .page-title {
    margin: 0;
    font-size: 24px;
    line-height: 36px;
  }
`;

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 288px);
  grid-gap: 32px;
`;

const CoursesPage = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const { courses, filterByStatus } = useSelector(
    (state: RootState) => state.courses
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const getCourses = async () => {
    setShowSpinner(true);
    try {
      const data = await CoursesAPI.getCourses();
      dispatch(setCourses(data));
    } finally {
      setShowSpinner(false);
    }
  };

  useEffect(() => {
    getCourses().then();

    return () => {
      dispatch(clearCourses());
    };
    // eslint-disable-next-line
  }, []);

  const handleCardClick = (id: string | number) => {
    history.push(`${Routes.Courses}/${id}`);
  };

  const handleAddCourseClick = () => {
    history.push(Routes.AddCourse);
  };

  const filteredCourses = courses.filter((course) => {
    if (filterByStatus.toLowerCase() === "all") {
      return true;
    } else {
      return (
        filterByStatus.toLowerCase() === course.status.toLowerCase() ||
        filterByStatus.toLowerCase().startsWith(course.status.toLowerCase())
      );
    }
  });

  return (
    <StyledWrapper>
      <StyledHeader>
        <h2 className="page-title">Your courses</h2>
        <Filter
          items={["All", "Drafted", "Published", "Archived"]}
          activeItem={filterByStatus}
          onChange={(newItem) => {
            dispatch(setFilterByStatus(newItem));
          }}
        />
      </StyledHeader>
      {!showSpinner ? (
        <StyledCardContainer>
          <AddCourseCard onClick={handleAddCourseClick} />
          {filteredCourses.map((course) => (
            <Card
              key={`key-${course.id}`}
              id={course.id}
              coverImg={course.coverImg}
              title={course.title}
              date={course.creationDate}
              state={course.status}
              onClick={handleCardClick}
            />
          ))}
        </StyledCardContainer>
      ) : (
        <Spinner size={150} isAbsolute />
      )}
    </StyledWrapper>
  );
};

export default CoursesPage;
