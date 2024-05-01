import React from "react";
import BrandApple from "../../image/040fc87c16cb7ba19e5cd847aec88fea.png";
import BrandDyson from "../../image/dyson.png";
import BrandPlastation from "../../image/plastatyon.png";
import BrandSlmusng from "../../image/slmusng.png";
import BrandXiomi from "../../image/mi.png";
import logoTuran from "../../image/_Слой_1.png";
import logoTuranText from "../../image/Vector.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillCustomerService } from "react-icons/ai";
import { LuNetwork } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiListSettingsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import "./Footer-media.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer-notebook">
        <div id="brand">
          <div className="container">
            <div className="brand">
              <h1 className="brand--textH1">Бренды</h1>
              <div className="brand--allCard">
                <div className="brand--card">
                  <img src={BrandApple} alt="" width={240} />
                </div>
                <div className="brand--card">
                  <img src={BrandDyson} alt="" width={240} />
                </div>
                <div className="brand--card">
                  <img src={BrandPlastation} alt="" width={240} />
                </div>
                <div className="brand--card">
                  <img src={BrandSlmusng} alt="" width={240} />
                </div>
                <div className="brand--card">
                  <img src={BrandXiomi} alt="" width={240} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="turan">
          <div className="container">
            <div className="turan">
              <div className="turan--logo">
                <img src={logoTuran} alt="" />
                <img src={logoTuranText} alt="" />
              </div>

              <div className="--right">
                <h3>
                  Turan Electronics - ваш идеальный магазин для шопинга.
                  Обнаружьте
                  <br /> последние тренды, выбирайте изысканные товары,
                  оформляйте заказы с <br /> легкостью. Элегантный дизайн,
                  безопасные платежи и быстрая доставка - <br /> все, что вам
                  нужно для приятного онлайн-шопинга. <br /> <br />
                  Превратите свои желания в реальность с нами!
                </h3>
              </div>
            </div>
            <div className="turan--btn--logo">
              <a href="https://facebook.com/" target="_blank">
                <button>
                  <FaFacebook />
                </button>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <button>
                  <FaTwitter />
                </button>
              </a>
              <a href="https://github.com/" target="_blank">
                <button>
                  <AiOutlineGithub />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="container">
            <div className="footer">
              <div className="footer--text--one">
                <h1>Контакты</h1>

                <div className="footer--text--p">
                  <p>
                    {" "}
                    <IoLocationOutline
                      style={{ color: "#ff7300", fontSize: "30px" }}
                    />
                    Кыргызстан г. Бишкек ㅤㅤул.Киевская 168, 720001
                  </p>
                  <p>
                    {" "}
                    <LuNetwork
                      style={{ color: "#ff7300", fontSize: "30px" }}
                    />{" "}
                    Работаем каждый день с 10:00 до 20:00
                  </p>
                  <p>
                    {" "}
                    <AiFillCustomerService
                      style={{ color: "#ff7300", fontSize: "30px" }}
                    />
                    Тел: +99600000000 Смартфоны
                  </p>
                  <p>
                    <HiOutlineMailOpen
                      style={{ color: "#ff7300", fontSize: "30px" }}
                    />{" "}
                    Email: info@turanelectronic.kg
                  </p>
                </div>
              </div>
              <div className="footer--text--two">
                <h1>Информация</h1>

                <div className="footer--information">
                  <p>Система начислений КЭШБЕК</p>
                  <p>О Нас</p>
                  <p>Условия гарантии</p>
                  <p>Условия кредитования</p>
                  <p>Доставка</p>
                  <p>Политика конфиденциальности</p>
                  <p>Публичная оферта</p>
                  <p>Контакты</p>
                </div>
              </div>
              <div className="footer--text--two">
                <h1>Личный Кабинет</h1>

                <div className="footer--information">
                  <p>Личный Кабинет </p>
                  <p>История заказов</p>
                  <p>Закладки</p>
                  <p>Сравнить</p>
                  <p>Рассылка</p>
                  <p>Карта сайта</p>
                  <p>Производители</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mobile">
        <GrHomeRounded />
        <RiListSettingsLine />
        <FaRegHeart />
        <MdOutlinePersonOutline />
      </div>
    </div>
  );
};

export default Footer;
