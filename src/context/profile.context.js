import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;

    const authUnsub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on("value", (snap) => {
          const {
            name,
            createdAt,
            avatar,
            lingots,
            streak,
            activeSubject,
            chapter,
            progress,
            everydayProgress,
          } = snap.val();

          const data = {
            name,
            createdAt,
            avatar,
            lingots,
            streak,
            activeSubject,
            chapter,
            uid: authObj.uid,
            email: authObj.email,
            progress,
            everydayProgress,
          };

          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }

        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub();

      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
