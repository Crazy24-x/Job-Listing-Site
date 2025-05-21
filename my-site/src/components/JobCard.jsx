// src/components/JobCard.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const JobCard = ({ job }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <article className="job-card card h-100 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="company-logo bg-light p-2 rounded">
                        <img
                            src={job.company.logo || '/images/default-company.png'}
                            alt={job.company.name}
                            className="img-fluid"
                            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        />
                    </div>
                    <button
                        className="btn btn-link p-0"
                        onClick={toggleFavorite}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        <i
                            className={`bi ${isFavorite ? 'bi-heart-fill text-danger' : 'bi-heart'}`}
                            style={{ fontSize: '1.5rem' }}
                        ></i>
                    </button>
                </div>
                <h3 className="h5 card-title">
                    <Link to={`/jobs/${job.id}`} className="text-decoration-none text-dark">
                        {job.title}
                    </Link>
                </h3>
                <p className="card-text text-muted mb-2">
                    <i className="bi bi-building me-2"></i>
                    {job.company.name}
                </p>
                <p className="card-text text-muted mb-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    {job.location}
                </p>
                <p className="card-text text-muted mb-3">
                    <i className="bi bi-cash me-2"></i>
                    {job.salary || 'Salary not disclosed'}
                </p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                    {job.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark">
              {tag}
            </span>
                    ))}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        <i className="bi bi-clock me-1"></i> {job.postedTime}
                    </small>
                    <Link to={`/jobs/${job.id}`} className="btn btn-sm btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default JobCard;