import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Card, Row, Col, Spinner, Alert, Form, InputGroup, Button} from 'react-bootstrap';
import Header from '../components/Header';

const Companies = () => {
    const { jobs, loading, error } = useSelector((state) => state.jobs);
    const [searchTerm, setSearchTerm] = useState('');

    const companies = [...new Set(jobs.map(job => job.company.name))]
        .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(name => {
            const companyJobs = jobs.filter(job => job.company.name === name);
            return {
                name,
                logo: companyJobs[0].company.logo,
                industry: companyJobs[0].industry || 'Various',
                jobCount: companyJobs.length,
                locations: [...new Set(companyJobs.map(job => job.location))]
            };
        });

    return (
        <div className="companies-page bg-light">
            <Header />
            <div className="container py-5">
                <div className="mb-4 p-4 bg-white rounded shadow-sm">
                    <h2 className="text-primary">Top Companies</h2>
                    <InputGroup className="mt-3">
                        <Form.Control
                            placeholder="Search companies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="primary">
                            <i className="bi bi-search"></i>
                        </Button>
                    </InputGroup>
                </div>

                {loading && <Spinner animation="border" className="my-5" />}
                {error && <Alert variant="danger">{error}</Alert>}

                <Row className="g-4">
                    {companies.map((company, index) => (
                        <Col key={index} md={4}>
                            <Card className="h-100 border-primary">
                                <Card.Body className="text-center">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="img-fluid mb-3"
                                        style={{ maxHeight: '80px' }}
                                    />
                                    <Card.Title>{company.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {company.industry}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <small>
                                            {company.jobCount} open positions<br />
                                            In {company.locations.length} locations
                                        </small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Companies;