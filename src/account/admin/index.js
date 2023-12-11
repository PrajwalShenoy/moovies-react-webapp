import React, { useState, useEffect } from 'react';
import * as client from "../../api/client";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from '../user/userReducer';

const Admin = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);
    const existingRequests = [];
    const [userRequests, setUserRequets] = useState([]);

    const fetchData = async () => {
        try {
            const response = await client.getRequests();
            setUserRequets(response);
        } catch (error) {
            console.error('Error fetching user roles:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentUser]);

    const requestRole = async (role) => {
        client.requestRole(role);
    };

    const unfollowUserId = async (userId) => {
        dispatch(unfollowUser(userId));
        await client.unfollowUser(currentUser.id, userId);
        fetchData();
    };

    return (
        <div className="container p-5 main-container">
            <h1>User Requests</h1>

            <table className="table customise-navbar">
                <thead>
                    <tr className="heading-color">
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Requested Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userRequests.map((request, index) => (
                        <tr key={index}>
                            <td>
                                {request.username}
                            </td>
                            <td>
                                {request.firstName}
                            </td>
                            <td>
                                {request.lastName}
                            </td>
                            <td>
                                {request.requestedRole}
                            </td>
                            <td>
                                {
                                    <button className='btn btn-fail'>
                                        Remove Role
                                    </button>
                                }
                                {
                                    <button className='btn btn-success'>
                                        Request Role
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

export default Admin;