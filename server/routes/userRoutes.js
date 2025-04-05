const express = require("express");

const router = express.Router();

const User = require("../models/userModel"); // require the model
const { loginUser, 
        signupUser } = require("../controllers/userController"); // require the controllers

//login user
router.post("/login", loginUser);

//signup user
router.post("/signup", signupUser);

module.exports = router;
