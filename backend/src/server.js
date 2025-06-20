// backend/src/server.js

// Import necessary modules
import express from 'express'; // Express.js for building the web server
import cors from 'cors';      // CORS middleware to allow cross-origin requests from your React frontend
import dotenv from 'dotenv';  // For loading environment variables from a .env file
import { pool } from './db/connection.js'; // Import the PostgreSQL connection pool

// Load environment variables from .env file
// This should be called as early as possible in your application
dotenv.config();

// Create an Express application instance
const app = express();
const port = process.env.PORT || 5000; // Define the port for the server, defaulting to 5000

// Middleware Setup
// ==============================================================================

// Enable CORS for all origins. In a production environment, you would want to
// restrict this to your specific frontend domain(s) for security.
// Example for production:
// app.use(cors({ origin: 'https://your-portfolio-frontend.com' }));
app.use(cors());

// Enable express.json() middleware to parse JSON request bodies
// This allows you to receive JSON data from your frontend (e.g., for contact form submissions)
app.use(express.json());

// Basic Route Definition
// ==============================================================================

// A simple test route to ensure the server is working
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Example API Route (placeholder for future routes)
// You will typically create separate files for different resource routes (e.g., projects, contact)
// For now, let's add a test route that interacts with the DB
app.get('/api/test-db', async (req, res) => {
  try {
    // This is a simple query to test the database connection
    // It's just a placeholder; you'll replace this with actual queries for your data.
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({
      message: 'Database connected and query executed successfully!',
      currentTime: result.rows[0].now,
    });
  } catch (error) {
    console.error('Error connecting to or querying the database:', error.message);
    res.status(500).json({ error: 'Failed to connect to database or execute query.' });
  }
});


// Start the Server
// ==============================================================================

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Attempting to connect to PostgreSQL...');
  // Optional: Test database connection on server start
  pool.query('SELECT NOW()')
    .then(res => console.log('PostgreSQL database connected successfully! Current time:', res.rows[0].now))
    .catch(err => console.error('Failed to connect to PostgreSQL database on startup:', err.message));
});

// Export the app for testing or other modules if needed (less common for the main server file)
export default app;
