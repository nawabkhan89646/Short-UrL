import express from 'express';
import cors from 'cors';
import routes from './Routes/formRoutes.js';
import dotenv from 'dotenv';
import connectDB from './Config/connectDatabase.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to database
console.log("Attempting to connect to the database...");
connectDB();

console.log('Backend is running');
