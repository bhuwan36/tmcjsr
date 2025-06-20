const User = require("../models/UserModel");
const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");


// Signup Controller for Registering USers

exports.signup = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			firstName,
			lastName,
			email,
			phone,
			dob,
			hq,
			gender,
			address,
			city,
			district,
			state,
			pincode,
			utr,
			isFree
		} = req.body;
		// Check if All Details are there or not
		if (
			!firstName ||
			!lastName ||
			!email ||
			!phone ||
			!dob ||
			!hq ||
			!gender ||
			!address ||
			!city ||
			!district ||
			!state ||
			!pincode ||
			(isFree !== true && !utr) // UTR required if not free
		) {
			return res.status(403).send({
				success: false,
				message: "All fields are required. UTR is required unless Free option is selected.",
			});
		}

		// If free, set utr to 'free', else require utr
		let utrValue = utr;
		if (isFree) {
			utrValue = 'free';
		}
		if (!utrValue) {
			return res.status(403).send({
				success: false,
				message: "UTR number is required (or use Free option)",
			});
		}

		const user = await User.create({
			firstName,
			lastName,
			email,
			phone,
			dob,
			hq,
			gender,
			address,
			city,
			district,
			state,
			pincode,
			utr: utrValue
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
	} catch (error) {
		console.error(error.message);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};

// Admin Registration (no pin)
exports.adminRegister = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ success: false, message: "All fields are required." });
		}
		const existing = await Admin.findOne({ email });
		if (existing) {
			return res.status(400).json({ success: false, message: "Admin already exists." });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const admin = await Admin.create({ email, password: hashedPassword });
		return res.status(201).json({ success: true, admin, message: "Admin registered successfully." });
	} catch (err) {
		return res.status(500).json({ success: false, message: "Server error." });
	}
};

// Admin Login (no pin)
exports.adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ success: false, message: "All fields are required." });
		}
		const admin = await Admin.findOne({ email });
		if (!admin) {
			return res.status(401).json({ success: false, message: "Invalid credentials." });
		}
		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			return res.status(401).json({ success: false, message: "Invalid credentials." });
		}
		return res.status(200).json({ success: true, admin, message: "Admin login successful." });
	} catch (err) {
		return res.status(500).json({ success: false, message: "Server error." });
	}
};

// Get all users (admin dashboard)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json({ success: true, users });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch users.' });
    }
};





