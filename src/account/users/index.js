import React from 'react';
import "./index.css";

const Users = () => {
    // Dummy data for user, followers, and following
    const userData = [
        { userId: 1,username:"Rakshit", followers: [2, 3], following: [2] },
        { userId: 2, username:"Prajwal", followers: [1], following: [3,2,4] },
        { userId: 3, username:"Nitin",followers: [1], following: [1,4] },
        { userId: 4, username:"Adi",followers: [1,2,3], following: [1,3] },
    ];

    return (
        <div className="container p-4 main-container">
            <h1>User, Followers, and Following</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>User </th>
                    <th>Followers</th>
                    <th>Following</th>
                </tr>
                </thead>
                <tbody>
                {userData.map((user, index) => (
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
