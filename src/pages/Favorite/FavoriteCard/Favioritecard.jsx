import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";

const Favioritecard = ({ data }) => {
  return (
    <div className="favoriteCard">
      <div className="favoriteCard--stars">
        <div
          className="favoriteCard--stars__star"
          style={{ background: data.rating >= 1 ? "yellow" : "grey" }}
        ></div>
        <div
          className="favoriteCard--stars__star"
          style={{ background: data.rating >= 2 ? "yellow" : "grey" }}
        ></div>
        <div
          className="favoriteCard--stars__star"
          style={{ background: data.rating >= 3 ? "yellow" : "grey" }}
        ></div>
        <div
          className="favoriteCard--stars__star"
          style={{ background: data.rating >= 4 ? "yellow" : "grey" }}
        ></div>
        <div
          className="favoriteCard--stars__star"
          style={{ background: data.rating >= 5 ? "yellow" : "grey" }}
        ></div>
      </div>
      <img src={data.img} alt="img" />
      <div className="favoriteCard--heart">
        <FaHeart />
      </div>
      <div className="favoriteCard--discount">
        <h2>{data.price - (data.price * 5) / 100} сом</h2>
        <h5 className="favoriteCard--discount__price">{data.price} сом</h5>
      </div>
      <div className="favoriteCard--ecenomy">
        <span>-5%</span>
        <span>экономия {Math.round((data.price * 5) / 100)} сом</span>
      </div>
      <strong>{data.name}</strong>
      <p>{data.description.slice(0, 70)}....</p>
      <div className="favoriteCard--order">
        <button>Быстрый заказ</button>
        <HiOutlineShoppingBag />
      </div>
      <div className="favoriteCard--color">
        <p>
          Цвет{" "}
          {data.color.map((el) => (
            <div
              className="favoriteCard--color__circle"
              style={{ background: el }}
            ></div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Favioritecard;
