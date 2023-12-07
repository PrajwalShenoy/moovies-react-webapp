import React from "react";
import './index.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg customise-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample09">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/timeline">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/account">Account</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Role</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown09">
                                <li><a className="dropdown-item" href="#">User</a></li>
                                <li><a className="dropdown-item" href="#">Moderator</a></li>
                                <li><a className="dropdown-item" href="#">Admin</a></li>
                            </ul>
                        </li>
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