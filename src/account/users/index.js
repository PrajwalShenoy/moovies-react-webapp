import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import * as client from "../../api/client";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const URL = 'http://localhost:4000/api/users';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setUsers(response.data);
                const loggedInUser = await client.getSessionAccount();
                setCurrentUser(loggedInUser);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [URL]);

    const handleFollow = (userId) => {
        try {
            setUsers((prevUsers) =>
                         prevUsers.map((user) =>
                                           user.id === userId
                                           ? {
                                                   ...user,
                                                   followers: user.followers.includes(currentUser.id)
                                                              ? user.followers.filter((followerId) =>
                                                                                          followerId !== currentUser.id)
                                                              : [...user.followers, currentUser.id],
                                                   isFollowed: !user.isFollowed,
                                               }
                                           : user
                         )
            );
        } catch (error) {
            console.error('Error toggling follow:', error);
        }
    };

    return (
        <div className="container p-4 main-container">
            <h1>User, Followers, and Following</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>User</th>
                    <th>Followers</th>
                    <th>Following</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>
                            <Link className="custom-link" to={`/account/users/${user.id}`}>
                                {user.firstName + ' ' + user.lastName}
                            </Link></td>
                        <td>{user.followers.length}</td>
                        <td>{user.following.length}</td>
                        <td>
                            <button onClick={() => handleFollow(user.id)} className='btn btn-success'>
                                {user.isFollowed ? 'Unfollow' : 'Follow'}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
