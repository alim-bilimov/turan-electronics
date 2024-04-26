import React, { useEffect, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import adminBox from "../../image/_Режим_изоляции.png";
import googleIcons from "../../image/Social google.svg";
import facebook from "../../image/facebook.svg";
import telegram from "../../image/Social telegramm.svg";
import axios from "axios";
import { useMainContext } from "../../context/MainContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Admin = () => {
  const [eye, setEye] = useState(false);
  const { signIn, user, errors } = useMainContext();
  console.log(user);
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  function handleSign(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function postSign() {
    try {
      return await signIn(values.email, values.pass);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin-link">
            <Link to="/">Главная /</Link>
            <Link> Мой профиль</Link>
          </div>
          <div className="admin">
            <center>
              {" "}
              <h1 style={{ display: user ? "none" : "block" }}>Авторизация</h1>
            </center>
            {user ? (
              <div>
                <h1>my profile</h1>
                <div className="sign--card">
                  <div className="sign--all">
                    <div className="sign--text">
                      <h1>Имя: </h1>
                      <h1>Email: </h1>
                      <h1>День рождение: </h1>
                      <h1>Соцсети</h1>
                    </div>

                    <div className="sign--profile">
                      <h1>{user.displayName}</h1>
                      <h1>{user.email}</h1>
                      <h1>29 april 2005</h1>
                      <h1>-</h1>
                    </div>
                  </div>
                  <div className="profile-btn">
                    <button
                      className="exit-btn"
                      onClick={() => {
                        signOut(auth);
                      }}
                    >
                      exit
                    </button>
                    <Link to="/profile">
                      <button> Редактировать</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="admin--card">
                <h3>
                  Авторизуйтесь, указав свои контактные данные, или <br />
                  воспользовавшись перечисленными сервисами
                </h3>
                <div className="admin--cardInput">
                  <input
                    onChange={handleSign}
                    className="input"
                    type="text"
                    placeholder="Email или телефон ..."
                    name="email"
                  />
                  <div className="input--icons">
                    <input
                      onChange={handleSign}
                      type={eye ? "text" : "password"}
                      placeholder="Пароль"
                      name="pass"
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
                  <button onClick={() => postSign()}>Войти</button>
                  <div className="admin--text">
                    <h4>Впервые у нас?</h4>
                    <Link to="/register">Регистрация</Link>
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
                    <img src={facebook} alt="" />
                    <img src={googleIcons} alt="" />
                    <img src={telegram} alt="" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
