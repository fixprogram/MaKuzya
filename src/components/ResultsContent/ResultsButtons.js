import React from "react";

const ResultsButtons = ({ writeToDB }) => {
  return (
    <section className="practice_buttons_wrapper">
      <div className="practice_buttons">
        <article className="practice_buttons_inner">
          <button className="practice_button">Review lesson</button>
          <button
            className={`practice_button enabled`}
            onClick={async () => {
              await writeToDB();
              window.location.replace("/");
            }}
          >
            Continue
          </button>
        </article>
      </div>
    </section>
  );
};

export default ResultsButtons;
