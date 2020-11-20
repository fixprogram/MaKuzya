import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar(props) {
  const { progress } = props;
  return (
    <section className="progress_wrapper">
      <div className="progress_bar">
        <div className="progress_inner">
          {props.children}
          <div className="progress_line">
            <div
              className="progress_fill"
              style={{ width: progress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
