import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList } from '../../account/user/userReducer';
import * as client from "../../api/client";
import "../index.css";

const CardDetails = () => {
    const { cardId } = useParams();
    const [ inWatchList, setInWatchList ] = useState(false);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);
    const [cardDetails, setCardDetails] = useState({
        "genres": [
            {
                "id": 12,
                "name": "Adventure"
            }
        ],
        "id": 11,
        "_title": "",
        "overview": "",
        "poster_path": "",
        "release_date": "1977-05-25",
        "runtime": 121,
    });

    useEffect(() => {
        client.getMovieDetails(cardId).then((data) => setCardDetails(data));
        setInWatchList(currentUser.watchlist.includes(cardId));
    }, []);

    useEffect(() => {
        setInWatchList(currentUser.watchlist.includes(cardId));
    }, [currentUser]);

    const addToWatchlist = async () => {
        client.addToWatchlist({movieId: cardId});
        dispatch(addToWatchList(cardId));
        setInWatchList(currentUser.watchlist.includes(cardId));
    };

    return (
        <div>
            <div className="card-details-container">
            <div className="card-image">
                    <img
                        src={"https://image.tmdb.org/t/p/original" + cardDetails["poster_path"]}
                        alt="Card"
                    />
                </div>
                <div className="card-text">
                    <h2 className="card-heading">{cardDetails["title"]}</h2>
                    <br/>

                    <div className="additional-details">
                        <p>
                            <strong className="card-heading">Overview:</strong> {cardDetails["overview"]}
                        </p>
                        <p>
                            <strong className="card-heading">Release Date:</strong> {cardDetails["release_date"]}
                        </p>
                        <p>
                            <strong className="card-heading">Runtime:</strong> {cardDetails["runtime"]} minutes
                        </p>
                        <p>
                            <strong className="card-heading">Genres:</strong> {cardDetails.genres.map(genre => genre.name).join(', ')}
                        </p>
                    </div>
                    {   !inWatchList && 
                        <button className="btn watchlist-button" onClick={addToWatchlist}>
                            Add to Watchlist
                        </button>
                    }
                </div>
            </div>
            {/* <div className="container d-flex mt-5 mb-2 timelineCard card-text">
                <div className="container m-3">
                    <h4>Username</h4>
                    <div className="mt-3">
                        <p className="">wefhbkrjnfenle wclieunfielunrfib </p>
                    </div>
                </div>

            </div> */}
        </div>

    );
};

export default CardDetails;
