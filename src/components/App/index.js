import React from "react";
import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";
import { ProfileProvider } from "../../context/profile.context";
import { SubjectProvider } from "../../context/subject.context";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/main.scss";
import SignIn from "../SignIn";
import Practice from "../Practice";
import { HomePage, ErrorPage } from "../../pages";

export default function App() {
  return (
    <ProfileProvider>
      <SubjectProvider>
        <Switch>
          <PublicRoute path="/signin">
            <SignIn />
          </PublicRoute>
          <PrivateRoute path="/learn">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/exams">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/discuss">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path="/shop">
            <HomePage />
          </PrivateRoute>
          <PrivateRoute path={`/practice/:type`}>
            <Practice />
          </PrivateRoute>
          <PublicRoute path="/"></PublicRoute>
          <PrivateRoute path="/">
            <ErrorPage />
          </PrivateRoute>
        </Switch>
      </SubjectProvider>
    </ProfileProvider>
  );
}
