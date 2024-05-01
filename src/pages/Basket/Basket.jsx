import React from "react";
import EmptyBasketCard from "./EmptyBasketCard/EmptyBasketCard";
import { Link } from "react-router-dom";
import BasketCard from "./BasketCard/BasketCard";
import WayToPay from "./WayToPay/WayToPay";
import Delivery from "./Delivery/Delivery";

const fakeData = [
  {
    id: 1,
    title: "Смартфон Apple Iphone 14 Pro max 256GB",
    description: "iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....",
    color: "blue",
    quantity: 1,
    rating: 3,
    price: 81000,
    img: "https://www.istore.kg/media/products/iphone-15-finish-select-202309-6-1inch-blue.webp",
  },
  {
    id: 1,
    title: "Смартфон Apple Iphone 14 Pro max 256GB",
    description: "iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....",
    color: "pink",
    quantity: 1,
    rating: 5,
    price: 74500,
    img: "https://www.istore.kg/media/products/iphone-15-finish-select-202309-6-1inch-blue.webp",
  },
];

const Basket = () => {
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <Link to="/">Главная /</Link>
          <Link to="/catalog"> Каталог /</Link>
          <Link to="/basket"> Корзина</Link>
          <EmptyBasketCard text={"Ваша корзина пуста"} />
          <div className="basket--in">
            <div className="basket--in__title">
              <h2>Корзина</h2>
              <button>Очистить корзину</button>
            </div>
            <div className="basket--in__cards">
              {fakeData.map((el, id) => (
                <BasketCard el={el} key={id} />
              ))}
            </div>
            <div className="basket-in__total">
              <h1>Итого 149 000 сом</h1>
              <div className="basket-in__total--btn">
                <button>Оформить заказ</button>
              </div>
            </div>
            <WayToPay/>
            <Delivery/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
