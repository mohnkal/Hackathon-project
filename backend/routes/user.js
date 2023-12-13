import express from "express";
const router = express.Router();

import { signin, signup,searchJob,  getAllJobs, applyJob } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/jobs/:page", getAllJobs);
router.get("/search-job/:job_title", searchJob);
router.post("/apply-job/:id", applyJob);


export default router;