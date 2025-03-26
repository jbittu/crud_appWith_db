require("../server/dB/connection"); //DB connection
const workoutRoutes = require('./routes/workoutRoutes'); //Routes connection
const cors = require('cors'); //cors connection


const express = require('express');
const app = express();
PORT = process.env.PORT || 8000;


//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/workout', workoutRoutes);



app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})