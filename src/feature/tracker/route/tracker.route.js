import express from "express";

const router = express.Router();
import { createNewTask, getActivityIdByName, getPage ,getWeeklyTrackerPage,activitycreator, toggleActivityStatus} from "../controller/tracker.controller.js";
// Tracker GET Routes

router.get('/',getPage)
router.get('/habits/:id')
router.get('/weeklytracker',getWeeklyTrackerPage)
router.get('/getactivityId',getActivityIdByName)

// Tracker POST Routes

router.post('/update',)

router.post('/',createNewTask,getPage)
router.post('/addTaskStatus',activitycreator,getWeeklyTrackerPage)
router.post('/toggleActivityStatus',toggleActivityStatus)

export default router;
