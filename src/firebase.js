import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDITklZm2KBPM5BDbgXjIcJ1bgHHrI4gVQ",
  authDomain: "turanproject-dfa70.firebaseapp.com",
  projectId: "turanproject-dfa70",
  storageBucket: "turanproject-dfa70.appspot.com",
  messagingSenderId: "240171880757",
  appId: "1:240171880757:web:6af2aecacfa8d3999ebc7c",
  measurementId: "G-5SXCNXJZX6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
