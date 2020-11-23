import { apiInstance } from "./index";
import { Course } from "../entities/course";

export class CoursesAPI {
  static getCourses(): Promise<Array<Course>> {
    return apiInstance.get("courses");
  }

  static getCourseById(id: string): Promise<Course> {
    return apiInstance.get(`courses/${id}`);
  }

  static getTransitions() {
    return apiInstance.get("transitions");
  }

  static getStates() {
    return apiInstance.get("states");
  }
}
