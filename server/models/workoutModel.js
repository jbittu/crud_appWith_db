const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    loads : {
        type : Number,
        required : true
    },
    
},{timestamps : true});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;