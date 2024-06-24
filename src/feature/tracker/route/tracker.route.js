import express from "express";

const router = express.Router();
import { createNewTask, getPage } from "../controller/tracker.controller.js";
// Tracker GET Routes

router.get('/',getPage)
router.get('/habits/:id')

// Tracker POST Routes

router.post('/update',)

router.post('/',createNewTask)

export default router;
