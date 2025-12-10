import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    useEffect(() => {
        if (token) {
            // Here you would typically validate the token with the backend
            // For now, we'll assume if token exists, we can decode it or fetch profile
            // But since we are implementing real auth, let's fetch profile:
            fetch('http://localhost:5000/api/auth/profile', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(res => {
                    if (res.ok) return res.json();
                    throw new Error('Failed to fetch profile');
                })
                .then(data => setUser(data))
                .catch(() => {
                    logout();
                });
        }
    }, [token]);

    const login = async (email, password) => {
        const res = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            setToken(data.token);
            setUser(data);
            localStorage.setItem('token', data.token);
            return data; // Return data for role-based redirect
        } else {
            throw new Error(data.message);
        }
    };

    const register = async (name, email, password, role) => {
        const res = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role })
        });
        const data = await res.json();
        if (res.ok) {
            setToken(data.token);
            setUser(data);
            localStorage.setItem('token', data.token);
            return data;
        } else {
            throw new Error(data.message);
        }
    };

    const logout = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
