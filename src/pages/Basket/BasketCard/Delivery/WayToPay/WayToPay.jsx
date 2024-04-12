import React from 'react';
import  visa from '../../../../../image/visa.svg';
import  mastercard from '../../../../../image/mastercard.svg';
import  maestro from '../../../../../image/maestro.svg';
import  mbank from '../../../../../image/mbank.png';
import  elsom from '../../../../../image/elsom.png';
import  optima from '../../../../../image/optima.png';

const WayToPay = () => {
    return (
        <div className='wayToPay'>
            <h1>Способ оплаты</h1>
            <div className="wayToPay--cards">
                <div className="wayToPay--cards__card">
                    <h5>Банковская карта</h5>
                    <div className="wayToPay--cards__card--emblems">
                        <img src={visa} alt="img" />
                        <img src={mastercard} alt="img" />
                        <img src={maestro} alt="img" />
                    </div>
                </div>
                <div className="wayToPay--cards__card">
                    <h5>Электронный кошелек</h5>
                    <div className="wayToPay--cards__card--emblems">
                        <img src={mbank} alt="img" />
                        <img src={elsom} alt="img" />
                        <img src={optima} alt="img" />
                    </div>
                </div>
                <div className="wayToPay--cards__card">
                    <h2>Оплата наличными при получении </h2>
                </div>
                <div className="wayToPay--cards__card">
                    <h2>Оформить <br /> рассрочку  </h2>
                </div>
            </div>
        </div>
    );
};

export default WayToPay;