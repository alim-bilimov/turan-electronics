import React from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../../../context/MainContext";

const Profile = () => {
  const { user } = useMainContext();
  return (
    <div>
      <div id="profile">
        <div className="container">
          <div className="profile">
            <div className="profile--card">
              <div className="box">
                <h5>Имя</h5>
                <input type="text" />
              </div>
              <div className="box">
                <h5>Email</h5>
                <input type="text" />
              </div>
              <div className="box">
                <h5>День рождение</h5>
                <div className="select">
                  <select name="" id="">
                    <option value="">День</option>
                  </select>
                  <select name="" id="">
                    <option value="">Месяц</option>
                  </select>
                  <select name="" id="">
                    <option value="">Год</option>
                  </select>
                </div>
              </div>
              <div className="box">
                <h5>пароль</h5>
                <input type="text" />
              </div>
              <div className="profile--edit">
                <div className="box">
                  <h5>Подтвердить Пароль</h5>
                  <input type="text" />
                </div>
                <div className="boxes">
                  <button>Сохранить</button>
                  <Link to="/admin">
                    <button>Отмена</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
