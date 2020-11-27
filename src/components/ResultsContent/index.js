import React, { useEffect } from "react";

import { connect } from "react-redux";
import ResultsButtons from "./resultsButtons";

function PracticeContent({}) {
  function checkKeyDown(e) {
    if (e.key === "Enter") window.location.replace("/");
  }

  useEffect(() => {
    window.addEventListener("keydown", checkKeyDown);

    return () => {
      window.removeEventListener("keydown", checkKeyDown);
    };
  }, [checkKeyDown]);
  return (
    <>
      <section className="practice_content__wrapper">
        <article className="practice_results">
          <img
            src="../img/cat-icons/won.svg"
            alt="MaKuzya"
            style={{ width: 150 }}
          />

          <h2 className="practice_results__title">
            You've earned 132 XP today
          </h2>
          <div className="practice_results__reward">
            <span>Practice Complete!</span>
            <strong>+ 10 XP</strong>
          </div>
        </article>
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
