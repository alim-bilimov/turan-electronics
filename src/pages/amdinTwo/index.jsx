import React, { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function CreateProductNav() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // navigate("/");
    }, 5000);
  }

  return (
    <div>
      <div id="create">
        <div className="container">
          <center>
            {" "}
            <h1>Добавление продукции</h1>
          </center>
          <div className="create">
            <div className="input--box">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="comment" />
              <input type="text" placeholder="price" />
              <input type="text" placeholder="" />
              <input type="text" placeholder="imgURL" />
              <div
                className="div-2"
                onClick={() => {
                  CreateProductNav();
                }}
              >
                {loading ? (
                  <div className="loading">
                    <p>Загрузка...</p>
                    <div class="dot-spinner">
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                      <div class="dot-spinner__dot"></div>
                    </div>
                  </div>
                ) : (
                  "create"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
