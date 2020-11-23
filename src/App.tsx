import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./constants/routes";
import PageTemplate from "./pages/page-template";
import DashboardPage from "./pages/dashboard";
import AddCoursePage from "./pages/courses/add-course";
import CoursesPage from "./pages/courses";
import SettingsPage from "./pages/settings";
import CoursePost from "./pages/courses/post";

function App() {
  return (
    <>
      <PageTemplate>
        <Switch>
          <Route path={Routes.Dashboard} component={DashboardPage} />
          <Route path={Routes.Courses} exact={true} component={CoursesPage} />
          <Route
            path={Routes.AddCourse}
            exact={true}
            component={AddCoursePage}
          />
          <Route path={Routes.CoursePage} component={CoursePost} />
          <Route path={Routes.Settings} component={SettingsPage} />
          <Redirect to={Routes.Courses} />
        </Switch>
      </PageTemplate>
    </>
  );
}

export default App;
