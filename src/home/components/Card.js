import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import "./index.css";

function Card({ title, description, imageUrl }) {
    return (
        <div className='card'>
            <img src={imageUrl} alt="..."/>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
