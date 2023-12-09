import React from 'react';
import "./index.css";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Followers = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const URL = 'http://localhost:4000/api/users';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setUsers(response.data);
                // Assuming the current user is the first user in the array
                setCurrentUser(response.data[0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [URL]);

    const { userIsSet } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!userIsSet) {
    //         navigate("/account/users");
    //     }
    // }, [userIsSet]);

    const userData = [
        { userId: 1, username: "Rakshit", followers: [2, 3], following: [2] },
        { userId: 2, username: "Prajwal", followers: [1], following: [3, 2, 4] },
        { userId: 3, username: "Nitin", followers: [1], following: [1, 4] },
        { userId: 4, username: "Adi", followers: [1, 2, 3], following: [1, 3] },
    ];

    return (
        <div className="container p-4 main-container">
            <h1>Followers Table for {currentUser && currentUser.firstName + " " +currentUser.lastName}</h1>

            <table className="table customise-navbar">
                <thead>
                    <tr className="heading-color">
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUser && currentUser.followers.map((followerUserId, index) => (
                        <tr key={index}>
                            <td>{userData.find(user => user.userId === followerUserId)?.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Followers;
