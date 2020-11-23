import React from "react";
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";

const PublicRoute = ({ children, ...routeProps }) => {
  const { isLoading, profile } = useProfile();

  if (isLoading && !profile) {
    return <div>Loading</div>;
  }

  if (profile && !isLoading) {
    return <Redirect to="/learn" />;
  }

  return (
    <Route {...routeProps} path="/learn">
      {children}
    </Route>
  );
};

export default PublicRoute;
