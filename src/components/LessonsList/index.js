import React from "react";
import { connect } from "react-redux";

import LessonItem from "../LessonItem";
import { actionCreatorUser } from "../../actions";

function LessonsList({ user, setChapter, lessons, chapter }) {
  const { progress, activeSubject } = user;
  const progressLesson = progress[`${activeSubject.toLowerCase()}`][chapter]; // Name of the subject -> number of block of lessons
  const romeNums = new Array(12).fill("Lorem title");
  const actualLessons = lessons.filter((it) => it.chapter === chapter);
  return (
    <section className="main_block">
      <div className="lessons_list">
        {actualLessons.map((it, i) => {
          return (
            <div className="lesson_wrapper" key={`${i + " " + chapter}`}>
              <LessonItem
                id={it.id}
                title={it.title}
                progress={progressLesson[i]}
              />
            </div>
          );
        })}

        {/* <div className="practice_link__wrapper">
          <Link
            className="practice_link"
            to={`practice/${lessons[lessons.length - 1].id}`}
          >
            <img src="./img/dumbbell.svg" alt="" />
          </Link>
        </div> */}
      </div>
      <div className="lessons_slider">
        <ol type="I">
          {romeNums.map((num, i) => (
            <li
              key={i + " " + chapter}
              className={`${i === chapter ? "active" : ""}`}
              onClick={() => setChapter(i)}
            >
              <span>{num}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  lessons: state.lessons.lessons,
  user: state.user,
  chapter: state.user.chapter,
});

const mapDispatchToProps = (dispatch) => ({
  setChapter: (chapter) => dispatch(actionCreatorUser.setChapter(chapter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList);
