require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('./dB/connection'); // DB connection file

const workoutRoutes = require('./routes/workoutRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/workout', workoutRoutes);
app.use('/api/user', userRoutes);

// Serve static files from React frontend (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve index.html for any other route (SPA routing)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
