const Workout = require('../models/workoutModel');



const getWorkout = async (req, res) => {
    try{
        const workoutData = await Workout.find().sort({createdAt : -1});
        res.status(200).json(workoutData);
    }catch(err) {
        res.status(400).json({error: err.message});
    }
}


module.exports = {getWorkout,};