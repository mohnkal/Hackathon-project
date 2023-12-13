import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = "test";

import User from "../models/user.js";
import Job from "../models/jobs.js";
import Applied from "../models/applied.js";

// Initialize a react router
const router = express.Router();

// A function to get the jobs according to page, to the user
export const getAllJobs = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await PostMessage.countDocuments({});
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// A function to get all the jobs according to the title
export const searchJob = async (req, res) => {
    // Get the job title
    const {job_title} = req.query;

    try{
    // Use a regular expression to perform a case-insensitive search for jobs with similar titles
    const similarJobs = await Job.find({ title: { $regex: new RegExp(job_title, 'i') } });

    res.status(200).json(similarJobs);
  } catch (error) {
    console.error('Error searching for similar jobs:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  
}}

// A function to apply for the jobs
export const applyJob = async (req, res) => {
  // Get all the details of application
  const {
    applied_to_id,
    user_id,
    user_quoted_amount,
    user_quoted_time,
    user_quoted_description,
    user_applied_id,
  } = req.query;

  try {
    // Create a model with the data
    const newApplication = new Job({
      applied_to_id,
      user_id,
      user_quoted_amount,
      user_quoted_time,
      user_quoted_description,
      user_applied_id,
    });

    // Saved the job to the database
    const status = newApplication.save();

    // Send a response to the user
    res.json(status);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Signin :
export const signin = async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const oldUser = await User.findOne({ user_email: user_email });

    console.log(user_email);

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      user_password,
      oldUser.user_password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: oldUser.user_email, id: oldUser._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Signup
export const signup = async (req, res) => {
  const { user_email, user_password, firstName, lastName } = req.body;

  try {
    // Check if the user already exists
    const oldUser = await User.findOne({ user_email: user_email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(user_password, 12);

    // Create a new user using the User model
    const result = await User.create({
      user_email: user_email,
      user_password: hashedPassword,
      user_name: `${firstName} ${lastName}`,
    });

    // Generate a JWT token
    const token = jwt.sign({ email: result.user_email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    // Respond with the new user and token
    res.status(201).json({ result, token });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


// A function to get all the jobs applied by the user
export const getAllApplied = async(req, res) =>{
    // Get the id of the user who is logged in
    const {user_id} = req.query;

    try {    
        // Find all records where the user_id matches the provided userId
        const appliedJobs = await Applied.find({ user_id: user_id });
    

        res.status(200).json(appliedJobs);
      } catch (error) {
        console.error('Error retrieving applied jobs:', error.message);
        res.status(500).json({ error: 'Internal server error' });
      }
}


