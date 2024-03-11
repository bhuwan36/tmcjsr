const User = require("../models/UserModel");


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
			pincode

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
			!pincode
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
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
			pincode
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





