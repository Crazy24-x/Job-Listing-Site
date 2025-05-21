// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';

const Header = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
                    JobBoard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/jobs">
                            Jobs
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/companies">
                            Companies
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {isAuthenticated ? (
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                    {user?.firstName || 'Account'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/dashboard">
                                        Dashboard
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/profile">
                                        Profile
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login" className="me-2">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={NavLink} to="/register" className="btn btn-primary text-white">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;