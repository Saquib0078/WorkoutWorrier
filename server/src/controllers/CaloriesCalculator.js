const BmiModel = require('../models/BmiModel');
const CalorieModel = require('../models/CaloriesModel');
const UserModel = require('../models/UserModel');

const CountCalories = async (req, res) => {
  try {
    const { userid} = req.body;
    const user=await UserModel.findOne({_id:userid})

    if(!user) return res.status(400).send({status:false,message:"No user found"})
     
   const {gender,age,height,weight,goalweight,goals,activityLevel}=user
    // Calculate basal metabolic rate (BMR)
    let bmr = 0;
    if (gender === 'Male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'Female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    // ["Not Very Active","Lightly Active","Active","Very Active"],

    let activityFactor = 1;
    switch (activityLevel) {
      case 'Not Very Active':
        activityFactor = 1.2;
        break;
      case 'Lightly Active':
        activityFactor = 1.375;
        break;
      case 'Active':
        activityFactor = 1.55;
        break;
      case 'Very Active':
        activityFactor = 1.725;
        break;
      // case 'extraActive':
      //   activityFactor = 1.9;
      //   break;
      default:
        activityFactor = 1.2;
        break;
    }

    // Calculate total daily energy expenditure (TDEE)
    const tdee = bmr * activityFactor;

    // Calculate macro nutrient needs
    const protein = Math.round((weight * 1.6) / 4);
    const fats = Math.round((weight * 0.45) / 9);
    const carbs = Math.round(((tdee - ((protein * 4) + (fats * 9))) / 4));
    
    

    let caloriesData = {};
    switch (goals) {
      case 'Lose weight':
        caloriesData = Math.floor(tdee * 0.8);
        break;
      case 'Maintain weight':
        caloriesData = Math.floor(tdee * 1);
        break;
      case 'Gain weight':
        caloriesData = Math.floor(tdee * 1.2);
        break;
        case 'Gain muscle':
        caloriesData = Math.floor(tdee * 2);
        break;case 'Modify my diet':
        caloriesData = Math.floor(tdee * 1.5);
        break;
      default:
        // If goal is not provided or invalid, default to 'maintain'
        caloriesData = Math.floor(tdee * 1);
        break;
    }

    let newCalorieData = {
  protein,
   fats,
   carbs,
   caloriesData,
   User: user._id
    };
    let createdata=await CalorieModel.create(newCalorieData)
    console.log(createdata)
    const populate=await createdata.populate({path:'User',strictPopulate:false})
     console.log(populate)
    // Return the result
    return res.status(200).send({ status: true, message: 'Success', data: { calories: newCalorieData } });
  } catch (error) { 

    return res.status(500).send({ status: false, message: error.message });
  }
};


const getCalorie= async (req,res)=>{
 
  try {
    const userid=req.params

    const user=await UserModel.findOne({_id:userid})
    if(!user) return res.status(400).send({status:false,message:"No user found"})

  return res.status(200).send({status:true,data:findCaloriedata})  
  } catch (error) {
    return res.status(500).send({status:false,message:error.message})
  }

}

module.exports.CountCalories = CountCalories;
module.exports.getCalorie=getCalorie