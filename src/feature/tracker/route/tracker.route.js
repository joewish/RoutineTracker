import express from "express";

const router = express.Router();
import { createNewTask, getPage ,getWeeklyTrackerPage } from "../controller/tracker.controller.js";
// Tracker GET Routes

router.get('/',getPage)
router.get('/habits/:id')
router.get('/weeklytracker',getWeeklyTrackerPage)

// Tracker POST Routes

router.post('/update',)

router.post('/',createNewTask,getPage)

export default router;
