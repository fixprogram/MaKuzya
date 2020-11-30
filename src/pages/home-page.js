import React, { useEffect } from "react";

import { connect } from "react-redux";
import { actionCreatorUser } from "../actions";
import { useProfile } from "../context/profile.context";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LessonsList from "../components/LessonsList";

function HomePage({ setUser }) {
  const { isLoading, profile } = useProfile();
  if (isLoading) return <Loader />;
  useEffect(() => {
    setUser({ ...profile });
  }, []);

  return (
    <section className="app">
      <Header />
      <LessonsList />
      <Footer />
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(actionCreatorUser.setUser(user)),
});

export default connect(null, mapDispatchToProps)(HomePage);
