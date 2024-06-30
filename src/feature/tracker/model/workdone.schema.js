import mongoose from "mongoose";

export const workSchema = new mongoose.Schema({
  activityDetails: [{
    activitiyId: { type: mongoose.Types.ObjectId, ref: "Tasks", required: true },
    activityName: { type: String, required: true }
  }],
  MonthandDay: { type: Date, required: true },
});

// Adding a compound index to avoid duplicates
workSchema.index({ "activityDetails.activitiyId": 1, MonthandDay: 1 }, { unique: true });
