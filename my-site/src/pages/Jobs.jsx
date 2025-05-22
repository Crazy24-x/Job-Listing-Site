import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, setFilters, clearFilters, setSort } from '../store/slices/jobsSlice';
import { Form, Row, Col, Button, Card, ListGroup, Spinner, Alert, Dropdown } from 'react-bootstrap';
import JobCard from '../components/JobCard';
import Header from '../components/Header';

const Jobs = () => {
    const dispatch = useDispatch();
    const {
        jobs,
        loading,
        error,
        filters,
        sort
    } = useSelector((state) => state.jobs);

    const categories = [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'Marketing',
        'Design'
    ];

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch, filters, sort]);

    const handleSearchChange = (e) => {
        dispatch(setFilters({ search: e.target.value }));
    };

    const handleLocationChange = (e) => {
        dispatch(setFilters({ location: e.target.value }));
    };

    const handleCategorySelect = (category) => {
        dispatch(setFilters({ category }));
    };

    const handleClearFilters = () => {
        dispatch(clearFilters());
    };

    const handleSort = (type) => {
        dispatch(setSort(type));
    };

    return (
        <div className="jobs-page bg-light">
            <Header />
            <div className="container py-5">
                <div className="mb-4 p-4 bg-white rounded shadow-sm">
                    <h2 className="text-primary">Job Listings</h2>
                    <Form className="mt-3">
                        <Row>
                            <Col md={5}>
                                <Form.Control
                                    type="text"
                                    placeholder="Search jobs or companies"
                                    value={filters.search}
                                    onChange={handleSearchChange}
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control
                                    type="text"
                                    placeholder="Location"
                                    value={filters.location}
                                    onChange={handleLocationChange}
                                />
                            </Col>
                            <Col md={2}>
                                <Button
                                    variant="outline-secondary"
                                    onClick={handleClearFilters}
                                    className="w-100"
                                >
                                    Clear
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <Row>
                    <Col md={3}>
                        <Card className="border-primary">
                            <Card.Header className="bg-primary text-white">Filters</Card.Header>
                            <Card.Body>
                                <h6 className="mt-2">Categories</h6>
                                <ListGroup variant="flush">
                                    {categories.map((category) => (
                                        <ListGroup.Item
                                            key={category}
                                            action
                                            active={filters.category === category}
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={9}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                {jobs.length > 0 && (
                                    <span className="text-muted">
                    Showing {jobs.length} jobs
                  </span>
                                )}
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-primary">
                                    Sort: {sort.by ? `${sort.by} (${sort.direction})` : 'None'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleSort('salary')}>
                                        Salary {sort.by === 'salary' && `(${sort.direction})`}
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleSort('date')}>
                                        Date Posted {sort.by === 'date' && `(${sort.direction})`}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleSort(null)}>
                                        Clear Sorting
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        {loading && (
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        )}

                        {error && (
                            <Alert variant="danger">{error}</Alert>
                        )}

                        {!loading && !error && jobs.length === 0 && (
                            <Alert variant="info">No jobs match your filters</Alert>
                        )}

                        <Row className="g-4">
                            {jobs.map((job) => (
                                <Col key={job.id} xs={12}>
                                    <JobCard job={job} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Jobs;