import React from "react";
import firebase from "firebase/app";
import { auth, database } from "../misc/firebase";

import { Alert } from "rsuite";
import { SignInPage } from "../pages";

const SignIn = () => {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      console.log("USER  ", user);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          avatar: user.photoURL,
          lingots: 10,
          crowns: 0,
          streak: 1,
          activeSubject: "Algebra",
          everydayProgress: 0,
          progress: {},
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
