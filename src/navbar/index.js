import React from "react";
import './index.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Navbar() {

    const { userIsSet } = useSelector((state) => state.userReducer);
    const { currentUser } = useSelector((state) => state.userReducer);

    return (
        <nav className="navbar navbar-expand-lg customise-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">Filmy Fiesta</Link>
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
                                <Link className="nav-link" to="/timeline">Timeline</Link>
                            </li>
                        }
                        { 
                            !userIsSet && 
                            <li className="nav-item">
                                <Link className="nav-link" to="/account">Account</Link>
                            </li>
                        }
                        { 
                            userIsSet && 
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Role</Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown09">
                                    <li><Link className="dropdown-item" to="#">User</Link></li>
                                    <li><Link className="dropdown-item" to="#">Moderator</Link></li>
                                    <li><Link className="dropdown-item" to="#">Admin</Link></li>
                                </ul>
                            </li>
                        }
                    </ul>
                    <form>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                    <button className="btn btn-success ms-2" type="submit">Search</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;