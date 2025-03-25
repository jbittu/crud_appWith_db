const express = require("express");

const Workout = require("../models/workoutModel"); // require the model

const {
  getWorkout,
  getWorkoutById,
  createWorkout,
    editWorkout,
    deleteWorkout
} = require("../controllers/workoutController"); // require the controllers

const router = express.Router();

//Get entire workout list
router.get("/", getWorkout);

//Get workout by id
router.get("/:id", getWorkoutById);

//Create Record
router.post('/', createWorkout);

//Update Record
router.patch('/:id', editWorkout);

//Delete Record
router.delete('/:id', deleteWorkout);

module.exports = router;
