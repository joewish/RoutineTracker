import mongoose from "mongoose";
import { HabitSchema } from "./tracker.schema.js";
const taskModel = mongoose.model('Task',HabitSchema);

export const registerNewTask = async(data)=>{
  const tasks = new taskModel(data)
    return await tasks.save();
}
export const getActivityByStatus = async(taskStatus,data)=>{
  if(taskStatus==""){
    try{
      const result  = await taskModel.find({})
      return result
    }catch(err){
      return err
    }
  }
  else{
    try{
      const result = await taskModel.find({name:data.name})
      return 
    }catch(err){

    }
  }
  
}
// // Utility function to get the last 7 days
// const getLast7Days = () => {
//   const days = [];
//   for (let i = 0; i < 7; i++) {
//     const date = new Date();
//     date.setDate(date.getDate() - i);
//     days.push(date.toLocaleDateString('en-US', { weekday: 'long' }));
//   }
//   return days.reverse();
// };

// // Render the main page
//  async (req, res) => {
//   const habits = await Habit.find({});
//   res.render('index', { habits });
// };

// // Add a new habit
// export const createNewTask = async (req, res,next) => {
//   const { name } = req.body;
//   const days = getLast7Days();
//   const week = days.map(day => ({ day }));
//   const newHabit = new Habit({ name, week });
//   await newHabit.save();
//   res.redirect('/');
// };

// // Update habit status
// router.post('/update', async (req, res) => {
//   const { habitId, day, status } = req.body;
//   await Habit.updateOne(
//     { _id: habitId, 'week.day': day },
//     { $set: { 'week.$.status': status } }
//   );
//   res.redirect('/');
// });

// // Render the habits view
// router.get('/habits/:id', async (req, res) => {
//   const habit = await Habit.findById(req.params.id);
//   res.render('habits', { habit });
// });

// module.exports = router;
