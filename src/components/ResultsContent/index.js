import React from "react";

import { connect } from "react-redux";
import { Animation } from "rsuite";
import ResultsButtons from "./resultsButtons";

const { Slide } = Animation;

function PracticeContent({}) {
  return (
    <>
      <section className="practice_content__wrapper">
        {/* <Slide in={true} placement="right"> */}
        <h1 className="practice_content__title">Выберите правильный ответ</h1>
        <div className="practice_content">{/* <PracticeTitle /> */}Results</div>
        {/* </Slide> */}
      </section>

      <ResultsButtons />
    </>
  );
}

const mapStateToProps = (state) => ({
  variants: state.variants,
  animationCount: state.animationCount,
  practicePopupMessage: state.practicePopupMessage,
});

export default connect(mapStateToProps)(PracticeContent);
