import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../../entities/course";

interface CoursesStore {
  courses: Array<Course>;
  filterByStatus: string;
  currentCourse: Course | null;
  transitions: Array<{
    from: string;
    to: string;
  }>;
}

let initialState: CoursesStore = {
  courses: [],
  filterByStatus: "all",
  currentCourse: null,
  transitions: [
    {
      from: "draft",
      to: "archived",
    },
    {
      from: "draft",
      to: "published",
    },
    {
      from: "publish",
      to: "draft",
    },
    {
      from: "archive",
      to: "draft",
    },
    {
      from: "deleted",
      to: "archived",
    },
  ],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state, action: PayloadAction<Array<Course>>) {
      state.courses = action.payload;
    },
    setFilterByStatus(state, action: PayloadAction<string>) {
      state.filterByStatus = action.payload;
    },
    setCurrentCourse(state, action: PayloadAction<Course | null>) {
      state.currentCourse = action.payload;
    },
    clearCourses(state) {
      state.courses = [];
    },
    clearCurrentCourse(state) {
      state.currentCourse = null;
    },
  },
});

export const {
  setCourses,
  setFilterByStatus,
  setCurrentCourse,
  clearCourses,
  clearCurrentCourse,
} = coursesSlice.actions;

export const coursesReducer = coursesSlice.reducer;
