import React, { useRef, useState } from "react";
import Dyson from "../../image/Dysign.png";
import Apple from "../../image/Apple.png";
import Plastation from "../../image/Plastation.png";
import Samsung from "../../image/Samsung.png";
import Xiomi from "../../image/Xiomi.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Swiper, Navigation, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Main = () => {
  const swiperRef = useRef(null);
  const [like, setLike] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);

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

  return (
    <div>
      <div className="container">
        <section id="carousel">
          <Splide
            options={{ rewind: true, autoplay: true, interval: 2000 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds"
                alt="Image 2"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src="https://cdn.motor1.com/images/mgl/YA3zrl/s3/bugatti-bolide-track-testing.jpg"
                alt="Image 2"
              />
            </SplideSlide>
          </Splide>
        </section>
        <section id="main-category">
          <div className="main-category-dyson">
            <div>
              <img src={Dyson} alt="" />
              <button>Dyson</button>
            </div>
          </div>
          <div className="main-category-game-electronic">
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
          </div>
          <div className="main-acces">
            <div>
              <Swiper ref={swiperRef} rewind={true}>
                <SwiperSlide>
                  <div className="acces-blocks">
                    <div className="acces-block">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/16a6/4c32/7dc383443b2ed8e7c5e0162c6f6d7e5f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooy4vnRWuEAIbsBGD2kFEB~DIl~QkLx0OJD9pevYI55I-BLPmoxRBb7ClR4N94uOgezBS1TcVSS7wx0LLPen00Nhd1bgTOCj71r5FQADPJOo0~ICtWtcIVKGGfyhVWVwlOcNI-HcBin3D5yigFwAzIE0konZWRFSsdN~z0oglx0CRFF3g9HD2ZEy0I-hKGX8g~2ccRycOFu78khrec8zScK7bKdyDOwb9H24vv2aCg8TEUiY7GZ~C6ctoIyAUaQKvBZqiNgzbPcCdJTsqkVxEkmJXhHTkpd5v-rdt-FR8QPntc1EhmigDtqNmM~WhjxtpvliqzNxASB-n2edZ0cCiw__"
                        alt=""
                      />
                      <h2>Адаптер Apple</h2>
                      <h3>5 700 сом</h3>
                      <div className="main-basket">
                        <button>Быстрый заказ</button>
                        <RiShoppingBasketLine />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="acces-blocks">
                    <div className="acces-block">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/16a6/4c32/7dc383443b2ed8e7c5e0162c6f6d7e5f?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ooy4vnRWuEAIbsBGD2kFEB~DIl~QkLx0OJD9pevYI55I-BLPmoxRBb7ClR4N94uOgezBS1TcVSS7wx0LLPen00Nhd1bgTOCj71r5FQADPJOo0~ICtWtcIVKGGfyhVWVwlOcNI-HcBin3D5yigFwAzIE0konZWRFSsdN~z0oglx0CRFF3g9HD2ZEy0I-hKGX8g~2ccRycOFu78khrec8zScK7bKdyDOwb9H24vv2aCg8TEUiY7GZ~C6ctoIyAUaQKvBZqiNgzbPcCdJTsqkVxEkmJXhHTkpd5v-rdt-FR8QPntc1EhmigDtqNmM~WhjxtpvliqzNxASB-n2edZ0cCiw__"
                        alt=""
                      />
                      <h2>Адаптер Apple</h2>
                      <h3>5 700 сом</h3>
                      <div className="main-basket">
                        <button>Быстрый заказ</button>
                        <RiShoppingBasketLine />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
          </div>
          <div className="new-blocks">
            <div className="new-block">
              <div className="new-star-rating">
                <p>Новое</p>
              </div>
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
                    color: like ? "red" : "",
                    transition: ".2s",
                    transform: likeAnimation ? "scale(1.1)" : "",
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
                      color: like ? "red" : "",
                      transition: ".2s",
                      transform: likeAnimation ? "scale(1.1)" : "",
                    }}
                  />
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
