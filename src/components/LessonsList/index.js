import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSubject } from "../../context/subject.context";
import Loader from "../Loader";

import LessonItem from "../LessonItem";

function LessonsList({ user }) {
  const { isLoading, lessons } = useSubject();
  const { progress, activeSubject } = user;
  const progressLesson = progress[`${activeSubject.toLowerCase()}`][0]; // Name of the subject -> number of block of lessons
  return (
    <section className="main_block">
      <div className="lessons_list">
        {isLoading ? (
          <Loader />
        ) : (
          lessons.map((it, i) => {
            return (
              <div
                className="lesson_wrapper"
                key={`${i + " " + progressLesson[i]}`}
              >
                <LessonItem
                  id={it.id}
                  title={it.title}
                  progress={progressLesson[i]}
                />
              </div>
            );
          })
        )}

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
  lessons: state.lessons.lessons,
  user: state.user,
});

export default connect(mapStateToProps)(LessonsList);
