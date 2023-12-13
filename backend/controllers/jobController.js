// // controllers/jobController.js
// const Job = require('../models/job');

// const JobController = {
//     createJob: async (req, res) => {
//         try {
//             const { title, description, amount, time } = req.body;

//             // Create a new job
//             const newJob = new Job({ title, description, amount, time });

//             // Save the job to the database
//             await newJob.save();

//             res.status(201).json({ message: 'Job created successfully', job: newJob });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     },

//     getAllJobs: async (req, res) => {
//         try {
//             // Get all jobs from the database
//             const jobs = await Job.find();

//             res.status(200).json(jobs);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     },

//     getJobById: async (req, res) => {
//         try {
//             const jobId = req.params.jobId;

//             // Find the job by ID
//             const job = await Job.findById(jobId);

//             if (!job) {
//                 return res.status(404).json({ message: 'Job not found' });
//             }

//             res.status(200).json(job);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Internal Server Error' });
//         }
//     },

//     // Implement other CRUD operations as needed
// };

// module.exports = JobController;
