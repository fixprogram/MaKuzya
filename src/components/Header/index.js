import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Icon, Dropdown, ButtonToolbar } from "rsuite";
import { useProfile } from "../../context/profile.context";

const CustomDropdown = ({ ...props }) => (
  <Dropdown {...props}>
    <Dropdown.Item icon={<Icon icon="google" size="lg" />}>
      Geometria
    </Dropdown.Item>
    <Dropdown.Item>Add new topic</Dropdown.Item>
  </Dropdown>
);

function Header() {
  const { profile } = useProfile();
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
                title="Algebra"
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
});

export default connect(mapStateToProps)(Header);
