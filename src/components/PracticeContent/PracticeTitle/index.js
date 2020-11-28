import React from "react";
import MathJax from "react-mathjax";
import { connect } from "react-redux";
import CanvasComponent from "../../CanvasComponent";

const PracticeTitle = ({ currentTask, topic }) => {
  return (
    <div className="practice_content__block">
      {topic ? (
        <CanvasComponent />
      ) : (
        <>
          <div className="practice_content__teacher">
            <img src="../img/cat-icons/thinking.svg" alt="MaKuzya" />
          </div>
          <div className="practice_content__task">
            <span className="practice_content__inner">
              <MathJax.Provider>
                <MathJax.Node formula={currentTask} />
              </MathJax.Provider>
            </span>
            <div className="practice_content__triangle_wrapper">
              <span className="practice_content__triangle"></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentTask: state.practice.currentTask,
  // topic: state.topic,
});

export default connect(mapStateToProps)(PracticeTitle);
