const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  activityLevel: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  tdee: {
    type: Number,
  },
  protein: {
    type: Number,
  },
  carbs: {
    type: Number,
  },
  fats: {
    type: Number,
    
  },
  caloriesData:{
type:Number
  },
  isDeleted:{
    type:Boolean,
    default:false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
 
});



module.exports = mongoose.model('CalorieIntake', calorieSchema);
