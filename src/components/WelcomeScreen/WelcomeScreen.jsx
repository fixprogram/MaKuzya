import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header.jsx";
import LessonsList from "../LessonsList/LessonsList.jsx";
import Footer from "../Footer/Footer.jsx";

export default class WelcomeScreen extends React.Component {
  render() {
    const { tabs } = this.props.header;
    const { crowns, streak, lingots, page } = this.props;
    const lessons = this.props.lessons;

    return (
      <React.Fragment>
        <Header tabs={tabs} crowns={crowns} streak={streak} lingots={lingots} />
        <LessonsList lessons={lessons} page={page} />
        <Footer />
      </React.Fragment>
    );
  }
}

WelcomeScreen.propTypes = {
  header: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired,
};
