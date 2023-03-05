const mongoose = require('mongoose');

const calorieSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
