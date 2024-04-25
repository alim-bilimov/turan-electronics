import React from "react";
import logo from "../../image/Logo image.png";
import img from "../../image/_Слой_1.png";
import imgText from "../../image/Vector.png";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { RiPoliceCarFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <img className="logo" src={logo} alt="" width={220} />
            <div className="header-text">
              <div className="img-text">
                <img src={img} alt="" />
                <img className="text-logo" src={imgText} alt="" />
              </div>
              <div className="veb-btn">
                <NavLink to="/">
                  <button>Главная</button>
                </NavLink>
                <NavLink to="/category">
                  <button>Категории</button>
                </NavLink>
                <NavLink to="/news">
                  <button>Новости</button>
                </NavLink>
                <NavLink to="/aboutus">
                  <button>О нас</button>
                </NavLink>
              </div>
            </div>
            <div className="header-btn">
              <div className="btn-span">
                <NavLink to="/favorite">
                  <button className="btn-heart">
                    <FaRegHeart />
                  </button>
                </NavLink>
                <NavLink to="/basket">
                  <button>
                    <CiShoppingBasket style={{ fontSize: "20px" }} />
                  </button>
                </NavLink>
                <NavLink to="/admin">
                  <button>
                    <RiUserLine />
                  </button>
                </NavLink>
              </div>
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
        </div>
      </div>

      <section id="hero">
        <div className="container">
          <div className="hero">
            <button>
              <RiPoliceCarFill
                style={{
                  color: " #FF7300",
                  fontSize: "30px",
                }}
              />{" "}
              Удобная доставка
            </button>
            <button>
              <GrServices
                style={{
                  color: "#FF7300",
                }}
              />{" "}
              Быстросервис
            </button>
            <button>
              {" "}
              <FaCheckCircle style={{ color: "#ff7300" }} />
              Гарантия лучшей цены
            </button>
            <button>
              {" "}
              <FiPercent style={{ color: "#ff7300" }} />
              Рассрочка и кредит
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
