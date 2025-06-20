// backend/src/db/connection.js

// Import the Pool class from the 'pg' library
import pg from 'pg';
const { Pool } = pg;

// Import dotenv to load environment variables.
// It's good practice to load it here too, in case this file is accessed directly
// or for more modularity, though dotenv.config() in server.js should cover it.
import dotenv from 'dotenv';
dotenv.config();

// Create a new PostgreSQL connection pool
// This pool will manage multiple connections to your database, improving efficiency.
// Connection details are loaded from environment variables for security and flexibility.
const pool = new Pool({
  user: process.env.PGUSER,       // PostgreSQL username (e.g., 'postgres')
  host: process.env.PGHOST,       // PostgreSQL host (e.g., 'localhost', or a cloud provider's URL)
  database: process.env.PGDATABASE, // PostgreSQL database name
  password: process.env.PGPASSWORD, // PostgreSQL password
  port: process.env.PGPORT,       // PostgreSQL port (default is 5432)
  // Optional: SSL configuration for production environments (e.g., Heroku, Render, AWS RDS)
  // For local development, this is usually not needed unless your local DB requires SSL.
  // ssl: {
  //   rejectUnauthorized: false // Set to true in production if you have proper certificates
  // }
});

// Add an event listener for database connection errors to help with debugging
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1); // Exit the process if a critical error occurs
});

// Optional: Test the connection when this module is loaded
// This isn't strictly necessary as queries will automatically establish connections,
// but it can be useful for early debugging.
pool.query('SELECT NOW()')
  .then(res => console.log('PostgreSQL pool initialized successfully.'))
  .catch(err => console.error('Error initializing PostgreSQL pool:', err.message));


// Export the pool so it can be used throughout your application (e.g., in controllers, models)
export { pool };
