import React, { useEffect, useRef, useState } from "react";
import Dyson from "../../image/Dysign.png";
import Apple from "../../image/Apple.png";
import Plastation from "../../image/Plastation.png";
import Samsung from "../../image/Samsung.png";
import Xiomi from "../../image/Xiomi.png";
import BrandApple from "../../image/Apple-moble-brand.png";
import BrandDyson from "../../image/dyson.png";
import BrandPlastation from "../../image/plastatyon.png";
import BrandSlmusng from "../../image/slmusng.png";
import BrandXiomi from "../../image/mi.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import axios from "axios";
import "./main-media.scss";
import { NavLink } from "react-router-dom";

const Main = () => {
  const swiperRef = useRef(null);
  const [like, setLike] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState([]);
  function getCarouserData() {
    axios("http://127.0.0.1:8000/shop_urls/caruselphotos/").then((res) => {
      setCarousel(res.data);
    });
  }
  function getProductsData() {
    axios("http://127.0.0.1:8000/shop_urls/products/").then((res) => {
      setProducts(res.data);
    });
  }
  function getColorData() {
    axios("http://127.0.0.1:8000/shop_urls/colors/").then((res) => {
      setColor(res.data);
    });
  }
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    getCarouserData();
    getColorData();
    getProductsData();
  }, []);
  return (
    <div>
      <div className="container">
        <section id="carousel">
          <Splide
            options={{ rewind: true, autoplay: true, interval: 3000 }}
            aria-label="React Splide Example"
          >
            {carousel.map((el) => (
              <SplideSlide>
                <img src={el.photo} alt="Image 1" />
              </SplideSlide>
            ))}
          </Splide>
        </section>
        <section id="main-category">
          <div className="main-category-game-electronic">
            <div>
              <img src={Dyson} alt="" />
              <button>Dyson</button>
            </div>
            <div>
              <img src={Apple} alt="" />
              <button>Apple</button>
            </div>
            <div>
              <img src={Xiomi} alt="" />
              <button>Xiomi</button>
            </div>
            <div>
              <img src={Samsung} alt="" />
              <button>Samsung</button>
            </div>
            <div>
              <img src={Plastation} alt="" />
              <button>Playstation</button>
            </div>
          </div>
        </section>
        <section id="mobile-brand">
          <div id="brand">
            <div className="container">
              <div className="brand">
                <h1 className="brand--textH1">Бренды</h1>
                <div className="brand--allCard">
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandApple} alt="" width={240} />
                    </div>
                    <h3>Apple</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandDyson} alt="" width={240} />
                    </div>
                    <h4>Dyson</h4>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandPlastation} alt="" width={240} />
                    </div>
                    <h3>Plastation</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandSlmusng} alt="" width={240} />
                    </div>
                    <h3>Samsung</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandXiomi} alt="" width={240} />
                    </div>
                    <h3>Xiomi</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandApple} alt="" width={240} />
                    </div>
                    <h3>Apple</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandDyson} alt="" width={240} />
                    </div>
                    <h4>Dyson</h4>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandPlastation} alt="" width={240} />
                    </div>
                    <h3>Plastation</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandSlmusng} alt="" width={240} />
                    </div>
                    <h3>Samsung</h3>
                  </div>
                  <div className="mobile-brand-card">
                    <div className="brand--card">
                      <img src={BrandXiomi} alt="" width={240} />
                    </div>
                    <h3>Xiomi</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="acces">
          <div className="acces-glav">
            <h1>Аксессуары</h1>
            <div className="next-back">
              <button onClick={goPrev}>
                <FaArrowLeftLong />
              </button>
              <button onClick={goNext}>
                <FaArrowRightLong />
              </button>
            </div>
            <NavLink>Смотреть все</NavLink>
          </div>
          <div className="main-acces">
            <div>
              <Swiper ref={swiperRef} rewind={true}>
                <SwiperSlide>
                  <div className="acces-blocks">
                    {products.map((el) => (
                      <div className="acces-block">
                        <img src={el.image} alt="" />
                        <h2>Iphone</h2>
                        <h3 className="adap-price">5 700 сом</h3>
                        <div className="main-basket">
                          <button>Быстрый заказ</button>
                          <RiShoppingBasketLine />
                        </div>
                        <div className="main-basket-2">
                          <h3>5 700 сом</h3>
                          <RiShoppingBasketLine />
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section id="new">
          <div className="new-glav">
            <h1>Новое поступление</h1>
            <div className="all">
              <h1>Смотреть все</h1>
              <button>
                <FaArrowRightLong />
              </button>
            </div>
            <NavLink>Смотреть все</NavLink>
          </div>
          <div className="new-blocks">
            <div className="new-block">
              <div className="new-star-rating">
                <p>Новое</p>
              </div>
              <img src={BrandApple} alt="" />
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
                    color: like ? "#ff7300" : "",
                    transition: ".2s",
                    transform: likeAnimation ? "scale(1.1)" : "",
                    fontSize: "33px",
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
              <div className="new-basket">
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
        </section>
        <section id="new-mobile">
          <div className="new-mobile-blocks">
            <div className="new-mobile-block">
              <div className="new-mobile-block-part-1">
                <img src={BrandApple} alt="" />
              </div>
              <div className="new-mobile-block-part-2">
                <h4>Смартфон Apple iPhone 14 Pro Max 256GB EU</h4>
                <p>Цвет</p>
                <div className="new-mobile-basket">
                  <h5>100 415 сом</h5>
                  <RiShoppingBasketLine />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="recommend">
          <div id="new">
            <div className="new-glav">
              <h1>Рекомендуемые</h1>
              <div className="all">
                <h1>Смотреть все</h1>
                <button>
                  <FaArrowRightLong />
                </button>
              </div>
              <NavLink>Смотреть все</NavLink>
            </div>
            <div className="new-blocks">
              <div className="new-block">
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
                      color: like ? "#ff7300" : "",
                      transition: ".2s",
                      transform: likeAnimation ? "scale(1.1)" : "",
                    }}
                  />
                </span>
                <span className="in-stock">
                  <FaCheckCircle className="pp" style={{ color: "#FF7300" }} />{" "}
                  В наличии
                </span>
                <h3>5 700 сом</h3>
                <h2>Адаптер Apple</h2>
                <p className="plot">
                  iPhone 14 Pro <br /> MaxВолшебный новый <br /> способ
                  взаимодействия с <br /> iPhone. .....
                </p>
                <div className="new-basket">
                  <button>Быстрый заказ</button>
                  <RiShoppingBasketLine />
                </div>
                <div className="colors">
                  <span>Цвет</span>
                  <div className="color-1"></div>
                  <div className="color-2"></div>
                  <div className="color-3"></div>
                </div>
                <div className="new-mobile-basket">
                  <h4>5 700 сом</h4>
                  <RiShoppingBasketLine />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
