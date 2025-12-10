import { useState, useContext } from 'react';
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../context/AuthContext';

const CandidateDashboard = () => {
    const { user, token } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('');

    const handleUpdateProfile = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title })
            });
            if (res.ok) {
                // In a real app, update local user context state here
                // For now, we rely on page reload or re-fetch logic if we had it
                alert('Profile updated! Please refresh to see changes.');
                setIsEditing(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <Navbar />
            <h1 style={{ marginBottom: '2rem' }}>Candidate Dashboard</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>My Profile</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                            👤
                        </div>
                        <h3>{user?.name || 'User'}</h3>

                        {isEditing ? (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    className="input-field"
                                    style={{ marginBottom: 0, padding: '5px' }}
                                    placeholder="Job Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <button className="btn-primary" style={{ padding: '5px 10px', fontSize: '0.8rem' }} onClick={handleUpdateProfile}>Save</button>
                                <button style={{ padding: '5px 10px', fontSize: '0.8rem', background: 'transparent', color: 'var(--text-secondary)' }} onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ color: 'var(--text-secondary)' }}>{user?.title || 'Add role title'}</p>
                                <span style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'var(--accent-primary)' }} onClick={() => { setTitle(user?.title || ''); setIsEditing(true); }}>Edit</span>
                            </div>
                        )}

                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{user?.email}</p>
                        <button className="btn-primary" style={{ marginTop: '1rem' }}>Upload Resume</button>
                    </div>
                </div>

                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>My Applications</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[1, 2].map(i => (
                            <div key={i} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4>Senior React Developer</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Innovate Inc</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', fontSize: '0.8rem' }}>
                                        In Review
                                    </span>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Applied 2d ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateDashboard;
