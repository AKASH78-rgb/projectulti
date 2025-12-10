import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <Navbar />
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ marginBottom: '1rem' }}>Browse Opportunities</h1>
                <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
                    <input type="text" className="input-field" placeholder="Search by title, skill, or company" style={{ marginBottom: 0 }} />
                    <button className="btn-primary">Search</button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Filters</h3>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Job Type</label>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ padding: '5px 10px', background: 'var(--bg-secondary)', borderRadius: '15px', fontSize: '0.8rem' }}>Full-time</span>
                            <span style={{ padding: '5px 10px', background: 'var(--bg-secondary)', borderRadius: '15px', fontSize: '0.8rem' }}>Contract</span>
                        </div>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Location</label>
                        <input type="text" className="input-field" placeholder="City or Remote" style={{ fontSize: '0.9rem', padding: '8px' }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {jobs.length > 0 ? (
                        jobs.map(job => (
                            <div key={job.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{job.company} • {job.location}</p>
                                    <p style={{ fontSize: '0.9rem', maxWidth: '500px' }}>{job.description}</p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <button className="btn-primary" style={{ marginBottom: '0.5rem' }}>Apply</button>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>2 days ago</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading jobs...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
