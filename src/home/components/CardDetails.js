import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    const { cardId } = useParams();

    const cardDetails = {
        "adult": false,
        "backdrop_path": "/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
        "belongs_to_collection": {
            "id": 10,
            "name": "Star Wars Collection",
            "poster_path": "/gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg",
            "backdrop_path": "/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg"
        },
        "budget": 11000000,
        "genres": [
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ],
        "homepage": "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
        "id": 11,
        "imdb_id": "tt0076759",
        "original_language": "en",
        "original_title": "Star Wars",
        "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        "popularity": 77.873,
        "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        "production_companies": [
            {
                "id": 1,
                "logo_path": "/tlVSws0RvvtPBwViUyOFAO0vcQS.png",
                "name": "Lucasfilm Ltd.",
                "origin_country": "US"
            },
            {
                "id": 25,
                "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
                "name": "20th Century Fox",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "1977-05-25",
        "revenue": 775398007,
        "runtime": 121,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "A long time ago in a galaxy far, far away...",
        "title": "Star Wars",
        "video": false,
        "vote_average": 8.205,
        "vote_count": 19378
    }


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

                    <button className="watchlist-button">
                       Add to Watchlist
                    </button>
                </div>
            </div>

            {/* Dummy Reviews Section */}
            <div className="container d-flex mt-5 mb-2 timelineCard card-text">
                <div className="container m-3">
                    <h4>Username</h4>
                    <div className="mt-3">
                        <p className="">wefhbkrjnfenle wclieunfielunrfib </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CardDetails;