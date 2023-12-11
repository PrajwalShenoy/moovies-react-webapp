import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList } from '../../account/user/userReducer';
import * as client from "../../api/client";
import { Link } from "react-router-dom";
import "../index.css";

const CardDetails = () => {
    const { cardId } = useParams();
    const [inWatchList, setInWatchList] = useState(false);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);
    const { userIsSet } = useSelector((state) => state.userReducer);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState("");

    const toggleReviewBox = () => {
        setReviewText("");
        setShowReviewBox(!showReviewBox);
    };

    const [cardDetails, setCardDetails] = useState({
        "genres": [
            {
                "id": 12,
                "name": "Adventure"
            }
        ],
        "id": 11,
        "title": "",
        "overview": "",
        "poster_path": "",
        "release_date": "1977-05-25",
        "runtime": 121,
    });
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        client.getMovieDetails(cardId).then((data) => setCardDetails(data));
        client.getReviewsByMovieId(cardId).then((data) => setReviews(data));
        setInWatchList(currentUser.watchlist.includes(cardId));
    }, [cardId]);

    useEffect(() => {
        setInWatchList(currentUser.watchlist.includes(cardId));
    }, [currentUser, cardId]);

    const addToWatchlist = async () => {
        client.addToWatchlist({ movieId: cardId });
        dispatch(addToWatchList(cardId));
        setInWatchList(currentUser.watchlist.includes(cardId));
    };

    const postReview = async () => {
        const response = await client.postReview(cardId, reviewText);
        toggleReviewBox();
        setReviews([response, ...reviews]);
    };

    const deleteReview = async (reviewId) => {
        const response = await client.deleteReview(reviewId);
        setReviews(reviews.filter(review => review.id !== reviewId));
    };

    return (
        <div>
            <div className="card-details-container">
                <div className='d-flex'>
                    {/* <div className="card-image"> */}
                    <img
                        src={"https://image.tmdb.org/t/p/original" + cardDetails["poster_path"]}
                        alt="Card"
                        className="card-image-large me-5"
                    />
                    {/* </div> */}
                    <div className="card-text mb-2">
                        <h2 className="card-heading">{cardDetails["title"]}</h2>
                        <br />

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
                        {!inWatchList && userIsSet &&
                            <button className="btn watchlist-button" onClick={addToWatchlist}>
                                Add to Watchlist
                            </button>
                        }
                        {
                            !userIsSet &&
                            <h5> Please sign in to add to watch list :)</h5>
                        }
                    </div>
                </div>
                <div className='mt-5 mb-5'>
                    <h3 className="card-heading mb-3">Reviews: </h3>
                    {   userIsSet && 
                        <button className="btn btn-success" onClick={toggleReviewBox}>
                            {showReviewBox ? "Cancel": "Write a Review"}
                        </button>
                    }

                    { showReviewBox && (
                        <div className="mt-3">
                            <textarea
                                rows="3"
                                cols="100"
                                placeholder="How did you like the movie?"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className='form-control mb-3'
                            ></textarea>
                            <div>
                                <button className="btn btn-success" onClick={postReview}>
                                    Post Review
                                </button>
                            </div>
                        </div>
                    )}
                    {
                        !userIsSet &&
                        <h5 className="card-text"> Please sign in to write a review :)</h5>
                    }

                    {reviews.map(review => (
                        <div key={review.id} className="container d-flex mt-3 mb-2 timelineCard card-text">
                            <div className="container m-2">
                                <Link className="d-flex align-items-center review-title" to={`/account/users/${review.userId}`}>
                                    <p className="ms-3">{review.username}</p>
                                </Link>
                                <div>
                                    <p className="card-text">{review.review}</p>
                                </div>
                            </div>
                            {
                                currentUser.currentRole == "Moderator" &&
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn btn-fail" onClick={() => deleteReview(review.id)}>Delete</button>
                                </div>
                            }
                        </div>
                    ))}


                </div>

            </div>
        </div>
    );
};

export default CardDetails;
