import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Header({ crowns, streak, lingots }) {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={`./img/`} />
              <span className="tab_title">Learn</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={`./img/`} />
              <span className="tab_title">Stories</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={`./img/`} />
              <span className="tab_title">Discuss</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={`./img/`} />
              <span className="tab_title">Shop</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <a data-test="home-nav" href="/">
            <span className="tab_block-inner">
              <img className="tab_icon" src={`./img/`} />
              <span className="tab_title">More</span>
            </span>
          </a>
        </div>

        <div className="header_spaces"></div>

        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/crown.svg" />
            <span className="">{crowns}</span>
          </span>
        </div>
        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/streak.svg" />
            <span className="">{streak}</span>
          </span>
        </div>
        <div className="tab_block">
          <span className="tab_block-inner">
            <img className="tab_icon" src="./img/lingot.svg" />
            <span className="">{lingots}</span>
          </span>
        </div>

        <div className="tab_block">2</div>
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
