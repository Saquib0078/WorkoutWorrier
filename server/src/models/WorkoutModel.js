const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  exercises: 
   [{ type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true}]
  ,
  duration: {
    type: Number,
    required: true
  },
  WorkouType:{
type:String,
enum:["cardio","powerlifting","strength","stretching"]

  },
  difficultyofWorkout:{
type:String,
enum:["beginner","intermediate","advanced"]
  },
  musclestoTrain:{
type:String,
enum:["abdominals","adductors","biceps","calves","forearms","chest","hamstrings","glutes",
"lats","lower_back","middle_back","neck","quadriceps","traps","triceps"]
  },
  // calories_burned: {
  //   type: Number
  // },
  date: {
    type: Date,
    default:Date.now
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
});

module.exports = mongoose.model('Workout', workoutSchema);
