import React from "react";
import { connect } from "react-redux";
import { useProfile } from "../../context/profile.context";

function Header() {
  const { profile } = useProfile();
  console.log("PROFILE1111:  ", profile);
  return (
    <header className="header">
      <div className="header_inner">
        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={``} />
              <span className="tab_title">Learn</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={``} />
              <span className="tab_title">Exams</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={``} />
              <span className="tab_title">Discuss</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={``} />
              <span className="tab_title">Shop</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={``} />
              <span className="tab_title">More</span>
            </span>
          </a>
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
