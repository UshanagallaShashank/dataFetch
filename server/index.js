const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', 
}));

// Create a PostgreSQL client
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Connect to the PostgreSQL database
client.connect();

// Parse JSON requests
app.use(express.json());

// Handle pre-flight CORS requests for the /api/customers endpoint
app.options('/api/customers', cors());

// Define a simple route for the root path
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define the /api/customers endpoint for fetching customer data
app.get('/api/customers', async (req, res) => {
  // Extract search and sortBy parameters from query string
  const { search, sortBy } = req.query;
  // Build the base query
  let query = 'SELECT * FROM customers ';

  // If search parameter is provided, filter results by customer_name or location
  if (search) {
    query += ` WHERE customer_name ILIKE '%${search}%' OR location ILIKE '%${search}%'`;
  }

  // If sortBy parameter is provided, order results by created_at (date) or created_at::time (time)
  if (sortBy) {
    query += ` ORDER BY ${sortBy === 'date' ? 'created_at' : 'created_at::time'}`;
  }

  // Execute the query and send the results as JSON
  const result = await client.query(query);
  res.json(result.rows);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
