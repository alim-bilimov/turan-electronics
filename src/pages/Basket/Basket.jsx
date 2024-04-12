import React from "react";
import Basketcard from "./BasketCard/Basketcard";
import Delivery from "./BasketCard/Delivery/Delivery";
import WayToPay from "./BasketCard/Delivery/WayToPay/WayToPay";

const fakeData = [
  {
    id: 1,
    title: "Смартфон Apple Iphone 14 Pro max 256GB",
    description: "iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....",
    color: ["black", "aqua", "pink"],
    quantity: 1,
    rating: 3,
    price: 81000,
    img: "https://www.istore.kg/media/products/iphone-15-finish-select-202309-6-1inch-blue.webp",
  },
  {
    id: 1,
    title: "Смартфон Apple Iphone 14 Pro max 256GB",
    description: "iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....",
    color: ["white", "blue", "pink"],
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
          <h3>Главная / Каталог / Корзина</h3>
          <div className="basket--emptycard">
            <p>Ваша корзина пуста</p>
          </div>
          <div className="basket--cardIsFull">
            <div className="basket--cardIsFull__title">
              <h1>Корзина</h1>
              <h4>Очистить корзину</h4>
            </div>
            <div className="basket--cardIsFull__cards">
              {fakeData.map((el) => (
                <Basketcard data={el} />
              ))}
            </div>
            <strong>Итого 149 000 сом</strong>
            <button className="basket--cardIsFull__order">
              Оформить заказ
            </button>
            <div className="basket--cardIsFull__wayToGet">
              <h1>Способ получения</h1>
              <span>У меня есть аккаунт</span>
              <div className="basket--cardIsFull__wayToGet--inputs">
                <input type="text" placeholder="Фамилия и имя  *" className="basket--cardIsFull__wayToGet--inputs__name"/>
                <div className="basket--cardIsFull__wayToGet--inputs__down">
                  <input type="text" placeholder="Телефон *"/>
                  <input type="email" placeholder="Email"/>
                </div>
              </div>
              <div className="basket--cardIsFull__wayToGet--signUpBtn">
                <input type="radio" />
                <label>Зарегистрироваться</label>
              </div>
            </div>
          </div>
          <Delivery/>
          <WayToPay/>
        </div>
      </div>
    </div>
  );
};

export default Basket;
