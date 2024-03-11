// Import the Mongoose library
const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
    {
        // Define the name field with type String, required, and trimmed
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        // Define the email field with type String, required, and trimmed
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
        hq: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        }






        // Add timestamps for when the document is created and last modified
    },
    { timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema);