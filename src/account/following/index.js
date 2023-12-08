import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const Following = () => {
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

    return (
        <div className="container p-4 main-container">
            <h1>Following Table for {currentUser && currentUser.firstName+ " "+ currentUser.lastName}</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>Following</th>
                </tr>
                </thead>
                <tbody>
                {currentUser &&
                 currentUser.following.map((followingUserId, index) => (
                     <tr key={index}>
                         <td>{users.find((user) => user.id === followingUserId)?.firstName+ " "+ users.find((user) => user.id === followingUserId)?.lastName}</td>
                     </tr>
                 ))}
                </tbody>
            </table>
        </div>
    );
};

export default Following;
