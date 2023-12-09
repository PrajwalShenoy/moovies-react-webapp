// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, imageUrl, cardId }) {
    console.log(cardId);
    return (
        <Link to={`/movieDetails/${cardId}`} className='card-link'>
            <div className='card'>
                <img src={imageUrl} alt="..." />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
