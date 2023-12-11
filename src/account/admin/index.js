import React, { useState, useEffect } from 'react';
import * as client from "../../api/client";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from '../user/userReducer';

const Admin = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);
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

    // app.post("/api/requests/:requestId", completeRequest);

    const acceptRequest = async (requestId) => {
        await client.completeRequest(requestId, {"approved": true});
        fetchData();
    };

    const denyRequest = async (requestId) => {
        await client.completeRequest(requestId, {"approved": true});
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
                                    <button className='btn btn-success me-2' onClick={() => acceptRequest(request.id)}>
                                        Approve
                                    </button>
                                }
                                {
                                    <button className='btn btn-fail' onClick={() => denyRequest(request.id)}>
                                        Deny
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