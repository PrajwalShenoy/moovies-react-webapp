import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "../../home/components/Card";
import * as client from "../../api/client";

const AccountDetails = () => {
    const [movieContent, setMovieContent] = useState([[]]);
    const [allMovies, setAllMovies] = useState([]);
    const [userDetails, setUserDetails] = useState({
        username: ""
    });
    const { userId } = useParams();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`);
                setUserDetails(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [userId]);

    useEffect(() => {
        if (userDetails.id) {
            client.getWatchListDetails(userDetails.id).then((data) => processMovieData(data));
        }
    }, [userDetails]);

    const processMovieData = (data) => {
        let splitData = [];
        setAllMovies(data);
        for (let i = 0; i < data.length; i += 6) {
            splitData.push(data.slice(i, i + 6));
        }
        setMovieContent(splitData);
    };

    return (
        <div className="container main-container">
            <h1 className="card-heading">User Details</h1>
            <hr />
            <p className="card-text">  <strong className="card-heading">
                Username: </strong> {userDetails.username}</p>
            <p className="card-text"> <strong className="card-heading">
                First Name: </strong>{userDetails.firstName}</p>
            <p className="card-text"> <strong className="card-heading">
                Last Name: </strong>{userDetails.lastName}</p>
            <p className="card-text"> <strong className="card-heading">
                Member Since:  </strong>{userDetails.memberSince}</p>
            <br />
            <br />
            <h1 className="card-heading">Favourite Movies:</h1>

            <div className="row d-flex">
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
        </div>
    );
};

export default AccountDetails;
