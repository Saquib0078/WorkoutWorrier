const express = require('express');
const router = express.Router();
const ExcerciseController=require('../controllers/ExerciseController')
const USerController=require('../controllers/UserController')
const { Authentication, Authorization }=require('../Auth/auth')
const GoalController=(require('../controllers/GoalController'))
const ProgressController=require('../controllers/ProgressController')
const CalorieController=require('../controllers/CaloriesCalculator')


router.post('/exercise',ExcerciseController.createExcercise)
router.get('/exercise',ExcerciseController.getExercisesByQueries)
router.put('/exercise/:id',Authentication,Authorization,ExcerciseController.UpdateExercise)
router.delete('/exercise/:id',Authentication,Authorization,ExcerciseController.deleteExercise)


router.post('/register',USerController.createUser)
router.post('/login',USerController.loginUser)



router.post('/goals',GoalController.CreateGoal)
router.get('/goals/:userid',GoalController.getGoals)
router.put('/goals/:id',GoalController.UpdateGoals)
router.delete('/goals/:id',GoalController.deleteGoal)

router.post('/progress',ProgressController.postProgress)
router.get('/progress/:id',ProgressController.getProgress)
router.put('/progress/:_id',ProgressController.updateProgress)
router.delete('/progress/:_id',ProgressController.deleteProgress)


router.post('/calories',CalorieController.CountCalories)
router.get('/calories/:id',CalorieController.getCalorie)

module.exports = router
