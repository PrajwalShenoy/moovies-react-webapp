import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, updateUser, clearUser } from '../account/user/userReducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as client from '../api/client';
import './index.css';

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { userIsSet } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    let currentUser = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        memberSince: ""
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const resetFields = () => {
        setUsername("");
        setPassword("");
    };

    const handleSignIn = async () => {
        currentUser = await client.signin({username: username, password: password});
        dispatch(setUser(currentUser));
        resetFields();
        if (currentUser) {
            navigate("/home");
        }
    };

    return (
        <div className="form-container p-5 sign-form">
            <h2>Sign In</h2>
            {/* <form> */}
                <div className="mb-3 pe-5">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='username'
                    />
                </div>
                <div className="mb-3 pe-5">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                <button className="btn btn-success" onClick={handleSignIn}>
                    Sign In
                </button>
            {/* </form> */}
        </div>
    );
};

export default SignIn;
