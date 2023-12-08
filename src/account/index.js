import React from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import "./index.css"
import User from "./user";
import Watchlist from "./watchlist";
import Users from "./users";
import Following from "./Following";
import Followers from "./Followers";

const Account = () => {
    return (
        <div className="d-flex mainframe">
            <div className="d-flex flex-column flex-shrink-0 p-3 sidebar">
                <a href="/account" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    <span className="fs-4">username</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="/account" className="nav-link" aria-current="page">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Account
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account/users" className="nav-link ">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Users
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account/followers" className="nav-link ">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Followers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account/following" className="nav-link ">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Following
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account/watchlist" className="nav-link ">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Watchlist
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/account/activities" className="nav-link ">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Activities
                        </a>
                    </li>
                </ul>
                <hr />
                <footer>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current="page">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Sign out
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>
            <div>
                <Routes>
                    <Route path="" element={<User/>} />
                    <Route path="users" element={<Users/>} />
                    <Route path="followers" element={<Followers/>} />
                    <Route path="following" element={<Following />} />
                    <Route path="watchlist" element={<Watchlist/>} />
                    <Route path="activities" element={<h1>Activities</h1>} />
                </Routes>
            </div>
        </div>
    );
};

export default Account;