import React from 'react';
import visa from '../../../image/basket-visa.png'
import mbank from '../../../image/mbank.png'


const Delivery = () => {
    return (
        <div className='delivery'>
            <div className="delivery--address">
                <div className="delivery--address__free">
                    <h3>Самовывоз</h3>
                    <h2>г.Бишкек ул.Ахунбаева 132</h2>
                    <h4>пн-вс 09:00-20:00</h4>
                    <h3>Бесплатно</h3>
                </div>
                <div className="delivery--delivery">
                    <h3>Доставка</h3>
                    <div className="delivery--delivery__choose">
                        <select name="" id="" >
                            <option value="">Область</option>
                            <option value="Bishkek">Bishkek</option>
                            <option value="Naryn">Naryn</option>
                        </select>
                        <select name="" id="">
                            <option value="">Город</option>
                            <option value="Bishkek">Bishkek</option>
                            <option value="Naryn">Naryn</option>
                        </select>
                    </div>
                    <div className="delivery--address">
                        <input type="text" placeholder='Улица'/>
                        <input type="text" placeholder='Дом/кв'/>
                    </div>
                    <h3>от 200 сом (1-3 дня)</h3>
                </div>
            </div>
            <div className="delivery--pay">
                <h2>Способ оплаты</h2>
                <div className="delivery--pay__cards">
                    <div className="delivery--pay__cards--card">
                        <h4>Банковская карта</h4>
                        <img src={visa} alt="img" />
                    </div>
                    <div className="delivery--pay__cards--card">
                        <h4>Электронный кошелек</h4>
                        <img src={mbank} alt="img" />
                    </div>
                    <div className="delivery--pay__cards--card2">
                        <h3>Оплата наличными <br /> при получении </h3>
                    </div>
                    <div className="delivery--pay__cards--card2">
                        <h3>Оформить <br /> рассрочку </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;