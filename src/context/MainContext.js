import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);

const MainContext = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [errors, setErrors] = useState("");

  const googleAuthProvider = new GoogleAuthProvider();
  const FacebookProvaider = new FacebookAuthProvider();

  async function createUser(name, lastName, email, pass) {
    try {
      await createUserWithEmailAndPassword(auth, email, pass).then((res) => {
        let person = res.user;
        updateProfile(person, {
          displayName: name + "" + lastName,
        });
        navigate("/admin");
      });
    } catch (error) {
      setErrors(error.message);
    }
  }

  async function signIn(email, pass) {
    await signInWithEmailAndPassword(auth, email, pass);
  }

  async function googleSign() {
    await signInWithPopup(auth, googleAuthProvider);
  }

  async function facebookSign() {
    await signInWithPopup(auth, FacebookProvaider);
  }

  async function userCreate() {
    await onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }

  useEffect(() => {
    userCreate();
  }, []);

  const values = {
    createUser,
    signIn,
    user,
    googleSign,
    facebookSign,
    errors,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MainContext;
