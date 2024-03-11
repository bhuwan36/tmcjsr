const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    signup,
} = require("../controllers/Auth");




//Route for user signup
router.post("/register", signup);




module.exports = router