import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img
                            src={job.company.logo || 'images.png'}
                            alt={job.company.name}
                            style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                                marginRight: '15px'
                            }}
                        />
                        <div>
                            <h5>{job.title}</h5>
                            <p className="text-muted mb-1">{job.company.name}</p>
                            <p className="text-muted mb-1">
                                <i className="bi bi-geo-alt"></i> {job.location}
                            </p>
                        </div>
                    </div>
                    <div className="text-end">
                        <h6>{job.salary || 'Salary not disclosed'}</h6>
                        <small className="text-muted">{job.postedTime}</small>
                    </div>
                </div>

                <div className="mt-3 mb-3">
                    {job.tags?.map((tag, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-2">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        <i className="bi bi-briefcase"></i> {job.type || 'Full-time'}
                    </small>
                    <Button as={Link} to={`/jobs/${job.id}`} variant="primary" size="sm">
                        View Details
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default JobCard;