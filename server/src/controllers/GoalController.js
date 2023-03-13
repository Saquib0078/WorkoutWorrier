const ExerciseModel= require('../models/ExerciseModel')
const UserModel=require('../models/UserModel')
const GoalModel=require('../models/GoalModel');
const WorkoutModel = require('../models/WorkoutModel');

const CreateGoal=async (req,res)=>{
    try {
        const { user_id, exercise_id, target_value } = req.body;
        
        if (!user_id || !exercise_id || !target_value||!workout_id) {
          return res.status(400).json({ status: false, message: 'Missing required fields.' });
        }
    
        // Check if user and exercise exist
        const user = await UserModel.findById(user_id);
        if (!user) {
          return res.status(404).json({ status: false, message: 'User not found.' });
        }
        const workout = await WorkoutModel.findById(workout_id);
        if (!workout) {
          return res.status(404).json({ status: false, message: 'Workout not found.' });
        }
    
        const exercise = await ExerciseModel.findById(exercise_id);
        if (!exercise) {
          return res.status(404).json({ status: false, message: 'Exercise not found.' });
        }
    
        // Create the new goal
        const goal = await GoalModel.create({
          user_id,
          exercise_id,
          target_value
        });
    
        return res.status(201).json({ status: true, data: goal });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: 'Server Error.' });
      }

    }


    const getGoals=async(req,res)=>{
        try {
            const {userid}=req.params
            // find all goals
            console.log(userid)
            const goals = await GoalModel.find({user_id:userid,isDeleted:false}).populate('user_id exercise_id');
           if(goals.length!=0) return res.status(200).send({ status: true, data: goals });
            else return res.status(404).send({ status: false, message:"no goals created" });
          } catch (error) {
            return res.status(500).send({ status: false, message: error.message });
          }
    }

    const UpdateGoals=async(req,res)=>{
        try {
            const { goalId } = req.params;
            const { targetValue } = req.body;
            if (!targetValue) {
              return res.status(400).send({ status: false, message: "Target value is required" });
            }
        
            const goal = await GoalModel.findByIdAndUpdate(goalId, { targetValue }, { new: true });
            if (!goal) {
              return res.status(404).send({ status: false, message: "Goal not found" });
            }
        
            return res.status(200).send({ status: true, data: goal });
          } catch (error) {
            return res.status(500).send({ status: false, message: error.message });
          }
    }

const deleteGoal=async(req,res)=>{
    try {
        const { id } = req.params;
        const goal = await GoalModel.findById(id);
    
        if (!goal) {
          return res.status(404).send({ status: false, message: 'Goal not found' });
        }
    
        await GoalModel.findOneAndUpdate({ _id: id,isDeleted:true });
        return res.status(200).send({ status: true, message: 'Goal deleted successfully' });
      } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
      }  
}

    module.exports.CreateGoal=CreateGoal
    module.exports.getGoals=getGoals
    module.exports.UpdateGoals=UpdateGoals
    module.exports.deleteGoal=deleteGoal