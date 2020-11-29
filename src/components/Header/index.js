import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, Dropdown, ButtonToolbar } from "rsuite";
import { actionCreatorLessons, actionCreatorUser } from "../../actions";
import { useSubject } from "../../context/subject.context";
import { Alert } from "rsuite";
import { database } from "../../misc/firebase";

function Header({ user, subjects, setLessons, changeActiveSubject }) {
  const {
    uid,
    streak,
    lingots,
    avatar,
    activeSubject,
    everydayProgress,
  } = user;

  const changeSubject = async (newActive) => {
    changeActiveSubject(newActive);
    try {
      await database.ref(`/profiles/${uid}`).update({
        activeSubject: newActive,
      });
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };
  const { lessons } = useSubject();
  useEffect(() => {
    setLessons(lessons);
  }, [changeSubject]);

  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props}>
      {subjects.map((it, i) => {
        return (
          <Dropdown.Item
            icon={<Icon icon="google" size="lg" />}
            onSelect={() => changeSubject(it)}
            key={i}
          >
            {it}
          </Dropdown.Item>
        );
      })}
      <Dropdown.Item>Add new topic</Dropdown.Item>
    </Dropdown>
  );

  return (
    <header className="header">
      <div className="header_inner">
        <div className="tab_block">
          <NavLink to="/learn" activeClassName="nav_active">
            <span className="tab_block-inner">
              <Icon icon="mortar-board" size="lg" />
              <span className="tab_title">Learn</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <NavLink to="/exams" activeClassName="nav_active">
            <span className="tab_block-inner">
              <Icon icon="stack-overflow" size="lg" />
              <span className="tab_title">Exams</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <NavLink to="/discuss" activeClassName="nav_active">
            <span className="tab_block-inner">
              <Icon icon="wechat" size="lg" />{" "}
              <span className="tab_title">Discuss</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <NavLink to="/shop" activeClassName="nav_active">
            <span className="tab_block-inner">
              <Icon icon="steam" size="lg" />{" "}
              <span className="tab_title">Shop</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <span className="tab_block-inner">
            <ButtonToolbar>
              <CustomDropdown
                title={activeSubject}
                trigger="hover"
                icon={<Icon icon="adn" size="lg" />}
              />
            </ButtonToolbar>
          </span>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <span className="tab_block-inner">
            <img
              className="tab_icon"
              src={`./img/streak${everydayProgress > 0 ? "-active" : ""}.svg`}
            />
            <span className="">{streak}</span>
          </span>
        </div>
        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/lingot.svg" />
            <span className="">{lingots}</span>
          </span>
        </div>

        <div className="tab_block tab_block__profile">
          <span className="tab_block-inner">
            <img className="tab_icon" src={avatar} />
          </span>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  subjects: state.lessons.subjects,
});

const mapDispatchToProps = (dispatch) => ({
  setLessons: (lessons) => dispatch(actionCreatorLessons.setLessons(lessons)),
  changeActiveSubject: (newActive) =>
    dispatch(actionCreatorUser.changeActive(newActive)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
