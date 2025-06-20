// RegisterForm.js

import React, { useState } from 'react';
import '../css/RegisterForm.css';
import axios from 'axios';
import { toast } from "react-toastify";
import qr from '../Assets/qr.jpg';

const RegisterForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        hq: '',
        gender: '',
        address: '',
        city: '',
        district: '',
        state: '',
        pincode: '',
    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const [showPaymentChoice, setShowPaymentChoice] = useState(false);
    const [utr, setUtr] = useState("");
    const [finalSubmitting, setFinalSubmitting] = useState(false);

    const fieldLabels = {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        dob: 'Date of Birth',
        hq: 'Highest Qualification',
        gender: 'Gender',
        address: 'Address',
        city: 'City',
        district: 'District',
        state: 'State',
        pincode: 'Pincode',
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate all fields
        for (const key in formData) {
            if (!formData[key] || (typeof formData[key] === 'string' && formData[key].trim() === '')) {
                toast.error(`${fieldLabels[key]} is required.`, { position: toast.POSITION.TOP_CENTER });
                return;
            }
        }
        setShowPaymentChoice(true);
    };

    const handleFreeSubmit = async (e) => {
        e.preventDefault();
        setFinalSubmitting(true);
        try {
            const response = await axios.post('https://tmcjsr-backend.vercel.app/api/auth/register', { ...formData, isFree: true });
            toast.success("Registration Complete (Free)!", {
                position: toast.POSITION.TOP_CENTER,
            });
            setShowPaymentChoice(false);
            setShowQR(false);
            setUtr("");
            if (typeof onClose === 'function') onClose();
        } catch (error) {
            toast.error('Submission failed. Try again.');
            setFinalSubmitting(false);
        }
    };

    const handleFinalSubmit = async (e) => {
        e.preventDefault();
        setFinalSubmitting(true);
        try {
            const response = await axios.post('https://tmcjsr-backend.vercel.app/api/auth/register', { ...formData, utr });
            toast.success("Registration Complete!", {
                position: toast.POSITION.TOP_CENTER,
            });
            setShowQR(false);
            setUtr("");
            if (typeof onClose === 'function') onClose();
        } catch (error) {
            toast.error('Submission failed. Try again.');
            setFinalSubmitting(false);
        }
    };

    return (
        <div className="register-overlay">
            <div className="register-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="register-form">
                    <h2>Register</h2>
                    {!showPaymentChoice && !showQR && (
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                            <input type="date" name="dob" value={formData.dob} placeholder="Date of Birth" onChange={handleChange} />
                            <select name="hq" value={formData.hq} onChange={handleChange}>
                                <option value="">Select Highest Qualification</option>
                                <option value="Matriculation">Matriculation</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Post Graduation">Post Graduation</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                            <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} />
                            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                            <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
                            <button type="submit" disabled={isButtonDisabled} >Submit</button>
                        </form>
                    )}
                    {showPaymentChoice && !showQR && (
                        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16}}>
                            <p style={{marginBottom: 8}}>Choose an option to complete your registration:</p>
                            <button style={{width: '100%', marginBottom: 8}} onClick={() => { setShowQR(true); setShowPaymentChoice(false); }}>Pay &amp; Submit</button>
                            <span style={{margin: '8px 0', color: '#888'}}>or</span>
                            <button style={{width: '100%'}} onClick={handleFreeSubmit} disabled={finalSubmitting}>
                                {finalSubmitting ? 'Submitting...' : 'Free'}
                            </button>
                        </div>
                    )}
                    {showQR && (
                        <form onSubmit={handleFinalSubmit} style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <div style={{margin: '16px 0'}}>
                                <img src={qr} alt="QR Code" style={{width: 180, height: 180, border: '1px solid #eee', borderRadius: 8}} />
                            </div>
                            <input
                                type="text"
                                name="utr"
                                placeholder="Enter UTR Number"
                                value={utr}
                                onChange={e => setUtr(e.target.value)}
                                required
                                style={{marginBottom: 16, width: '90%'}}
                            />
                            <button type="submit" disabled={finalSubmitting || !utr}>
                                {finalSubmitting ? 'Submitting...' : 'Final Submit'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
