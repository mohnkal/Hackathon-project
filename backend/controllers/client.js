import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';
import Job from '../models/jobs.js';
import Applied from '../models/applied.js';


// Initialize a react router
const router = express.Router();

// Post jobs from client side
export const postJob = async (req, res) => {

    try{
        // Get the details from the request
    const {job_title, job_description, job_amount, job_time} = req.query;

    // Create a job object
    const newJob = Job({job_title, job_description, job_amount, job_time})

    // Save the job to the database
    const status = newJob.save()

    // send a response
    res.status(201).json(status);

    }
    catch(error){
        res.status(500).json({message: "Internal server error"});
    }
    
}

// A function which can delete the job posted
export const deleteJob = async (req, res) => {
    const { id } = req.params;

    // Check if the objejct with the ID exists
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // Wait till the job is deleted
    await Job.findByIdAndRemove(id);

    // Send the success status
    res.json({ message: "Post deleted successfully." });
}


// A function which gives all the jobs posted by the client
const getAllClientJob = async (req, res) => {
    // Get the client ID
    const {client_id} = req.query;

    try{
        // Check if the objejct with the ID exists
        if (!mongoose.Types.ObjectId.isValid(client_id)) return res.status(404).send(`No post with id: ${id}`);

        // Wait till the job is deleted
        await Job.find({"client_id":client_id});

        // Send the success status
        res.status(201).json({ message: "Job fetched successfully." });


    }catch(error){
        res.json("Internal Server Error")
    }
}


// A function to get all the applied profiles for a given job
// export const getAllJobProfiles = async (req, res) => {
//     // 
// }









export default router;

