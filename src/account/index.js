import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faUsers,
    faUserFriends,
    faUserPlus,
    faEye,
    faUserTag,
    faTools,
} from "@fortawesome/free-solid-svg-icons";


const Account = () => {

    const { userIsSet } = useSelector((state) => state.userReducer);
    const { currentUser } = useSelector((state) => state.userReducer);
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location.pathname);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
        client.signout();
        dispatch(clearUser());
        navigate("/home");
    };

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location.pathname]);

    return (
        <div className="d-flex mainframe">
            {userIsSet &&
                <div className="d-flex flex-column flex-shrink-0 sidebar">
                    <Link to="/account" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4 sidebar-text">{currentUser.username}</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {
                            userIsSet &&
                            <li className={currentLocation === "/account" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account" className="nav-link" aria-current="page">
                                    <FontAwesomeIcon icon={faUser} className="bi me-2" />
                                    <span className='sidebar-text'>Account</span>
                                </Link>
                            </li>
                        }
                        <li className={currentLocation === "/account/users" ? "nav-item activesidebar" : "nav-item"}>
                            <Link to="/account/users" className="nav-link ">
                                <FontAwesomeIcon icon={faUsers} className="bi me-2" />
                                <span className='sidebar-text'>Users</span>
                            </Link>
                        </li>
                        {
                            userIsSet &&
                            <li className={currentLocation === "/account/followers" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account/followers" className="nav-link ">
                                    <FontAwesomeIcon icon={faUserFriends} className="bi me-2" />
                                    <span className='sidebar-text'>Followers</span>
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className={currentLocation === "/account/following" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account/following" className="nav-link ">
                                    <FontAwesomeIcon icon={faUserPlus} className="bi me-2" />
                                    <span className='sidebar-text'>Following</span>
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className={currentLocation === "/account/watchlist" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account/watchlist" className="nav-link ">
                                    <FontAwesomeIcon icon={faEye} className="bi me-2" />
                                    <span className='sidebar-text'>Watchlist</span>
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className={currentLocation === "/account/roles" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account/roles" className="nav-link ">
                                    <FontAwesomeIcon icon={faUserTag} className="bi me-2" />
                                    <span className='sidebar-text'>Roles</span>
                                </Link>
                            </li>
                        }
                        {
                            userIsSet && currentUser.currentRole === "Admin" &&
                            <li className={currentLocation === "/account/adminportal" ? "nav-item activesidebar" : "nav-item"}>
                                <Link to="/account/adminportal" className="nav-link ">
                                    <FontAwesomeIcon icon={faTools} className="bi me-2" />
                                    <span className='sidebar-text'>Admin Portal</span>
                                </Link>
                            </li>
                        }
                        {/* {
                            userIsSet && currentUser.currentRole === "Moderator" &&
                            <li className="nav-item">
                                <Link to="/account/modportal" className="nav-link ">
                                    <svg className="bi me-2" width="16" height="16"></svg>
                                    Moderator Portal
                                </Link>
                            </li>
                        } */}
                    </ul>
                    <hr />
                    <footer className='sidebar-text'>
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
                    <Route path="users/:userId" element={<AccountDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default Account;