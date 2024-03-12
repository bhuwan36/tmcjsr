// RegisterForm.js

import React, { useState } from 'react';
import '../css/RegisterForm.css';
import axios from 'axios';
import { toast } from "react-toastify";

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isButtonDisabled) {
                toast.success("Registered Successfully.", {
                    position: toast.POSITION.TOP_CENTER,
                    onOpen: () => setIsButtonDisabled(true),
                    onClose: () => setIsButtonDisabled(false),
                });
            }
            const response = await axios.post('https://tmcjsr-backend.vercel.app/api/auth/register', formData);
            console.log(response.data);

            // Handle success
        } catch (error) {
            console.error('Error:', error.response.data);
            // Handle error
        }
    };

    return (
        <div className="register-modal">
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                    <select name="hq" value={formData.hq} onChange={handleChange}>
                        <option value="">Select HQ</option>
                        <option value="hq1">HQ 1</option>
                        <option value="hq2">HQ 2</option>
                        {/* Add more options as needed */}
                    </select>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        {/* Add more options as needed */}
                    </select>
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                    <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
                    <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
                    <button type="submit" disabled={isButtonDisabled} >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
