import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { setUser, clearUser } from "../account/user/userReducer";
import * as client from "../api/client";
import Users from "../account/users";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [currentRole, setCurrentRole] = useState("User");

    const getCurrentUser = async () => {
        let loggedInUser = await client.getSessionAccount();
        return loggedInUser;
    };

    const logout = () => {
        client.signout();
        dispatch(clearUser());
        navigate("/home");
    };

    useEffect(() => {
        getCurrentUser().then((user) => {
            if (user) {
                dispatch(setUser(user));
            }
            else {
                switch (location.pathname) {
                    case "/account":
                        navigate("/account/users");
                        break;
                    case "/account/adminportal":
                        navigate("/account/users");
                        break;
                    case "/account/roles":
                        navigate("/account/users");
                        break;
                }
            }
        });
    }, [location.pathname, currentRole]);

    const handleRoleClick = async (role) => {
        const response = await client.setUsersCurrentRole(role);
        setCurrentRole(role);
    };

    const { userIsSet } = useSelector((state) => state.userReducer);
    const { currentUser } = useSelector((state) => state.userReducer);

    return (
        <nav className="navbar navbar-expand-lg customise-navbar ">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">Film Fiesta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            !userIsSet &&
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/signin">Sign In</Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/account">{currentUser.firstName}</Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/watchlist">Watchlist</Link>
                            </li>

                        }
                        {
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>

                        }
                        {
                            !userIsSet &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/account/users">
                                    {userIsSet ? "Account" : "Users"}
                                </Link>
                            </li>
                        }
                        {
                            userIsSet &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Role</Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown09">
                                    {
                                        currentUser.role.map((role) => {
                                            return (
                                                <li><Link className="dropdown-item" to={location.pathname} onClick={() => handleRoleClick(role)}>{role}</Link></li>
                                            );
                                        })
                                    }
                                </ul>
                            </li>
                        }
                    </ul>
                    {
                        userIsSet &&
                        <button className="nav-link signout-button me-3" onClick={logout}>
                            Sign out
                        </button>
                    }
                    {/*<form>*/}
                    {/*    <input className="form-control" type="text" placeholder="SearchBox" aria-label="SearchBox"/>*/}
                    {/*</form>*/}
                    {/*<button className="btn btn-success ms-2" type="submit">SearchBox</button>*/}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;