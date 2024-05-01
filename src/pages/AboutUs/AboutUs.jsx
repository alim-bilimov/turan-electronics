import React, { useEffect, useState } from "react";
import "./AboutUs.scss";
import "./AboutUs-media.scss";
import axios from "axios";

const AboutUs = () => {



  const [details, setDetails] = useState([]);

  async function getData() {
    await axios(`http://127.0.0.1:8000/shop_urls/about_us/`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data.map((el) => el.text_about));
      })
      .catch((error) => {
        console.error("Ошибка получения данных: ", error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="about-us">
      <h2>Главная / О нас</h2>
      <div className="about-us-info">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default AboutUs;