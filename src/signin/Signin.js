import React, { useState } from 'react';
import './index.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Add your sign-in logic here
        console.log('Signing in with:', { username, password });
    };

    return (
        <div className="form-container p-5 sign-form">
            <h2>Sign In</h2>
            <form>
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
                    />
                </div>
                <div className="mb-3 pe-5">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={handleSignIn}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
