import React from 'react';
import "./index.css";

const Followers = () => {
    // Dummy data for user, followers, and following
    const userData = [
        { userId: 1, username: "Rakshit", followers: [2, 3], following: [2] },
        { userId: 2, username: "Prajwal", followers: [1], following: [3, 2, 4] },
        { userId: 3, username: "Nitin", followers: [1], following: [1, 4] },
        { userId: 4, username: "Adi", followers: [1, 2, 3], following: [1, 3] },
    ];

    // For demonstration purposes, assuming the current user is the one with userId: 1
    const currentUser = userData.find(user => user.userId === 1);

    return (
        <div className="container p-4 main-container">
            <h1>Followers Table for {currentUser.username}</h1>

            <table className="table customise-navbar">
                <thead>
                <tr className="heading-color">
                    <th>Followers</th>
                </tr>
                </thead>
                <tbody>
                {currentUser.followers.map((followerUserId, index) => (
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