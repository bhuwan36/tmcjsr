import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://tmcjsr-backend.vercel.app/api/auth/admin/users');
        setUsers(res.data.users || []);
      } catch (err) {
        toast.error('Failed to fetch users.');
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#fafdff', padding: '32px 0' }}>
      <div style={{ width: '100vw', overflowX: 'auto', margin: '0 auto' }}>
        <div className="register-modal" style={{ margin: '0 auto', width: '100vw', minWidth: 1400, background: '#fff', boxShadow: '0 8px 32px rgba(26,142,253,0.13)', borderRadius: 14 }}>
          <h2 style={{ textAlign: 'center', margin: '24px 0 16px 0' }}>All Registered Users</h2>
          {loading ? (
            <div>Loading...</div>
          ) : users.length === 0 ? (
            <div>No users found.</div>
          ) : (
            <table style={{ width: '100vw', borderCollapse: 'collapse', fontSize: '0.98rem', minWidth: 1400 }}>
              <thead style={{ background: '#eaf6ff' }}>
                <tr>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Name</th>
                  <th style={{ border: '1px solid #eee', padding: 8, minWidth: 260, wordBreak: 'break-all' }}>Email</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Phone</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>DOB</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Qualification</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Gender</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Address</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>City</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>District</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>State</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Pincode</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>UTR</th>
                  <th style={{ border: '1px solid #eee', padding: 8 }}>Registered</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id}>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.firstName} {u.lastName}</td>
                    <td style={{ border: '1px solid #eee', padding: 8, minWidth: 260, wordBreak: 'break-all' }}>{u.email}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.phone}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.dob}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.hq}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.gender}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.address}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.city}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.district}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.state}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.pincode}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{u.utr}</td>
                    <td style={{ border: '1px solid #eee', padding: 8 }}>{new Date(u.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
