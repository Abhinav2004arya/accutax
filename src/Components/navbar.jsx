import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark.bg-gradient shadow p-3 mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src="/images/logo2.png" alt="LogoImage" width="120" height="60" className="nav-image"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 navs justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/itr">ITR</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/itr-calc">ITR-Calculator</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About Us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact Us">Contact Us</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

