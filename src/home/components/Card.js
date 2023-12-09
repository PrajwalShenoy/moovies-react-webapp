import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function Card({ title, description, imageUrl, cardId }) {
    return (
        <Link to={`/movieDetails/${cardId}`} className='card-link'>
            <div className='custom-card'>
                <img src={imageUrl} className="card-image"/>
                <div className='card-title'>
                    {title}
                </div>
            </div>
        </Link>
    );
}

export default Card;
