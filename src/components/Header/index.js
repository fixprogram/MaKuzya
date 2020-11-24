import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, Dropdown, ButtonToolbar, Alert } from "rsuite";
import { useProfile } from "../../context/profile.context";
import { database } from "../../misc/firebase";

function Header({ subjects }) {
  const { profile } = useProfile();
  const [isLoading, setIsLoading] = useState(false);

  const changeSubject = async (newActive) => {
    setIsLoading(true);
    try {
      await database.ref(`/profiles/${profile.uid}`).set({
        ...profile,
        activeSubject: newActive,
      });
      setIsLoading(false);
    } catch (err) {
      Alert.error(err.message, 4000);
      setIsLoading(false);
    }
  };

  const CustomDropdown = ({ ...props }) => (
    <Dropdown {...props} disabled={isLoading}>
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
          <NavLink to="/exams">
            <span className="tab_block-inner">
              <Icon icon="stack-overflow" size="lg" />
              <span className="tab_title">Exams</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <NavLink to="/discuss">
            <span className="tab_block-inner">
              <Icon icon="wechat" size="lg" />{" "}
              <span className="tab_title">Discuss</span>
            </span>
          </NavLink>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <NavLink to="/shop">
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
                title={profile.activeSubject}
                trigger="hover"
                icon={<Icon icon="adn" size="lg" />}
              />
            </ButtonToolbar>
          </span>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/crown.svg" />
            <span className="">{profile.crowns}</span>
          </span>
        </div>
        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/streak.svg" />
            <span className="">{profile.streak}</span>
          </span>
        </div>
        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/lingot.svg" />
            <span className="">{profile.lingots}</span>
          </span>
        </div>

        <div className="tab_block tab_block__profile">
          <span className="tab_block-inner">
            <img className="tab_icon" src={profile.avatar} />
          </span>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  crowns: state.crowns,
  streak: state.streak,
  lingots: state.lingots,
  subjects: state.subjects,
});

export default connect(mapStateToProps)(Header);
