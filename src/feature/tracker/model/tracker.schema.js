import mongoose from "mongoose";

export const HabitSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  week: [
    {
      day: { type: String, required: true },
      status: { type: String, enum: ['None', 'Done', 'Not done'], default: 'None' }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

