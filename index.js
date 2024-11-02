const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const routes = require('./Routes/apiRoutes');

// Initialize SQLite database (from db.js)
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

// CORS options
const corsOptions = {
  origin: 'https://h2opolostatistics.onrender.com', // Adjust if deploying to a different origin
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Use API routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
