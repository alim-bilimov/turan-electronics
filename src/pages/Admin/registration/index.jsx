import React, { useEffect, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import adminBox from "../../../image/_Режим_изоляции.png";
import googleIcons from "../../../image/Social google.svg";
import facebook from "../../../image/facebook.svg";
import telegram from "../../../image/Social telegramm.svg";
import { useMainContext } from "../../../context/MainContext";
import { auth } from "../../../firebase";

const Register = () => {
  const { createUser, googleSign, facebookSign, errors, valid } =
    useMainContext();

  const [password, setPassword] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [eye, setEye] = useState(false);
  const [passw, setPassw] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    pass: "",
    againPass: "",
  });

  function getChangeInput(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleChange() {
    if (values.pass == values.againPass) {
      createUser(values.name, values.lastName, values.email, values.pass);
      setValues({
        name: "",
        lastName: "",
        email: "",
        pass: "",
        againPass: "",
      });
    } else {
    }
  }

  function google() {
    try {
      return googleSign();
    } catch (error) {
      console.log(error);
    }
  }

  function facebooks() {
    try {
      return facebookSign();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <center>
              {" "}
              <h1>Авторизация</h1>
            </center>
            <div className="admin--cards">
              <h3>
                Авторизуйтесь, указав свои контактные данные, или <br />
                воспользовавшись перечисленными сервисами
              </h3>
              <div className="admin--cardInput">
                <input
                  style={{ border: valid ? "solid 1px red" : "" }}
                  onChange={getChangeInput}
                  className="input"
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={values.name}
                />
                <input
                  style={{
                    border: valid ? "solid 1px red" : "",
                  }}
                  onChange={getChangeInput}
                  type="text"
                  className="input"
                  placeholder="Фамилия"
                  name="lastName"
                  value={values.lastName}
                />
                <input
                  style={{ border: valid ? "solid 1px red" : "" }}
                  onChange={getChangeInput}
                  type="text"
                  className="input
                "
                  placeholder="Email..."
                  name="email"
                  value={values.email}
                />
                <div
                  style={{
                    border: password ? " solid 1px red" : "",
                    border: valid ? "solid 1px red" : "",
                  }}
                  className="input--icons"
                >
                  <input
                    onChange={getChangeInput}
                    type={eye ? "text" : "password"}
                    placeholder="Пароль"
                    name="pass"
                    value={values.pass}
                  />
                  <IoMdEyeOff
                    onClick={() => {
                      setEye(true);
                    }}
                    className="eye"
                    style={{
                      fontSize: "20px",
                      display: eye ? "none" : "block",
                    }}
                  />
                  <IoIosEye
                    onClick={() => {
                      setEye(false);
                    }}
                    style={{
                      display: eye ? "block" : "none",
                      fontSize: "20px",
                    }}
                  />
                </div>
                <p className="p-valid">
                  {password ? "Пароли не совпадают!!!" : ""}
                </p>
                <div
                  style={{
                    border: password ? "solid 1px red" : "",
                    border: valid ? "solid 1px red" : "",
                  }}
                  className="input--icons"
                >
                  <input
                    onChange={getChangeInput}
                    type={passw ? "text" : "password"}
                    placeholder="Повторите Пароль"
                    name="againPass"
                    value={values.againPass}
                  />
                  <IoMdEyeOff
                    onClick={() => {
                      setPassw(true);
                    }}
                    className="eye"
                    style={{
                      fontSize: "20px",
                      display: passw ? "none" : "block",
                    }}
                  />
                  <IoIosEye
                    className="eye"
                    onClick={() => {
                      setPassw(false);
                    }}
                    style={{
                      fontSize: "20px",
                      display: passw ? "block" : "none",
                    }}
                  />
                </div>
                <p className="valids">{valid ? "заполните все поле!!!" : ""}</p>
                <p className="p-valid">
                  {password ? "Пароли не совпадают!!!" : ""}
                </p>

                <h3>{errors}</h3>

                <button
                  onClick={() => {
                    if (values.pass != values.againPass) {
                      setPassword(true);
                    }
                    handleChange();
                  }}
                >
                  Регистрация
                </button>
                <div className="admin--text">
                  <h4>У вас уже есть аккаунт?</h4>
                  <Link to="/admin">Войти</Link>
                </div>
                <div className="img--admin">
                  <img src={adminBox} alt="" />
                  <img src={adminBox} alt="" />
                  <img src={adminBox} alt="" />
                  <img src={adminBox} alt="" />
                  <img src={adminBox} alt="" />
                </div>
                <h3 style={{ marginTop: "10px" }}>Войти через</h3>
                <div className="admin--registration">
                  <img onClick={() => facebooks()} src={facebook} alt="" />
                  <img onClick={() => google()} src={googleIcons} alt="" />
                  <img src={telegram} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
