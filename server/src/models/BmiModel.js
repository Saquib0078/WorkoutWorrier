const mongoose=require('mongoose')


const bmiSchema = new mongoose.Schema({
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
    bmi: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('BmiModel', bmiSchema);
  