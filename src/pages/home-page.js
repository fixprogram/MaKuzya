import React, { useEffect } from "react";

import { connect } from "react-redux";
import { actionCreatorUser, actionCreatorLessons } from "../actions";
import { useProfile } from "../context/profile.context";
import { useSubject } from "../context/subject.context";
import { Alert } from "rsuite";
import { database } from "../misc/firebase";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LessonsList from "../components/LessonsList";

function HomePage({ setUser, setLessons, changeActiveSubject }) {
  const { isLoading, profile } = useProfile();
  // const { lessons } = useSubject();
  if (isLoading) return <Loader />;
  useEffect(() => {
    setUser({ ...profile });
    // setLessons(lessons);
  }, []);

  // const changeSubject = async (newActive) => {
  //   changeActiveSubject(newActive);
  //   try {
  //     await database.ref(`/profiles/${profile.uid}`).update({
  //       activeSubject: newActive,
  //     });
  //   } catch (err) {
  //     Alert.error(err.message, 4000);
  //   }
  // };

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
  setLessons: (lessons) => dispatch(actionCreatorLessons.setLessons(lessons)),
  changeActiveSubject: (newActive) =>
    dispatch(actionCreatorUser.changeActive(newActive)),
});

export default connect(null, mapDispatchToProps)(HomePage);
