import React from "react";
import ResultsContent from "../components/ResultsContent";

const ResultsPage = ({ type }) => {
  return (
    <section className="practice_block practice_block--results">
      <ResultsContent type={type} />
    </section>
  );
};

export default ResultsPage;
