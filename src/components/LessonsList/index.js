import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSubject } from "../../context/subject.context";
import LessonItem from "../LessonItem";

function LessonsList({}) {
  const lessons = useSubject();
  return (
    <section className="main_block">
      <div className="lessons_list">
        {lessons.map((it) => {
          return (
            <div className="lesson_wrapper" key={it.id}>
              <LessonItem id={it.id} title={it.title} />
            </div>
          );
        })}

        <div className="practice_link__wrapper">
          <Link
            className="practice_link"
            to={`practice/${lessons[lessons.length - 1].id}`}
          >
            <img src="./img/dumbbell.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  lessons: state.lessons,
});

export default connect(mapStateToProps)(LessonsList);
