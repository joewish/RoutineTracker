import { registerNewTask, getActivityByStatus } from "../model/tracker.repository.js";
export const createNewTask = async (req, res,next) => {
  try{
    const isTaskCreated = await registerNewTask(req.body)
    res.status(200).send({message:isTaskCreated})
  }catch(err){
    if(err.code===11000){
      res.status(500).send({message:"habbit already exists"})
      return
    }
    res.status(500).send({message:err.message})
  }
  next()
}

export const getPage = async (req, res,next)=> {
  try{
    await res.status(200).render("template", {tasks:await getActivityByStatus("",req.data)})
  }catch(err){
    res.render("error")
  }
}
export const getAllActivities = async (req, res, next)=>{
  try{
    const result = await getActivityByStatus(tasks,req.data)
    return result
  }catch(err){
    return err.message
  }
}
export const getWeeklyTrackerPage = async (req, res, next)=>{
  try{
    const weeks = getWeekDates()
    res.render("weeklytracker",{tasks:await getActivityByStatus("",req.data),weekData:weeks})
  }catch(err){
    res.render("error")
  }
}


function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday - Saturday : 0 - 6
  const weekDates = [];

  // Calculate the start of the week (Sunday)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek);

  // Populate the array with dates of the current week
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWeek);
    currentDate.setDate(startOfWeek.getDate() + i);
    weekDates.push({
      day: currentDate.getDate(),
      weekDay: currentDate.toLocaleDateString('en-US', { weekday: 'long' })
    });
  }

  return {
    month: today.toLocaleString('en-US', { month: 'long' }),
    dates: weekDates
  };
}




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
