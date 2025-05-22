// src/components/SearchBar.jsx
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/jobs?search=${searchTerm}&location=${location}`);
    };

    return (
        <Form onSubmit={handleSubmit} className="job-search-form bg-white p-4 rounded shadow">
            <Row className="g-3 align-items-end">
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>What</Form.Label>
                        <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
                            <Form.Control
                                type="text"
                                placeholder="Job title, keywords, or company"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-start-0"
                            />
                        </div>
                    </Form.Group>
                </Col>
                <Col md={5}>
                    <Form.Group>
                        <Form.Label>Where</Form.Label>
                        <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-geo-alt text-muted"></i>
              </span>
                            <Form.Control
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="border-start-0"
                            />
                        </div>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Button type="submit" variant="primary" className="w-100 h-100">
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBar;