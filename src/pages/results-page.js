import React from "react";
import ResultsContent from "../components/ResultsContent";
import { Animation } from "rsuite";

const { Slide } = Animation;

const ResultsPage = ({}) => {
  return (
    <section className="practice_block practice_block--results">
      {/* <Slide in={true} placement="right"> */}
      <ResultsContent />
      {/* </Slide> */}
    </section>
  );
};

export default ResultsPage;
