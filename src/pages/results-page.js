import React from "react";
import ResultsContent from "../components/ResultsContent";
import { Animation } from "rsuite";

const { Slide } = Animation;

const ResultsPage = ({}) => {
  return (
    <section className="practice_block">
      {/* <Slide in={true} placement="right"> */}
      <ResultsContent />
      {/* </Slide> */}
    </section>
  );
};

export default ResultsPage;
