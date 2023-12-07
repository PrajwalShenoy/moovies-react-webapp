import React from 'react';
import { useState, useEffect } from 'react';
import "./index.css";

const User = () => {
    const initialUserData = {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        password: 'password123',
        memberSince: '2022-01-01'
    };

    const [userData, setUserData] = useState(initialUserData);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        populateForm();
    }, []);

    const populateForm = () => {
        setUserData(initialUserData);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const saveChanges = () => {
        console.log('Updated User Data:', userData);
        alert(userData.firstName + ' ' + userData.lastName + ' has been updated.');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container p-4 main-container'>
            <h1>Account details</h1>
            <form className=''>
                <div className='d-flex'>
                    <div className="mb-3 me-5">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email ID:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="memberSince" className="form-label">Member Since:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="memberSince"
                        name="memberSince"
                        value={userData.memberSince}
                        disabled
                    />
                </div>

                <button type="button" className="btn btn-success mt-2" onClick={saveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default User;