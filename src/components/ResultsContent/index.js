import React, { useEffect } from "react";
import { database } from "../../misc/firebase";
import { connect } from "react-redux";

import ResultsButtons from "./resultsButtons";

function PracticeContent({ type, user, lessons }) {
  async function checkKeyDown(e) {
    if (e.key === "Enter") {
      await writeToDB();
      window.location.replace("/");
    }
  }
  const {
    uid,
    activeSubject,
    lingots,
    everydayProgress,
    progress,
    chapter,
  } = user;
  const actualLessons = lessons.filter((it) => it.chapter === chapter);
  const progressLesson = progress[`${activeSubject.toLowerCase()}`][chapter];
  const typeIndex = actualLessons.map((lesson) => lesson.id).indexOf(type);

  const newItem = progressLesson[typeIndex] + 10;

  const databaseProgress = database.ref(
    `/profiles/${uid}/progress/${activeSubject.toLowerCase()}/`
  );
  const databaseProfile = database.ref(`/profiles/${uid}`);

  async function writeToDB() {
    await databaseProgress.update({
      [chapter]: [
        ...progressLesson.slice(0, typeIndex),
        newItem,
        ...progressLesson.slice(typeIndex + 1),
      ],
    });
    await databaseProfile.update({
      everydayProgress:
        everydayProgress < 100 ? everydayProgress + 10 : everydayProgress,
      lingots: lingots + 2,
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", checkKeyDown);

    return () => {
      window.removeEventListener("keydown", checkKeyDown);
    };
  }, [checkKeyDown]);
  return (
    <>
      <section className="practice_content__wrapper">
        <article className="practice_results">
          <img
            src="../img/cat-icons/won.svg"
            alt="MaKuzya"
            style={{ width: 150 }}
          />

          <h2 className="practice_results__title">
            You've earned 132 XP today
          </h2>
          <div className="practice_results__reward">
            <span>Practice Complete!</span>
            <strong>+ 10 XP</strong>
          </div>
        </article>
      </section>

      <ResultsButtons writeToDB={() => writeToDB()} />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  variants: state.practice.currentTask.variants,
  lessons: state.lessons.lessons,
  practicePopupMessage: state.practice.practicePopupMessage,
});

export default connect(mapStateToProps)(PracticeContent);
