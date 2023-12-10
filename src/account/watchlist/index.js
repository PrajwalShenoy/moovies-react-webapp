import React, { useState, useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchList } from '../user/userReducer';
import * as client from "../../api/client";

const Watchlist = () => {
    const [movieContent, setMovieContent] = useState([]);
    const { currentUser } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const processMovieData = (data) => {
        setMovieContent(data);
    };

    useEffect(() => {
        if (currentUser.id) {
            client.getWatchListDetails(currentUser.id).then((data) => processMovieData(data));
        }
    }, [currentUser.id]);

    const removeFromWatchlist = async (movieId) => {
        await client.removeFromWatchlist(movieId.toString());
        await dispatch(removeFromWatchList(movieId));
        setMovieContent(movieContent.filter((movie) => movie.id !== movieId));
    };

    return (
        <div className="container main-container p-5">
            <h1 className="card-heading">Watchlist</h1>
            {movieContent.map((movie) => (
                <div key={movie.id} className="container d-flex mt-5 mb-2 timelineCard">
                    <div className="col-md-3">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className="card-image"
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="container m-3">
                            <h4 className="card-heading">{movie.title}</h4>
                            <div className="mt-3">
                                <p>{movie.overview}</p>
                                <p><strong>Released:</strong> {movie.release_date}</p>
                            </div>
                            <div className="d-flex">
                                <button type="button" className="btn btn-success me-3" onClick={() => removeFromWatchlist(movie.id)}>
                                    Mark as watched
                                </button>
                                <button type="button" className="btn btn-fail" onClick={() => removeFromWatchlist(movie.id)}>
                                    Remove from watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Watchlist;
