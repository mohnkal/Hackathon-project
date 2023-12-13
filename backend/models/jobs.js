// models/job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_title: { type: String, required: true },
  job_description: { type: String, required: true },
  job_amount: { type: Number, required: true },
  job_time: { type: String, required: true },
  // Add other fields as needed
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
