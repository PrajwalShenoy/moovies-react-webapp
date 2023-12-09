import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import * as client from '../../api/client';

const Followers = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const URL = 'http://localhost:4000/api/users';
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get(URL);
            setUsers(response.data);
            const loggedInUser = await client.getSessionAccount();
            setCurrentUser(loggedInUser);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const { userIsSet } = useSelector((state) => state.userReducer);

    useEffect(() => {
        if (!userIsSet) {
            navigate('/account/users');
        }
    }, [userIsSet, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container p-4 main-container">
            <h1>Followers Table for {currentUser && `${currentUser.firstName} ${currentUser.lastName}`}</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>Followers</th>
                </tr>
                </thead>
                <tbody>
                {currentUser && currentUser.followers.length === 0 ? (
                    <tr>
                        <td colSpan="1">No followers found.</td>
                    </tr>
                ) : (
                     currentUser.followers.map((followerUserId, index) => (
                         <tr key={index}>
                             <td>{users.find((user) => user.id === followerUserId)?.firstName + " "
                                  +users.find((user) => user.id === followerUserId)?.lastName}</td>
                         </tr>
                     ))
                 )}
                </tbody>
            </table>
        </div>
    );
};

export default Followers;
