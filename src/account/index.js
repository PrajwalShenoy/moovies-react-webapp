import React from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./index.css"
import User from "./user";
import Watchlist from "./watchlist";
import Users from "./users";
import Following from "./following";
import Followers from "./followers";
import Roles from "./roles";
import Admin from "./admin";
import { setUser, clearUser } from "./user/userReducer";
import * as client from "../api/client";
import AccountDetails from "./users/AccountDetails";

const Account = () => {

    const { userIsSet } = useSelector((state) => state.userReducer);
    const { currentUser } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        client.signout();
        dispatch(clearUser());
        navigate("/home");
    };

    return (
        <div className="d-flex mainframe">
            { userIsSet &&
                <div className="d-flex flex-column flex-shrink-0 p-3 sidebar">
                    <Link to="/account" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4">{currentUser.username}</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link to="/account" className="nav-link" aria-current="page">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Account
                                </Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link to="/account/users" className="nav-link ">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Users
                            </Link>
                        </li>
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link to="/account/followers" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Followers
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link to="/account/following" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Following
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link to="/account/watchlist/" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Watchlist
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link to="/account/roles" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Roles
                                </Link>
                            </li>
                        }
                        {
                            userIsSet && currentUser.currentRole === "Admin" &&
                            <li className="nav-item">
                                <Link to="/account/adminportal" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Admin Portal
                                </Link>
                            </li>
                        }
                        {
                            userIsSet && currentUser.currentRole === "Moderator" &&
                            <li className="nav-item">
                                <Link to="/account/modportal" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Moderator Portal
                                </Link>
                            </li>
                        }
                    </ul>
                    <hr />
                    <footer>
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                {/* <Link to="#" className="nav-link" aria-current="page">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Sign out
                                </Link> */}
                                <button className="nav-link signout-button" onClick={logout}>
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </footer>
                </div>
            }
            <div>
                <Routes>
                    <Route path="" element={<User />} />
                    <Route path="users" element={<Users />} />
                    <Route path="followers" element={<Followers />} />
                    <Route path="following" element={<Following />} />
                    <Route path="watchlist" element={<Watchlist />} />
                    <Route path="adminportal" element={<Admin />} />
                    <Route path="roles" element={<Roles />} />
                    <Route path="watchlist" element={<Watchlist />} />
                    <Route path="activities" element={<h1>Activities</h1>} />
                    <Route path="users/:userId" element={<AccountDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default Account;