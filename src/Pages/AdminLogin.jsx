import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = ({ onSuccess }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error('All fields are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('https://tmcjsr-backend.vercel.app/api/auth/admin/login', form);
      toast.success('Admin login successful!');
      setForm({ email: '', password: '' });
      if (onSuccess) onSuccess(res.data.admin);
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error(
        err.response?.data?.message || 'Login failed. Try again.'
      );
    }
    setLoading(false);
  };

  return (
    <div className="register-overlay">
      <div className="register-modal">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
      <div style={{ textAlign: 'center', marginTop: 12 }}>
        {/* Register link removed */}
      </div>
    </div>
  );
};

export default AdminLogin;
