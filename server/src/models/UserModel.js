const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  goals:{
   type:String,
   enum:["Lose weight","Maintain weight","Gain weight","Gain muscle","Modify my diet"],
   required: true
  },
  barriers:{
    type:String,
    enum:["Lack of time","The regimen was too hard to follow","Did not enjoy the food","Difficult to make food choices","Social eating and events","Food cravings","Lack of progress"],
    required: true
  },
  activityLevel:{
    type:Object,
    enum:["Not Very Active","Lightly Active","Active","Very Active"],
    required: true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    enum:["Male","Female"],
    required: true
  },
  country:{
    type:String,
    enum:["India","pakistan","Uk","UAE","USA","Russia"],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  goalweight:{
    type:Number,
    required: true
  },
  terms:{
    type:Boolean,
    default:false
  },
  username:{
type:String,
required:true,
unique:true
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

module.exports = mongoose.model('User', userSchema);
