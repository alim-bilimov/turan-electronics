import React from "react";
import { HiTrash } from "react-icons/hi2";

const BasketCard = ({ el }) => {
  return (
    <div className="basketCard">
      <div className="basketCard--stars">
        <div className="basketCard--stars__star" style={{background: el.rating >= 1 ? 'yellow' : 'grey'}}></div>
        <div className="basketCard--stars__star" style={{background: el.rating >= 2 ? 'yellow' : 'grey'}}></div>
        <div className="basketCard--stars__star" style={{background: el.rating >= 3 ? 'yellow' : 'grey'}}></div>
        <div className="basketCard--stars__star" style={{background: el.rating >= 4 ? 'yellow' : 'grey'}}></div>
        <div className="basketCard--stars__star" style={{background: el.rating >= 5 ? 'yellow' : 'grey'}}></div>
      </div>
      <img src={el.img} alt="img" width={225} />
      <div className="basketCard--text">
        <h2>{el.title}</h2>
        <div className="basketCard--text__desPrice">
          <p>{el.description}</p>
          <div className="basketCard--text__desPrice--price">
            <h2>{el.price - (el.price * 8) / 100} сом</h2>
            <h4>{el.price} сом</h4>
          </div>
        </div>
        <div className="basketCard--text__colorCount">
            <div className="basketCard--text__colorCount--color">
                <h3>Цвет :</h3>
                <div className="basketCard--text__colorCount--color__cirlce" style={{background: el.color}}></div>
            </div>
            <div className="basketCard--text__colorCount--count">
                <div className="basketCard--text__colorCount--count__counter">
                    <button>-</button>
                    <span>{el.quantity}</span>
                    <button>+</button>
                </div>
                <div className="basketCard--text__colorCount--count__remove">
                    <a><HiTrash/></a>
                    <span>Удалить</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
