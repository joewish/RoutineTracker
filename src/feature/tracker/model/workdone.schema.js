import mongoose from "mongoose";

export const workSchema = new mongoose.Schema({
    activityDetails: [{
    activitiyId:{type : mongoose.Types.ObjectId,ref:"Tasks"},
    activityName:{type:String}
}],
  MonthandDay: { type: Date, required: true },
});
