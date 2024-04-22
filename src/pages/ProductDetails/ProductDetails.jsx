import React from "react";
import { FaHeart } from "react-icons/fa";
import { BiSolidMessageEdit } from "react-icons/bi";

const fake_details_data = {
  name: "Apple IPhone 14 Pro Max ",
  main_url:
    "https://static.doji.co/product/medias/smartphones/apple/iphone-14-pro-max/1-front-back-gold-thumbnail.png",
  part_of_main_url1: "https://www.myphone.kg/files/media/17/17209.webp",
  part_of_main_url2: "https://www.myphone.kg/files/media/17/17220.webp",
  part_of_main_url3:
    "https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14promax/gold/wwen_iphone14promax_q422_gold_pdp-images_position-4-1200x1200.jpg",
  part_of_main_url4:
    "https://apple-market.ru/image/cache/catalog/Add/14%20Pro%20max/14-pro-max-silver-2.png_500.webp",
  color: ["black", "rgba(242, 228, 201, 1)", "white"],
  description:
    "Смартфон iPhone 14 в корпусе цвета Gold со встроенной памятью 128 Гб оснащен экраном диагональю 6,1 дюйма, выполненным по технологии OLED. Дисплей типа Super Retina XDR обладает разрешением 2532x1170 пикселей. В этой модели установлен шестиядерный процессор А15 Bionic. В девайсе ",
  rating: 2,
  phone_memory: ["256 gb", "512 gb", "1 tb"],
  price: 74500,
  characteristics: {
    guarantee: 1,
    screen: "6,1*/2532*1170Пикс",
    screen_technology: "OLED",
    processor_type: "A15 Bionic",
    built_in_memory: "256gb",
    main_camera: "12/12 Мпикс",
    number_of_cores: "6",
    video_resolution: "3840/2160 Пикс(4K)",
  },
};

const review = [
  {
    userName: "Айгерим Атамбекова",
    mark: 3,
    comment:
      "Заказала долгожданный свой Iphone на этом сайте, спасибо большое у вас цены всегда ниже, чем в других местах. Заказ пришел вовремя, Успехов Вам всегда!",
    date: "02.02.2024",
  },
];

let str = ".....................";
console.log(str.length);
const ProductDetails = () => {
  return (
    <div id="productDetails">
      <div className="containerr">
        <div className="productDetails">
          <h2>Главная / Каталог / Iphone / Ipnone 14 Pro max</h2>
          <div className="productDetails--card">
            <div className="productDetails--card__left">
              <div className="productDetails--card__left--mainImg">
                <img src={fake_details_data.main_url} alt="img" />
              </div>
              <div className="productDetails--card__left--partImgs">
                <div className="productDetails--card__left--partImgs__box">
                  <img
                    src={fake_details_data.part_of_main_url1}
                    alt="img"
                    width={100}
                  />
                </div>
                <div className="productDetails--card__left--partImgs__box">
                  <img
                    src={fake_details_data.part_of_main_url2}
                    alt="img"
                    width={100}
                  />
                </div>
                <div className="productDetails--card__left--partImgs__box">
                  <img
                    src={fake_details_data.part_of_main_url3}
                    alt="img"
                    width={100}
                  />
                </div>
                <div className="productDetails--card__left--partImgs__box">
                  <img
                    src={fake_details_data.part_of_main_url4}
                    alt="img"
                    width={100}
                  />
                </div>
              </div>
              <p className="productDetails--card__left--color">
                Выбрать цвет :{" "}
                {fake_details_data.color.map((el) => (
                  <div
                    style={{ background: el }}
                    className="productDetails--card__left--color__circle"
                  ></div>
                ))}
              </p>
              <div className="productDetails--card__left--description">
                <h3>Описание</h3>
                <p>
                  {fake_details_data.description.slice(0, 190)}{" "}
                  <span className="productDetails--card__left--description__more">
                    {fake_details_data.description.slice(190, 234)}
                  </span>{" "}
                  <span className="productDetails--card__left--description__last">
                    {fake_details_data.description.slice(234, 278)}
                  </span>
                  <button>Развернуть</button>
                </p>
              </div>
            </div>
            <div className="productDetails--card__rigth">
              <div className="productDetails--card__rigth--rating">
                <div
                  className="productDetails--card__rigth--rating__star"
                  style={{
                    background:
                      fake_details_data.rating >= 1
                        ? "rgba(255, 115, 0, 1)"
                        : "grey",
                  }}
                ></div>
                <div
                  className="productDetails--card__rigth--rating__star"
                  style={{
                    background:
                      fake_details_data.rating >= 2
                        ? "rgba(255, 115, 0, 1)"
                        : "grey",
                  }}
                ></div>
                <div
                  className="productDetails--card__rigth--rating__star"
                  style={{
                    background:
                      fake_details_data.rating >= 3
                        ? "rgba(255, 115, 0, 1)"
                        : "grey",
                  }}
                ></div>
                <div
                  className="productDetails--card__rigth--rating__star"
                  style={{
                    background:
                      fake_details_data.rating >= 4
                        ? "rgba(255, 115, 0, 1)"
                        : "grey",
                  }}
                ></div>
                <div
                  className="productDetails--card__rigth--rating__star"
                  style={{
                    background:
                      fake_details_data.rating >= 5
                        ? "rgba(255, 115, 0, 1)"
                        : "grey",
                  }}
                ></div>
              </div>
              <h1>{fake_details_data.name}</h1>
              <div className="productDetails--card__rigth--memory">
                <span>Память</span>
                {fake_details_data.phone_memory.map((el) => (
                  <div className="productDetails--card__rigth--memory__gb">
                    {el}
                  </div>
                ))}
              </div>
              <h1 className="productDetails--card__rigth--price">
                {fake_details_data.price} сом
              </h1>
              <div className="productDetails--card__rigth--addBasket">
                <button>В корзину</button>
                <a>
                  <FaHeart />
                </a>
              </div>
              <div className="productDetails--card__rigth--characteristics">
                <h4>Характеристики:</h4>
                <div className="productDetails--card__rigth--characteristics__card">
                  <div className="productDetails--card__rigth--characteristics__card--des">
                    <p>Гарантия{str}</p>
                    <p>Экран{str}</p>
                    <p>Технология экрана{str}</p>
                    <p>Тип процессора{str}</p>
                    <p>Встроенная память (ROM){str}</p>
                    <p>Основная камера{str}</p>
                    <p>Количество ядер{str}</p>
                    <p>Разрешение видеосъемки{str}</p>
                  </div>
                  <div className="productDetails--card__rigth--characteristics__card--character">
                    <p> {fake_details_data.characteristics.guarantee}</p>
                    <p> {fake_details_data.characteristics.screen}</p>
                    <p>
                      {" "}
                      {fake_details_data.characteristics.screen_technology}
                    </p>
                    <p> {fake_details_data.characteristics.processor_type}</p>
                    <p> {fake_details_data.characteristics.built_in_memory}</p>
                    <p> {fake_details_data.characteristics.main_camera}</p>
                    <p> {fake_details_data.characteristics.number_of_cores}</p>
                    <p> {fake_details_data.characteristics.video_resolution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetails--review">
            <button>
              <span>
                <BiSolidMessageEdit />
              </span>
              Написать отзыв
            </button>
            <div className="productDetails--review__cards">
              {review.map((el) => (
                <div className="productDetails--review__cards--card">
                  <div className="productDetails--review__cards--card__title">
                    <h6>{el.userName}</h6>
                    <div className="productDetails--review__cards--card__marks">
                      <div
                        className="productDetails--review__cards--card__marks--mark"
                        style={{ background: el.mark >= 1 ? "orange" : "grey" }}
                      ></div>
                      <div
                        className="productDetails--review__cards--card__marks--mark"
                        style={{ background: el.mark >= 2 ? "orange" : "grey" }}
                      ></div>
                      <div
                        className="productDetails--review__cards--card__marks--mark"
                        style={{ background: el.mark >= 3 ? "orange" : "grey" }}
                      ></div>
                      <div
                        className="productDetails--review__cards--card__marks--mark"
                        style={{ background: el.mark >= 4 ? "orange" : "grey" }}
                      ></div>
                      <div
                        className="productDetails--review__cards--card__marks--mark"
                        style={{ background: el.mark >= 5 ? "orange" : "grey" }}
                      ></div>
                    </div>
                    <h3>{el.date}</h3>
                  </div>
                  <p>{el.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
