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
  const { createUser, googleSign, facebookSign, errors } = useMainContext();
  const [eye, setEye] = useState(false);
  const [password, setPassword] = useState(false);
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
      alert("неправильный пароль!!!");
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
                  onChange={getChangeInput}
                  className="input"
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={values.name}
                />
                <input
                  onChange={getChangeInput}
                  type="text"
                  className="input"
                  placeholder="Фамилия"
                  name="lastName"
                  value={values.lastName}
                />
                <input
                  onChange={getChangeInput}
                  type="text"
                  className="input
                "
                  placeholder="Email..."
                  name="email"
                  value={values.email}
                />
                <div className="input--icons">
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
                      fontSize: "30px",
                      display: eye ? "none" : "block",
                    }}
                  />
                  <IoIosEye
                    onClick={() => {
                      setEye(false);
                    }}
                    style={{
                      display: eye ? "block" : "none",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <div className="input--icons">
                  <input
                    onChange={getChangeInput}
                    type={eye ? "text" : "password"}
                    placeholder="Повторите Пароль"
                    name="againPass"
                    value={values.againPass}
                  />
                  <IoMdEyeOff
                    onClick={() => {
                      setEye(true);
                    }}
                    className="eye"
                    style={{
                      fontSize: "30px",
                      display: eye ? "none" : "block",
                    }}
                  />
                  <IoIosEye
                    onClick={() => {
                      setEye(false);
                    }}
                    style={{
                      display: eye ? "block" : "none",
                      fontSize: "30px",
                    }}
                  />
                </div>
                <h3 className="h3--pass">Забыли пароль?</h3>
                <h3>{errors}</h3>

                <button
                  onClick={() => {
                    handleChange();
                  }}
                >
                  Регистрация
                </button>
                <div className="admin--text">
                  <h4>Впервые у нас?</h4>
                  <Link to="/admin">У вас уже есть аккаунт?</Link>
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
