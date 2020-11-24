import React from "react";
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";
import { Loader } from "rsuite";

const PrivateRoute = ({ children, ...routeProps }) => {
  const { isLoading, profile } = useProfile();

  if (isLoading && !profile) {
    return <Loader center content="loading" />;
  }

  if (!profile && !isLoading) {
    return <Redirect to="/signin" />;
  }

  return (
    <Route {...routeProps} path="/learn">
      {children}
    </Route>
  );
};

export default PrivateRoute;
