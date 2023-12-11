import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList } from '../../account/user/userReducer';
import * as client from "../../api/client";
import "../index.css";

const CardDetails = () => {
    const { cardId } = useParams();
    const [inWatchList, setInWatchList] = useState(false);
    const [isAddingReview, setIsAddingReview] = useState(false);
    const [newReviewContent, setNewReviewContent] = useState('');
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
                                                       "title": "",
                                                       "overview": "",
                                                       "poster_path": "",
                                                       "release_date": "1977-05-25",
                                                       "runtime": 121,
                                                   });
    const [reviews, setReviews] = useState([
                                               { id: 1, author: "Prajwal", imageUrl:"https://picsum.photos/180/250", content: "The movie is amazing!" },
                                               { id: 2, author: "Rakshit", imageUrl:"https://picsum.photos/180/250", content: "Best Movie Ever!" },
                                               { id: 3, author: "John", imageUrl:"https://picsum.photos/180/250", content: "My whole family loves this movie. Best Movie Ever! " }

                                           ]);

    useEffect(() => {
        client.getMovieDetails(cardId).then((data) => setCardDetails(data));
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

    const handleAddReview = () => {
        setIsAddingReview(true);
    };

    const handleCancelReview = () => {
        setIsAddingReview(false);
        setNewReviewContent(''); // Clear the new review content
    };

    const handleSubmitReview = () => {

        const newReview = {
            id: reviews.length + 1,
            author: currentUser.username,
            imageUrl: "https://picsum.photos/180/250",
            content: newReviewContent,
        };

        setReviews([...reviews, newReview]);
        setIsAddingReview(false);
        setNewReviewContent('');
    };

    const handleDeleteReview = (reviewId) => {
        const updatedReviews = reviews.filter(review => review.id !== reviewId);
        setReviews(updatedReviews);
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
                    {!inWatchList &&
                     <button className="btn watchlist-button" onClick={addToWatchlist}>
                         Add to Watchlist
                     </button>
                    }
                    <br />
                    <br />
                    <h3 className="card-heading">Reviews: </h3>

                    <button className="btn btn-success" onClick={handleAddReview}>
                        Write a Review
                    </button>
                    <br/>
                    <br/>

                    {isAddingReview && (
                        <div>
                            <textarea
                                rows="3"
                                cols="100"
                                placeholder="Write your review..."
                                value={newReviewContent}
                                onChange={(e) => setNewReviewContent(e.target.value)}
                            ></textarea>
                            <div>
                                <button className="btn btn-success" onClick={handleCancelReview}>
                                    Cancel
                                </button>
                                <button className="btn btn-success" onClick={handleSubmitReview}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}

                    {reviews.map(review => (
                        <div key={review.id} className="container d-flex mt-3 mb-2 timelineCard card-text">
                            <div className="container m-3">
                                <div className="d-flex align-items-center">
                                    <img src={review.imageUrl} alt="User" className="user-image" />
                                    <p className="ms-3 timelinecard-username">{review.author}</p>
                                </div>
                                <div className="mt-3">
                                    <p className="card-text">{review.content}</p>
                                </div>
                                {/*{currentUser.role.includes("moderator") && (*/}
                                {/*    <div className="mt-3">*/}
                                {/*        <button className="btn btn-danger" onClick={() => handleDeleteReview(review.id)}>*/}
                                {/*            Delete*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*)}*/}
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </div>
    );
};

export default CardDetails;
