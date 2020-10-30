import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    const {tabs, crowns, streak, lingots} = this.props;
    return (
      <header className="header">
        <div className="header_inner">
          {tabs.map((it, i) => {
            return (
              <React.Fragment key={i}>
                <div className="tab_block">
                  <a data-test="home-nav" href="/">
                    <span className="tab_block-inner">
                      <img className="tab_icon"
                        src={`./img/${it.icon}`} />
                      <span className="tab_title">{it.title}</span>
                    </span>
                  </a>
                </div>
                <div className='header_spaces'></div>
              </React.Fragment>
            );
          })}

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
}

Header.propTypes = {
  tabs: PropTypes.array.isRequired,
  crowns: PropTypes.number.isRequired,
  streak: PropTypes.number.isRequired,
  lingots: PropTypes.number.isRequired
};
