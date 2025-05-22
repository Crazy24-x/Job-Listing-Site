import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../store/slices/jobsSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import '../styles/main.css';

const Home = () => {
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    return (
        <div className="home-page">
            <Header />
            <main className="container-fluid p-0">
                {/* Hero Section */}
                <section className="hero-section bg-primary text-white py-5">
                    <div className="container">
                        <h1 className="display-4 fw-bold mb-4">Find Your Dream Job Today</h1>
                        <p className="lead mb-4">
                            Browse thousands of job listings and find the perfect match for your skills and experience.
                        </p>
                        <SearchBar />
                    </div>
                </section>

                {/* Featured Jobs Section */}
                <section className="featured-jobs py-5">
                    <div className="container">
                        <div className="section-header d-flex justify-content-between align-items-center mb-4">
                            <h2 className="h3 fw-bold">Featured Jobs</h2>
                            <a href="/jobs" className="btn btn-outline-primary">
                                View All Jobs
                            </a>
                        </div>

                        {loading && (
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                Error loading jobs: {error}
                            </div>
                        )}

                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {jobs.slice(0, 6).map((job) => (
                                <div className="col" key={job.id}>
                                    <JobCard job={job} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="job-categories py-5 bg-light">
                    <div className="container">
                        <h2 className="h3 fw-bold mb-4">Browse by Category</h2>
                        <div className="row">
                            {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Design'].map((category, index) => (
                                <div className="col-6 col-md-4 col-lg-2 mb-3" key={index}>
                                    <a
                                        href={`/jobs?category=${category.toLowerCase()}`}
                                        className="category-card d-block p-3 text-center bg-white rounded shadow-sm text-decoration-none"
                                    >
                    <span className="d-block mb-2">
                      <i className={`bi bi-${getCategoryIcon(category)} fs-4 text-primary`}></i>
                    </span>
                                        <span className="fw-medium">{category}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section py-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="stat-item">
                                    <h3 className="display-4 fw-bold text-primary">10,000+</h3>
                                    <p className="text-muted">Job Listings</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="stat-item">
                                    <h3 className="display-4 fw-bold text-primary">5,000+</h3>
                                    <p className="text-muted">Companies</p>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="stat-item">
                                    <h3 className="display-4 fw-bold text-primary">1M+</h3>
                                    <p className="text-muted">Job Seekers</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="stat-item">
                                    <h3 className="display-4 fw-bold text-primary">500+</h3>
                                    <p className="text-muted">Cities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

// Helper function to get icons for categories
const getCategoryIcon = (category) => {
    const icons = {
        Technology: 'laptop',
        Healthcare: 'heart-pulse',
        Finance: 'coin',
        Education: 'book',
        Marketing: 'megaphone',
        Design: 'palette',
    };
    return icons[category] || 'briefcase';
};

export default Home;