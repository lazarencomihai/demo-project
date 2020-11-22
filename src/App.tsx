import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {Routes} from "./constants/routes";
import PageTemplate from "./pages/page-template";
import DashboardPage from "./pages/dashboard";
import AddCoursePage from "./pages/courses/add-course";
import CoursesPage from "./pages/courses";
import SettingsPage from "./pages/settings";

function App() {
  return (
    <>
      <PageTemplate>
          <Switch>
              <Route path={Routes.Dashboard} component={DashboardPage}/>
              <Route path={Routes.Courses} exact={true} component={CoursesPage}/>
              <Route path={Routes.Add_Course} component={AddCoursePage}/>
              <Route path={Routes.Settings} component={SettingsPage}/>
              <Redirect to={Routes.Courses}/>
          </Switch>
      </PageTemplate>
    </>
  );
}

export default App;
