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
  const [valid, setValid] = useState(false);

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
      if (email === "" && pass === "") {
        setValid(true);
      }
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
  console.log(user);

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
    valid,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MainContext;
