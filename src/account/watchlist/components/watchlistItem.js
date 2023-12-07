import React from 'react';
import "./watchlistItem.css";

const WatchlistItem = ({imageUrl, movieName, description}) => {
    return (
        <div className="container d-flex mt-5 mb-2 timelineCard">
            <img src={imageUrl} alt="Movie Poster" />
            <div className="container m-3">
                <h4>{movieName}</h4>
                <div className="mt-3">
                    <p className="">{description}</p>
                </div>
                <button type="button" className="btn btn-success mt-2 me-3">
                    Mark as watched
                </button>
                <button type="button" className="btn btn-fail mt-2">
                    Remove from watchlist
                </button>
            </div>
        </div>
    );
};

export default WatchlistItem;