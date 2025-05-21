// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated } = useSelector((state) => state.auth);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-primary" to="/">
                        JobBoard
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="" end>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="jobs">
                                    Jobs
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="resourcesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Resources
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/career-advice">
                                            Career Advice
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/resume-tips">
                                            Resume Tips
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/interview-tips">
                                            Interview Tips
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="companies">
                                    Companies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {isAuthenticated ? (
                                <div className="dropdown">
                                    <button
                                        className="btn btn-outline-primary dropdown-toggle"
                                        type="button"
                                        id="userDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        My Account
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                        <li>
                                            <Link className="dropdown-item" to="/dashboard">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/profile">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/logout">
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="btn btn-outline-primary me-2">
                                        Login
                                    </Link>
                                    <Link to="/register" className="btn btn-primary">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;