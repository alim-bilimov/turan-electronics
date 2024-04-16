import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";
import adminBox from "../../image/_Режим_изоляции.png";
import googleIcons from "../../image/Social google.svg";
import facebook from "../../image/facebook.svg";
import telegram from "../../image/Social telegramm.svg";
const Admin = () => {
  const [eye, setEye] = useState(false);

  return (
    <div>
      <div id="admin">
        <div className="container">
          <div className="admin">
            <center>
              {" "}
              <h1>Авторизация</h1>
            </center>
            <div className="admin--card">
              <h3>
                Авторизуйтесь, указав свои контактные данные, или <br />
                воспользовавшись перечисленными сервисами
              </h3>
              <div className="admin--cardInput">
                <input
                  className="input"
                  type="text"
                  placeholder="Email или телефон ..."
                />
                <div className="input--icons">
                  <input
                    type={eye ? "text" : "password"}
                    placeholder="Пароль"
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
                <button>Войти</button>
                <div className="admin--text">
                  <h4>Впервые у нас?</h4>
                  <Link>Регистрация</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
