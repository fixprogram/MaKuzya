import React from "react";
import { Switch } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import "../../styles/main.scss";

import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";
import { ProfileProvider } from "../../context/profile.context";
import SignIn from "../SignIn";
import Home from "../Home";
import Practice from "../Practice";

export default function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path={`/practice/:type`}>
          <Practice />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}
