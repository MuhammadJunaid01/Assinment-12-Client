import React, { useEffect } from "react";
import { useState } from "react";
import firebaseAuthentication from "./../firebaseinit/firebaseInit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Alert, AlertTitle } from "@mui/material";

const useFirebase = () => {
  firebaseAuthentication();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        setError(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);
        const email = error.email;
        setError(email);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
    });
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("You are successfully Logout!  ");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const regesterWithEmail = (email, password) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => {
        setLoader(false);
      });
  };
  const loginWithEmailAndPass = (email, password) => {
    setLoader(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return {
    user,
    setUser,
    loader,
    setLoader,
    error,
    setError,
    loginWithGoogle,
    logOut,
    regesterWithEmail,
    loginWithEmailAndPass,
  };
};

export default useFirebase;
