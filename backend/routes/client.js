import express from "express";
const router = express.Router();

import { postJob, clientDashboard } from "../controllers/client.js";

router.post("/client-dashboard", clientDashboard);
router.post("/post-job", postJob);
// router.post("/post-job", postJob);
// router.post('/signin-user', )

export default router;