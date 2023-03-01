const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  exercise_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise',
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  calories_burned: {
    type: Number
  },
  date: {
    type: Date,
    required: true
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
