import React from "react";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery--selfCall">
        <h1>Самовывоз</h1>
        <h2>г.Бишкек ул.Ахунбаева 132</h2>
        <h5>пн-вс 09:00-20:00</h5>
        <h1>Бесплатно</h1>
      </div>
      <div className="delivery--card">
        <h1>Доставка</h1>
        <div className="delivery--inputs">
          <div className="delivery-dropdown">
            <select>
                <option value="Область" defaultChecked>Область</option>
                <option value="Talas">Talas</option>
                <option value="Batken">Batken</option>
                <option value="Naryn">Naryn</option>
                <option value="Osh">Osh</option>
                <option value="Jalal-Abad">Jalal-Abad</option>
                <option value="Usuk-Kol">Usuk-Kol</option>
                <option value="Chui">Chui</option>
            </select>
            <select>
                <option value="Город">Город</option>
                <option value="Talas">Talas</option>
                <option value="Batken">Batken</option>
                <option value="Naryn">Naryn</option>
                <option value="Osh">Osh</option>
                <option value="Jalal-Abad">Jalal-Abad</option>
                <option value="Usuk-Kol">Usuk-Kol</option>
                <option value="Chui">Chui</option>
            </select>
          </div>
          <div className="delivery--streets">
            <input type="text" placeholder="Улица" />
            <input type="text" placeholder="Дом/кв" />
          </div>
        </div>
        <h1>от 200 сом (1-3 дня)</h1>
      </div>
    </div>
  );
};

export default Delivery;
