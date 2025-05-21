// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">JobBoard</h5>
                        <p>
                            Connecting talented professionals with top companies worldwide. Find your dream job or
                            ideal candidate today.
                        </p>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-white text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/jobs" className="text-white text-decoration-none">
                                    Browse Jobs
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/companies" className="text-white text-decoration-none">
                                    Companies
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-white text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5 className="text-uppercase mb-4">Resources</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/career-advice" className="text-white text-decoration-none">
                                    Career Advice
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/resume-tips" className="text-white text-decoration-none">
                                    Resume Tips
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/interview-tips" className="text-white text-decoration-none">
                                    Interview Tips
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blog" className="text-white text-decoration-none">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="text-uppercase mb-4">Contact Us</h5>
                        <address>
                            <p>
                                <i className="bi bi-geo-alt-fill me-2"></i> 123 Job Street, Career City, 10001
                            </p>
                            <p>
                                <i className="bi bi-envelope-fill me-2"></i> info@jobboard.com
                            </p>
                            <p>
                                <i className="bi bi-telephone-fill me-2"></i> (123) 456-7890
                            </p>
                        </address>
                        <div className="social-icons">
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-light" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {new Date().getFullYear()} JobBoard. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <Link to="/privacy" className="text-white text-decoration-none me-3">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-white text-decoration-none">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;