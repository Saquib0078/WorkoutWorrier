const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
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

    workout_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Workout",
      required:true
    },


  target_value: {
    type: Number,
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

module.exports = mongoose.model('Goal', goalSchema);
