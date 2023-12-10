import React, {useEffect, useState} from 'react';
import "./watchlistItem.css";
import {useSelector} from "react-redux";
import * as client from "../../../api/client";

const WatchlistItem = ({imageUrl, movieName, description}) => {
    const [movieContent, setMovieContent] = useState([[]]);
    const [allMovies, setAllMovies] = useState([]);
    const { currentUser } = useSelector((state) => state.userReducer);

    const processMovieData = (data) => {
        let splitData = [];
        setAllMovies(data);
        for (let i = 0; i < data.length; i += 6) {
            splitData.push(data.slice(i, i + 6));
        }
        setMovieContent(splitData);
    };

    useEffect(() => {
        if ( currentUser.id) {
            client.getWatchListDetails(currentUser['id']).then((data) => processMovieData(data));
        }
    }, []);


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