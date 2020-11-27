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
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/learn">
          <SubjectProvider>
            <HomePage />
          </SubjectProvider>
        </PrivateRoute>
        <PrivateRoute path="/exams">
          <SubjectProvider>
            <HomePage />
          </SubjectProvider>
        </PrivateRoute>
        <PrivateRoute path="/discuss">
          <SubjectProvider>
            <HomePage />
          </SubjectProvider>
        </PrivateRoute>
        <PrivateRoute path="/shop">
          <SubjectProvider>
            <HomePage />
          </SubjectProvider>
        </PrivateRoute>
        <PrivateRoute path={`/practice/:type`}>
          <SubjectProvider>
            <Practice />
          </SubjectProvider>
        </PrivateRoute>
        <PublicRoute path="/">
          <Redirect to="/learn" />
        </PublicRoute>
        <PrivateRoute path="/">
          <ErrorPage />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}
