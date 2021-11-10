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
    setLoader(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    setLoader(true);
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
      } else {
      }
      setLoader(false);
    });
  }, [auth]);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        alert("You are successfully Logout!  ");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const regesterWithEmail = (email, password) => {
    setLoader(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        // ...
      })
      .catch((error) => {
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
