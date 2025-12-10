import { useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../context/AuthContext';

const AdminDashboard = () => {
    const { token } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        type: 'Full-time',
        description: ''
    });

    const handlePostJob = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(jobData)
            });
            if (res.ok) {
                alert('Job Posted Successfully!');
                setShowModal(false);
                setJobData({ title: '', company: '', location: '', type: 'Full-time', description: '' });
            } else {
                alert('Failed to post job');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Recruiter Dashboard</h1>
                <button className="btn-primary" onClick={() => setShowModal(true)}>+ Post New Job</button>
            </div>

            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                    <div className="glass-panel" style={{ padding: '2rem', width: '500px', maxWidth: '90%' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Post a New Job</h2>
                        <form onSubmit={handlePostJob}>
                            <input className="input-field" placeholder="Job Title" value={jobData.title} onChange={e => setJobData({ ...jobData, title: e.target.value })} required />
                            <input className="input-field" placeholder="Company" value={jobData.company} onChange={e => setJobData({ ...jobData, company: e.target.value })} required />
                            <input className="input-field" placeholder="Location" value={jobData.location} onChange={e => setJobData({ ...jobData, location: e.target.value })} required />
                            <select className="input-field" value={jobData.type} onChange={e => setJobData({ ...jobData, type: e.target.value })}>
                                <option>Full-time</option>
                                <option>Contract</option>
                                <option>Part-time</option>
                            </select>
                            <textarea className="input-field" placeholder="Description" rows="4" value={jobData.description} onChange={e => setJobData({ ...jobData, description: e.target.value })} required></textarea>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="submit" className="btn-primary">Post Job</button>
                                <button type="button" onClick={() => setShowModal(false)} style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '10px 20px', borderRadius: '8px' }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Analytics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Total Applications</p>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }}>128</h2>
                    <p style={{ fontSize: '0.9rem', color: '#4ade80' }}>+12% this week</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Active Jobs</p>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)' }}>12</h2>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Views</p>
                    <h2 style={{ fontSize: '2.5rem', color: '#facc15' }}>3.4k</h2>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Recent Applications</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="glass-panel" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        A
                                    </div>
                                    <div>
                                        <h4>Alex Johnson</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Senior React Developer</p>
                                    </div>
                                </div>
                                <div>
                                    <button style={{ marginRight: '1rem', color: 'var(--text-secondary)' }}>View Resume</button>
                                    <button style={{ color: '#4ade80' }}>Accept</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Hiring Activity</h3>
                    <div style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        [Chart Placeholder]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
