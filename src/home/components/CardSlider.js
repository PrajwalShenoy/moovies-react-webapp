import React, { useState } from 'react';
import Card from './Card';
import "./index.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as client from "../../api/client";
import { useSelector } from 'react-redux';

const CardSlider = ({ title }) => {
    const uid = title.replace(/\s+/g, '');
    const refid = `#${uid}`;
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
        if (uid === "WatchNext") {
            client.getWatchListDetails(currentUser['id']).then((data) => processMovieData(data));
        } else {
            client.getSpecificMovies(uid).then((data) => processMovieData(data));
        }
    }, []);

    return (
        <div>
            <h1 className="carousel-title mt-5">{title}</h1>
            <div id={uid} className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                {
                    allMovies.length === 0 ?
                        <div className="carousel-inner custom-carousel">
                            <div className="carousel-item active ">
                                <div className='row d-flex'>
                                    <div className='col'>
                                        <Card title="Card 1" description="Description 1" imageUrl="https://picsum.photos/200/300" cardId="1" />
                                    </div>
                                    <div className='col'>
                                        <Card title="Card 2" description="Description 2" imageUrl="https://picsum.photos/200/300" />
                                    </div>
                                    <div className='col'>
                                        <Card title="Card 3" description="Description 3" imageUrl="https://picsum.photos/200/300" />
                                    </div>
                                    <div className='col'>
                                        <Card title="Card 4" description="Description 4" imageUrl="https://picsum.photos/200/300" />
                                    </div>
                                    {/* <div className='col'>
                                        <Card title="Card 5" description="Description 5" imageUrl="https://picsum.photos/200/300" />
                                    </div>
                                    <div className='col'>
                                        <Card title="Card 6" description="Description 6" imageUrl="https://picsum.photos/200/300" />
                                    </div> */}
                                </div>
                            </div>
                        </div> :
                        <div className="carousel-inner custom-carousel">
                            {
                                movieContent.map((movie, index) => {
                                    return (
                                        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                            <div className='row d-flex'>
                                                {
                                                    movie.map((card) => {
                                                        return (
                                                            <div className='col'>
                                                                <Card title={card.title} description={card.overview} imageUrl={"https://image.tmdb.org/t/p/original" + card.poster_path} cardId={card.id} />
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                }
                <button className="carousel-control-prev" type="button" data-bs-target={refid} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={refid} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    );
};

export default CardSlider;
