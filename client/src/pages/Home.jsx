import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <header style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Find Your Dream Job Today
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Connect with top employers and discover opportunities that match your skills and aspirations.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '12px 30px' }}>Browse Jobs</button>
                    <button className="glass-panel" style={{ fontSize: '1.1rem', padding: '12px 30px', color: 'var(--text-primary)' }}>Post a Job</button>
                </div>
            </header>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
                <h2 style={{ gridColumn: '1/-1', marginBottom: '1rem' }}>Featured Roles</h2>
                {[1, 2, 3].map(i => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>Senior React Developer</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Innovate Inc • New York, NY</p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            We are looking for an experienced developer to lead our frontend team...
                        </p>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', cursor: 'pointer' }}>Apply Now &rarr;</span>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
