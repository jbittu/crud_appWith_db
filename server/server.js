require('dotenv').config(); // dotenv connection
require("./dB/connection"); // DB connection
const cors = require('cors'); // cors connection
const path = require('path'); // path module for serving React frontend

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Required routes
const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());
app.use(cors());

// Workout Routes
app.use('/api/workout', workoutRoutes);

// User Routes
app.use('/api/user', userRoutes);

// Serve React static files (if you are serving React from Express)
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve the React frontend for all other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
