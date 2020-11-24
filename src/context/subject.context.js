import React, { createContext, useEffect, useState, useContext } from "react";
import { database } from "../misc/firebase";
import { transformToArrayWithId } from "../misc/utils";
import { useProfile } from "./profile.context";

const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);
  const { isLoading, profile } = useProfile();

  useEffect(() => {
    if (profile) {
      console.log("PROFILE: ", profile);
      const lessonsList = database.ref(
        // `/subjects/${profile.activeSubject.toLowerCase()}`
        `/subjects/algebra}`
      );

      lessonsList.on("value", (snap) => {
        const data = transformToArrayWithId(snap.val());
        console.log("DATA: ", snap);
        setLessons(data);
      });

      return () => {
        lessonsList.off();
      };
    }
  }, [profile]);
  if (isLoading) return <div>isLoading</div>;

  return (
    <SubjectContext.Provider value={lessons}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubject = () => useContext(SubjectContext);
