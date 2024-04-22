import React from "react";
import Favioritecard from "./FavoriteCard/Favioritecard";
import ProductDetails from "../ProductDetails/ProductDetails";

const fake_data = [
  {
    id: 1,
    name: "Смартфон GALAXY Z FLIP5 5G 8/256GB",
    price: 105700,
    description:
      "Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F",
    color: ["green", "black", "yellow"],
    rating: 3,
    img: "https://micro-line.ru/images/detailed/5205/716_t4hq-cz.png",
  },
  {
    id: 2,
    name: "Смартфон GALAXY Z FLIP5 5G 8/256GB",
    price: 91500,
    description:
      "Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F",
    color: ["brown", "blue", "yellow"],
    rating: 3,
    img: "https://micro-line.ru/images/detailed/5205/716_t4hq-cz.png",
  },
  {
    id: 3,
    name: "Смартфон GALAXY Z FLIP5 5G 8/256GB",
    price: 91500,
    description:
      "Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F",
    color: ["red", "black", "purple"],
    rating: 5,
    img: "https://micro-line.ru/images/detailed/5205/716_t4hq-cz.png",
  },
  {
    id: 4,
    name: "Смартфон GALAXY Z FLIP5 5G 8/256GB",
    price: 91500,
    description:
      "Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F",
    color: ["pink", "grey", "yellow"],
    rating: 3,
    img: "https://micro-line.ru/images/detailed/5205/716_t4hq-cz.png",
  },
  {
    id: 5,
    name: "Смартфон GALAXY Z FLIP5 5G 8/256GB",
    price: 91500,
    description:
      "Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F, Гарантия от производителя в официальных СЦ на территории РФ.Galaxy Z F",
    color: ["blue", "white", "red"],
    rating: 2,
    img: "https://micro-line.ru/images/detailed/5205/716_t4hq-cz.png",
  },
];

const Favorite = () => {
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          <h3>Главная / Избранное</h3>
          <h1>Избранное</h1>
          <div className="favorite--emptyCard">
            <h2>Пусто</h2>
          </div>
          <div className="favorite--cards">
            <h4>Очистить список</h4>
            <div className="favorite--cards__card">
              {fake_data.map((el) => (
                <Favioritecard data={el} />
              ))}
            </div>
          </div>
          <button className="favorite--orderAll">Оформить заказ</button>
        </div>
        <ProductDetails/>
      </div>
    </div>
  );
};

export default Favorite;
