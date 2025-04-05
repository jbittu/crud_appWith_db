require('dotenv').config(); //dotenv connection

require("../server/dB/connection"); //DB connection
const cors = require('cors'); //cors connection


const express = require('express');
const app = express();
PORT = process.env.PORT || 8000;

//required routes
const workoutRoutes = require('./routes/workoutRoutes'); //workoutRoutes connection
const userRoutes = require('./routes/userRoutes'); //userRoutes connection


//Middleware
app.use(express.json());
app.use(cors());

//workoutRoutes
app.use('/api/workout', workoutRoutes);

//userRoutes
app.use('/api/user', userRoutes);



app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})