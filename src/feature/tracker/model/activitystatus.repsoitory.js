import mongoose, { mongo } from "mongoose";
import { workSchema } from "./workdone.schema.js";

export const workDoneModel = mongoose.model("workdone", workSchema);

export const addWorkDone = async (Id, data) => {
  try {
    const { name, status, dayMonth } = data;
    // Convert dayMonth to Date object
    const currentYear = new Date().getFullYear();
    const [month, day] = dayMonth.match(/([A-Za-z]+)(\d+)/).slice(1, 3);
    const monthIndex = new Date(`${month} 1`).getMonth(); // get month index
    const date = new Date(currentYear, monthIndex, parseInt(day)+1); 
    const workdone = new workDoneModel({
      activityDetails: [{ activitiyId: new mongoose.Types.ObjectId(Id), activityName: name }],
      MonthandDay: date,
    });
    const savedWorkdone = await workdone.save();
    return savedWorkdone;
  } catch (e) {
    console.log("Error:", e);
    throw new Error(e);
  }
};

export const deleteWordDoneEntry = async (ID, dayMonth) => {
  console.log("inside");
  try {
    const currentYear = new Date().getFullYear();
    const [month, day] = dayMonth.match(/([A-Za-z]+)(\d+)/).slice(1, 3);
    const monthIndex = new Date(`${month} 1`).getMonth(); // get month index
    const date = new Date(currentYear, monthIndex, day);
    const result = await workDoneModel.updateOne(
      { MonthandDay: date },
      {
        $pull: {
          activityDetails: { activityId: new mongoose.Types.ObjectId(ID) },
        },
      }
    );

    // Optionally, remove the document if activityDetails is empty after the pull operation
    await workDoneModel.deleteOne({
      MonthandDay: date,
      activityDetails: { $size: 0 },
    });
    console.log(result)
    return result;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const workDoneData = async (startOfWeek, endOfWeek) => {
  try {
    const data = await workDoneModel
      .find({
        MonthandDay: {
          $gte: startOfWeek,
          $lte: endOfWeek,
        },
      })
      .lean();
    console.log(data);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
