import React from 'react';

const WayToPay = () => {
    return (
        <div id='wayToPay'>
            <div className="wayToPay">
                <h2>Способ получения</h2>
                <button>У меня есть аккаунт</button>
                <div className="wayToPay--inputs">
                    <input type="text" placeholder='Фамилия и имя'/>
                    <div className="wayToPay--inputs__down">
                        <input type="text" placeholder='Телефон'/>
                        <input type="text" placeholder='Email'/>
                    </div>
                </div>
                <div className="wayToPay--singIn">
                    <input type="radio" />
                    <button>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default WayToPay;