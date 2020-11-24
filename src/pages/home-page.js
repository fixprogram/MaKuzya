import React from "react";

import Header from "../components/Header";
import LessonsList from "../components/LessonsList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <section className="app">
      <Header />
      <LessonsList />
      <Footer />
    </section>
  );
};

export default HomePage;
