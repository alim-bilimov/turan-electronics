import React, { useState } from "react";
import "./Category.scss";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Category = () => {
  const [like, setLike] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);
  return (
    <div id="category">
      <div className="container">
        <div className="category">
          <h1>Главная / Apple</h1>
          <div className="category-filter-products">
            <img
              src="https://s3-alpha-sig.figma.com/img/afe7/e616/040fc87c16cb7ba19e5cd847aec88fea?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCqLLHMDpkltYzjkHmBQ9JSwFenJ5kSFNZpxkWRd~71S3wSJ~iSWFJZcWDtd2gRxYbUMG4SB1bOBM7bSMslSTWKSjKfJpo64e-syCgOS0OKjzpBWkSeLc0VwsNAyydMqGBrgDvpd0LNCdb~Is7mhW-xzrj8f5IPGxSDIP~LONBGQ2PxZzzJPpvEdRlo9Hf7fJmfuxr6y6hsY1FiVfy0GSu00~1VjwqmQN7SSqnXhzdPSeVmr8BN~ECq0b052eIsZFp8lpeiJrX4G63qHKCwujifIs1i~75~CazZCja~tYOWkoWDCrZ7MxFFNae1qJgXh2Ok~2dwviRwT5t~HGfBhVw__"
              alt=""
            />
            <select id="">
              <option value="all">Все</option>
              <option value="iphone-14">IPhone 14</option>
              <option value="iphone-14-pro">IPhone 14 Pro</option>
              <option value="iphone-14-pro-max">IPhone 14 Pro Max</option>
              <option value="watch">Watch Series 8</option>
              <option value="airPods">AirPods</option>
              <option value="accesuare">Аксессуары </option>
            </select>
            <select id="">
              <option value="all">Все</option>
              <option value="128 ГБ">128 ГБ</option>
              <option value="256 ГБ">256 ГБ</option>
              <option value="512 ГБ">512 ГБ</option>
              <option value="1 ТБ">1 ТБ</option>
              <option value="64 ТБ">64 ТБ</option>
            </select>
            <select id="">
              <option value="all">Все</option>
            </select>
          </div>
          <div className="category-blocks">
            <div className="category-block">
              <div className="category-star-rating">
                <p>Новое</p>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/16a6/4c32/7dc383443b2ed8e7c5e0162c6f6d7e5f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooy4vnRWuEAIbsBGD2kFEB~DIl~QkLx0OJD9pevYI55I-BLPmoxRBb7ClR4N94uOgezBS1TcVSS7wx0LLPen00Nhd1bgTOCj71r5FQADPJOo0~ICtWtcIVKGGfyhVWVwlOcNI-HcBin3D5yigFwAzIE0konZWRFSsdN~z0oglx0CRFF3g9HD2ZEy0I-hKGX8g~2ccRycOFu78khrec8zScK7bKdyDOwb9H24vv2aCg8TEUiY7GZ~C6ctoIyAUaQKvBZqiNgzbPcCdJTsqkVxEkmJXhHTkpd5v-rdt-FR8QPntc1EhmigDtqNmM~WhjxtpvliqzNxASB-n2edZ0cCiw__"
                alt=""
              />
              <span className="like">
                <FaHeart
                  onClick={() => {
                    setLike(!like);
                    setLikeAnimation(true);
                    setTimeout(() => {
                      setLikeAnimation(false);
                    }, 200);
                  }}
                  style={{
                    color: like ? "red" : "",
                    transition: ".2s",
                    transform: likeAnimation ? "scale(1.1)" : "",
                  }}
                />
              </span>
              <span>
                <FaCheckCircle style={{ fontSize: "25px", color: "#FF7300" }} />{" "}
                В наличии
              </span>
              <h3>5 700 сом</h3>
              <h2>Адаптер Apple</h2>
              <p className="plot">
                iPhone 14 Pro <br /> MaxВолшебный новый <br /> способ
                взаимодействия с <br /> iPhone. .....
              </p>
              <div className="category-basket">
                <button>Быстрый заказ</button>
                <RiShoppingBasketLine />
              </div>
              <div className="colors">
                <span>Цвет</span>
                <div className="color-1"></div>
                <div className="color-2"></div>
                <div className="color-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
