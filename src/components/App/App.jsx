import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";
import { actionCreator } from "../../reducer";
import { connect } from "react-redux";

class App extends React.PureComponent {
  render() {
    const { header, lessons } = this.props.data;
    const {
      changePage,
      crowns,
      streak,
      lingots,
      page,
      increaseLingots,
      title,
    } = this.props;
    return (
      <WelcomeScreen
        header={header}
        lessons={lessons}
        changePage={changePage}
        increaseLingots={increaseLingots}
        crowns={crowns}
        streak={streak}
        lingots={lingots}
        page={page}
        title={title}
      />
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  crowns: PropTypes.number.isRequired,
  streak: PropTypes.number.isRequired,
  lingots: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  increaseCrowns: PropTypes.func.isRequired,
  increaseStreak: PropTypes.func.isRequired,
  increaseLingots: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  crowns: state.crowns,
  streak: state.streak,
  lingots: state.lingots,
  page: state.page,
  title: state.title,
});

// const mapDispatchToProps = (dispatch) => ({
//   changePage: () => dispatch(actionCreator.changePage),

//   increaseCrowns: () => dispatch(actionCreator.increaseCrowns),
//   increaseStreak: () => dispatch(actionCreator.increaseStreak),
//   increaseLingots: () => dispatch(actionCreator.increaseLingots),
// });

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page, title = ``) =>
      dispatch(actionCreator.changePage(page, title)),

    increaseCrowns: () => dispatch(actionCreator.increaseCrowns()),
    increaseStreak: () => dispatch(actionCreator.increaseStreak()),
    increaseLingots: (count) => dispatch(actionCreator.increaseLingots(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
