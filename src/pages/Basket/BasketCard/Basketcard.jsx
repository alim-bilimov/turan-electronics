import React from "react";
import { HiTrash } from "react-icons/hi2";
const Basketcard = ({ data }) => {
  return (
    <div className="basketCard">
      <img src={data.img} alt="img" width={100} />
      <div className="basketCard--content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className="basketCard--content__color">
          <h3>
            Цвет
            {data.color.map((el) => (
              <div
                style={{ background: el }}
                className="basketCard--content__color--circle"
              ></div>
            ))}
          </h3>
          <div className="basketCard--content__color--btns">
            <button>-</button>
            <span>{data.quantity}</span>
            <button>+</button>
          </div>
          <button>
            <HiTrash />
            Удалить
          </button>
        </div>
      </div>
      <div className="basketCard--price">
        <div className="basketCard--price__starts">
          <div
            className="basketCard--price__starts--star"
            style={{ backgroundColor: data.rating >= 1 ? "yellow" : "gray" }}
          ></div>
          <div
            className="basketCard--price__starts--star"
            style={{ backgroundColor: data.rating >= 2 ? "yellow" : "gray" }}
          ></div>
          <div
            className="basketCard--price__starts--star"
            style={{ backgroundColor: data.rating >= 3 ? "yellow" : "gray" }}
          ></div>
          <div
            className="basketCard--price__starts--star"
            style={{ backgroundColor: data.rating >= 4 ? "yellow" : "gray" }}
          ></div>
          <div
            className="basketCard--price__starts--star"
            style={{ backgroundColor: data.rating >= 5 ? "yellow" : "gray" }}
          ></div>
        </div>
        <h4>{data.price - (data.price * 8) / 100} сом</h4>
        <h5>{data.price} сом</h5>
      </div>
    </div>
  );
};

export default Basketcard;
