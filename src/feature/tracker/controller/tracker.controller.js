import { registerNewTask } from "../model/tracker.repository.js";
export const createNewTask = async (req, res,next) => {
  try{
    console.log(req.body);
    const isTaskCreated = await registerNewTask(req.body)
    res.status(200).send({message:isTaskCreated})
  }catch(err){
    res.status(500).send({message:err.message})
  }
}

export const getPage = async (req, res,next)=> {
  try{
    res.render("template")
    //res.render("error")
  }catch(err){
    //res.render("error")

  }
}
export const getAllDoneActivities = async (req, res, next)=>{
  try{

  }catch(err){

  }
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
