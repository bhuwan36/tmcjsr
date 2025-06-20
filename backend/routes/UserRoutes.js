const express = require("express");
const router = express.Router();

// Import the required controllers and middleware functions
const {
    signup,
    adminRegister,
    adminLogin,
    getAllUsers
} = require("../controllers/Auth");




//Route for user signup
router.post("/register", signup);

// Admin registration
// router.post("/admin/register", adminRegister); // registration removed
// Admin login
router.post("/admin/login", adminLogin);
// Admin get all users
router.get("/admin/users", getAllUsers);




module.exports = router