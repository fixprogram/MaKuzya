import React from "react";
import PropTypes from "prop-types";

export default function PracticeTitle(props) {
  const { actualTask } = props;
  return (
    <div className="practice_content__block">
      <div className="practice_content__teacher">
        <img src="../img/teacher.svg" alt="" />
      </div>
      <div className="practice_content__task">
        <span className="practice_content__inner">{actualTask}</span>
        <div className="practice_content__triangle_wrapper">
          <span className="practice_content__triangle"></span>
        </div>
      </div>
    </div>
  );
}

PracticeTitle.propTypes = {
  // actualTask: PropTypes.string.isRequired,
};
