// src/components/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('all');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/jobs?search=${searchTerm}&location=${location}&type=${jobType}`);
    };

    return (
        <form onSubmit={handleSubmit} className="job-search-form bg-white p-4 rounded shadow">
            <div className="row g-3">
                <div className="col-md-5">
                    <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search text-muted"></i>
            </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Job title, keywords, or company"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-geo-alt text-muted"></i>
            </span>
                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="all">All Types</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="remote">Remote</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <button type="submit" className="btn btn-primary w-100">
                        Search
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="d-flex flex-wrap gap-2">
                        <span className="text-white fw-light">Popular Searches:</span>
                        {['Developer', 'Designer', 'Manager', 'Remote', 'Marketing'].map((term, index) => (
                            <a
                                key={index}
                                href={`/jobs?search=${term}`}
                                className="badge bg-light text-dark text-decoration-none"
                            >
                                {term}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;