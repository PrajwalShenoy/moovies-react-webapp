import React, { useState, useEffect } from 'react';
import * as client from "../../api/client";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from '../user/userReducer';

const Roles = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.userReducer);
    const existingRoles = ["User", "Moderator", "Admin"];
    const [userRoles, setUserRoles] = useState([]);

    const fetchData = async () => {
        try {
            const response = await client.getUserRoles(currentUser.id);
            setUserRoles(response.role);
        } catch (error) {
            console.error('Error fetching user roles:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentUser]);

    const isAssigned = (role) => {
        return userRoles.includes(role);
    };

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
            <h1>Assigned Roles</h1>

            <table className="table customise-navbar">
                <thead>
                    <tr className="heading-color">
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {existingRoles.map((role, index) => (
                        <tr key={index}>
                            <td>
                                {role}
                            </td>
                            <td>
                                {
                                    role !== "User" && isAssigned(role) && 
                                    <button className='btn btn-fail'>
                                        Remove Role
                                    </button>
                                }
                                {
                                    !isAssigned(role) && 
                                    <button className='btn btn-success' onClick={() => requestRole(role)}>
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

export default Roles;