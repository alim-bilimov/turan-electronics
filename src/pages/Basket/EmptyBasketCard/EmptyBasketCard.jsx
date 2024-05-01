import React from 'react';

const EmptyBasketCard = ({text}) => {
    return (
        <div className='emptyBasketCard'>
            <p>{text}</p>
        </div>
    );
};

export default EmptyBasketCard;