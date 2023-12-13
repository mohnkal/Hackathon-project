import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

// Import env variables
dotenv.config();


// Initialize an express app
const app = express();
const PORT = process.env.PORT || 5000;

// Express middleware and other configurations
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



// Use the user routes
app.use("/user", userRouter);

// Get the home page
app.get('/', (req,res) => {
  res.send('APP IS RUNNING')
})


// Mongo URI
const MONGO_URI = process.env.MONGO_URI;


// Conncect the mongo db
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB Atlas:', error.message);
  });

