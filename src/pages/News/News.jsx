import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";
import newsPeople from "../../image/news-people.png";
import newsSale from "../../image/news-sale.png";
import newsPlay from "../../image/New produc news.png";
import newsNew from "../../image/news-news.png";

const News = () => {
  return (
    <div>
      <div id="news">
        <div className="container">
          <div className="news">
            <Link to="/">Главная /</Link>
            <Link to="/news">Новости</Link>
            <div className="news--cardAll">
              <div className="news--boxCard">
                <h1>Марафон Скидок на Нашем Маркетплейсе!</h1>
                <img
                  className="news--saleImg"
                  src={newsSale}
                  alt=""
                  width={400}
                />
                <img src={newsPeople} alt="" width={700} />
                <div className="news--boxText">
                  <h3>Новый сезон — новые возможности для выгодных покупок!</h3>
                </div>
              </div>
              <div className="news--boxCardTwo"></div>
              <div className="news--boxCardthree">
                <img className="news--new" src={newsNew} alt="" />
                <div className="news--boxText">
                  <h3>
                    Объявляем о сотрудничестве с крупным мировыми брендами.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
