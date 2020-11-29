import React from "react";
import firebase from "firebase/app";
import { Alert } from "rsuite";

import { auth, database } from "../misc/firebase";
import { SignInPage } from "../pages";

const SignIn = () => {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      const arr = new Array(10).fill(0);
      const chapters = new Array(12).fill(0);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          avatar: user.photoURL,
          lingots: 10,
          streak: 1,
          activeSubject: "Algebra",
          chapter: 0,
          everydayProgress: 0,
          progress: {
            algebra: chapters.map((chap, i) => arr.map((it) => it)),
            geometria: chapters.map((chap, i) => arr.map((it) => it)),
          },
        });
      }

      Alert.success("Signed in", 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <SignInPage
      onFacebookSignIn={onFacebookSignIn}
      onGoogleSignIn={onGoogleSignIn}
    />
  );
};

export default SignIn;
