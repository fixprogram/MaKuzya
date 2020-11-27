import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useSubject } from "../../context/subject.context";
import Loader from "../Loader";

import LessonItem from "../LessonItem";
import { useProfile } from "../../context/profile.context";

function LessonsList({}) {
  const { isLoading, lessons } = useSubject();
  const { profile } = useProfile();
  const progress =
    profile.progress[`${profile.activeSubject.toLowerCase()}`][0];
  return (
    <section className="main_block">
      <div className="lessons_list">
        {isLoading ? (
          <Loader />
        ) : (
          lessons.map((it, i) => {
            return (
              <div className="lesson_wrapper" key={it.id}>
                <LessonItem
                  id={it.id}
                  title={it.title}
                  progress={progress[i] || 0}
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
  lessons: state.lessons,
});

export default connect(mapStateToProps)(LessonsList);
