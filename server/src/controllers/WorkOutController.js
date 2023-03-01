const WorkoutModel=require('../models/WorkoutModel')

const createWorkout=async (req,res)=>{
    try {
        // Calculate calories burned using Metabolic Equivalent of Task (MET) formula
        const exercise = await Exercise.findById(req.body.exercise_id);
        const met = 3.5; // MET constant
        const calories_burned = Math.round(met * exercise.metabolic_equivalent * req.body.duration);
    
        // Create new workout object with validated data
        const workout = new Workout({
          user_id: req.body.user_id,
          exercise_id: req.body.exercise_id,
          duration: req.body.duration,
          calories_burned: calories_burned,
          date: req.body.date
        });
    
        // Save new workout object to database
        await workout.save();
    
        // Return success response
        return res.status(201).json(workout);
    
      } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
      }

}


const getExercise=async (req, res) => {
    try {
      const workout = await Workout.findById(req.params.id);
      if (!workout) {
        return res.status(404).json({ message: 'Workout not found' });
      }
      res.json(workout);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server error' });
    }
  }

  