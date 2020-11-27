import React, { createContext, useEffect, useState, useContext } from "react";
import { database } from "../misc/firebase";
import { transformToArrayWithId } from "../misc/utils";
import { useProfile } from "./profile.context";
import Loader from "../components/Loader";

const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { profile } = useProfile();

  useEffect(() => {
    if (profile) {
      const lessonsList = database.ref(
        `/subjects/${profile.activeSubject.toLowerCase()}`
      );

      lessonsList.on("value", (snap) => {
        const data = transformToArrayWithId(snap.val());
        setLessons(data);
        setIsLoading(false);
      });

      return () => {
        lessonsList.off();
      };
    }
  }, [profile]);

  if (isLoading) return <Loader />;

  return (
    <SubjectContext.Provider value={{ isLoading, lessons }}>
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubject = () => useContext(SubjectContext);
