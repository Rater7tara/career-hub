import React from 'react';
import './CateCard.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CateCard = (props) => {
    const { image, name, detail } = props.category;
    return (
        <div className='card-con bg-light'>
            <img className='img' src={image} alt="" />
            <div className=''>
                <h4 className=''>{name}</h4>
                <p>{detail}</p>

            </div>
        </div>

    );
};

export default CateCard;