import React from "react";

const ResultsButtons = ({}) => {
  return (
    <section className="practice_buttons_wrapper">
      <div className="practice_buttons">
        <article className="practice_buttons_inner">
          <button
            className={`practice_button enabled`}
            onClick={() => window.location.replace("/")}
          >
            Continue
          </button>
        </article>
      </div>
    </section>
  );
};

export default ResultsButtons;
