const Workout = require("../models/workoutModel");

// Get all workout data
const getWorkout = async (req, res) => {
  
  try {
    const user_id = req.user._id;
    console.log("User ID in getWorkout:", user_id);
    const workoutDatas = await Workout.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(workoutDatas);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//Get workout by id
const getWorkoutById = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findById({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ errer: err.message });
  }
};

//create workout
const createWorkout = async (req, res) => {
   const { title, reps, loads } = req.body;
   
  try {
    const user_id = req.user._id; //  user ID from authentication middleware

    const newWorkout = new Workout({title, reps, loads, user_id});
    const savedWorkout = await newWorkout.save();
    res.status(201).json(savedWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update/edite workout
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedworkout = await Workout.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedworkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


//Delete workout
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteWorkout = await Workout.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getWorkout,
  getWorkoutById,
  createWorkout,
  editWorkout,
  deleteWorkout,
};
