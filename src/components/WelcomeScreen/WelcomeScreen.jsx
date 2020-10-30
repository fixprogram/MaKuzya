import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header.jsx";
import LessonsList from "../LessonsList/LessonsList.jsx";
import Practice from "../Practice/Practice.jsx";

export default class WelcomeScreen extends React.Component {
  render() {
    const { tabs } = this.props.header;
    const { crowns, streak, lingots, changePage, page, title } = this.props;
    const lessons = this.props.lessons;

    if (page === 0) {
      return (
        <React.Fragment>
          <Header
            tabs={tabs}
            crowns={crowns}
            streak={streak}
            lingots={lingots}
          />
          <LessonsList lessons={lessons} changePage={changePage} page={page} />
        </React.Fragment>
      );
    } else {
      return <Practice title={title} changePage={changePage} />;
    }
  }
}

WelcomeScreen.propTypes = {
  header: PropTypes.object.isRequired,
  lessons: PropTypes.array.isRequired,
};
