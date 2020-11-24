import React from "react";
import { Switch, Redirect } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/main.scss";

import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";
import { ProfileProvider } from "../../context/profile.context";
import { SubjectProvider } from "../../context/subject.context";
import SignIn from "../SignIn";
import Home from "../Home";
import Practice from "../Practice";

export default function App() {
  return (
    <ProfileProvider>
      <SubjectProvider>
        <Switch>
          <PublicRoute path="/signin">
            <SignIn />
          </PublicRoute>
          <PrivateRoute path="/learn">
            <Home />
          </PrivateRoute>
          <PrivateRoute path={`/practice/:type`}>
            <Practice />
          </PrivateRoute>
          <Redirect to="/learn" />
        </Switch>
      </SubjectProvider>
    </ProfileProvider>
  );
}
