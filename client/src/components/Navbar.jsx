import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)', textDecoration: 'none' }}>JobNexus</Link>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link to="/jobs" style={{ color: 'var(--text-primary)' }}>Find Jobs</Link>
                <Link to="/login" style={{ color: 'var(--text-primary)' }}>Login</Link>
                <Link to="/register" className="btn-primary" style={{ color: 'white', textDecoration: 'none' }}>Get Started</Link>
            </div>
        </nav>
    );
};

export default Navbar;
