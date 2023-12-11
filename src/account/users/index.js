import React, { useState, useEffect } from 'react';
import './index.css';
import * as client from "../../api/client";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from '../user/userReducer';

const Users = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);

    const fetchData = async () => {
        try {
            const response = await client.findAllUsers();
            setUsers(response);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentUser]);

    const isFollowing = (userId) => {
        return currentUser.following.includes(userId.toString()) || currentUser.following.includes(userId);
    };

    const followUserId = async (userId) => {
        dispatch(followUser(userId));
        await client.followUser(currentUser.id, userId);
        fetchData();
    };

    const unfollowUserId = async (userId) => {
        dispatch(unfollowUser(userId));
        await client.unfollowUser(currentUser.id, userId);
        fetchData();
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
                                {
                                    isFollowing(user.id) && 
                                    <button onClick={() => unfollowUserId(user.id)} className='btn btn-fail'>
                                        Unfollow
                                    </button>
                                }
                                {
                                    !isFollowing(user.id) && 
                                    <button onClick={() => followUserId(user.id)} className='btn btn-success'>
                                        Follow
                                    </button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
