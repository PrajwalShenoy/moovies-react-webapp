import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const URL = "http://localhost:4000/api/users";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [URL]);


    return (
        <div className="container p-4 main-container">
            <h1>User, Followers, and Following</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>User</th>
                    <th>Followers</th>
                    <th>Following</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.followers.length}</td>
                        <td>{user.following.length}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
