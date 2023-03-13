const express = require('express');
const router = express.Router();
const ExcerciseController=require('../controllers/ExerciseController')
const USerController=require('../controllers/UserController')
const { Authentication, Authorization }=require('../Auth/auth')
const GoalController=(require('../controllers/GoalController'))
const ProgressController=require('../controllers/ProgressController')
const CalorieController=require('../controllers/CaloriesCalculator')
const WorkoutController=require('../controllers/WorkOutController')

router.post('/exercise',ExcerciseController.createExcercise)
router.get('/exercise/:_id',Authentication,ExcerciseController.getExrecisebyId)

router.get('/exercise',ExcerciseController.getExercisesByQueries)
router.put('/exercise',ExcerciseController.UpdateExercise)
router.delete('/exercise/:id',Authentication,Authorization,ExcerciseController.deleteExercise)


router.post('/register',USerController.createUser)
router.post('/login',USerController.loginUser)
router.get('/userProfile/:_id',USerController.getUsers)
router.put('/AddExercises',USerController.AddExercise)
router.get('/getExercises/:userId',USerController.getUserExercise)

router.post('/goals',GoalController.CreateGoal)
router.get('/goals/:userid',GoalController.getGoals)
router.put('/goals/:id',GoalController.UpdateGoals)
router.delete('/goals/:id',GoalController.deleteGoal)

router.post('/progress',ProgressController.postProgress)
router.get('/progress/:id',ProgressController.getProgress)
router.put('/progress/:_id',ProgressController.updateProgress)
router.delete('/progress/:_id',ProgressController.deleteProgress)

//req.params.userid
router.put('/workout',WorkoutController.createWorkout)
router.get('/workout/:user_id',WorkoutController.getWorkout)
router.post('/users/:userId/workout/:workoutId',WorkoutController.addExercisestoWorkouts)

router.post('/calories',CalorieController.CountCalories)
// router.get('/calories/:userId',CalorieController.getCalorie)

module.exports = router


