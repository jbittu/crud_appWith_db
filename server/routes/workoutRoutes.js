const express = require('express');

const Workout = require('../models/workoutModel'); // require the model

const {getWorkout}= require('../controllers/workoutController') // require the controllers

const router = express.Router();

//Get entire workout list
router.get('/', getWorkout);


module.exports = router;