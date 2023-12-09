import React, { useState, useEffect } from 'react';
import * as client from '../api/client';
import './index.css';

const SignUp = () => {
    const initialUserData = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
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
        <div className="form-container p-5 sign-form">
            <h2>Sign Up</h2>
            <form>
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
                            placeholder='First Name'
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
                            placeholder='Last Name'
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="signup-username" className="form-label">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="signup-username"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        placeholder='Username'
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
                        placeholder='abc@example.com'
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="signup-password" className="form-label">Password:</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="signup-password"
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

                <button type="button" className="btn btn-success mt-2" onClick={saveChanges}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
