import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";
import { actionCreator } from "../../reducer";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Practice from "../Practice/Practice.jsx";

class App extends React.PureComponent {
  render() {
    const { header, lessons } = this.props.data;
    const { crowns, streak, lingots, increaseLingots } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/learn">
            <WelcomeScreen
              header={header}
              lessons={lessons}
              increaseLingots={increaseLingots}
              crowns={crowns}
              streak={streak}
              lingots={lingots}
            />
          </Route>
          <Route
            path={`/practice/:type`}
            render={(props) => {
              const type = props.match.params.type;
              return <Practice type={type} />;
            }}
          ></Route>
          <Redirect from="/" to="/learn" />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  crowns: PropTypes.number.isRequired,
  streak: PropTypes.number.isRequired,
  lingots: PropTypes.number.isRequired,
  increaseCrowns: PropTypes.func.isRequired,
  increaseStreak: PropTypes.func.isRequired,
  increaseLingots: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  crowns: state.crowns,
  streak: state.streak,
  lingots: state.lingots,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCrowns: () => dispatch(actionCreator.increaseCrowns()),
    increaseStreak: () => dispatch(actionCreator.increaseStreak()),
    increaseLingots: (count) => dispatch(actionCreator.increaseLingots(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
