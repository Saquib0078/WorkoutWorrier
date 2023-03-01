const User = require('../models/UserModel');
const BmiModel = require('../models/BmiModel');
const CalorieModel = require('../models/CaloriesModel');

const CountCalories = async (req, res) => {
  try {
    const { height, weight, age, gender, activityLevel, goal } = req.body;

    // Calculate basal metabolic rate (BMR)
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Adjust BMR based on activity level
    let activityFactor = 1;
    switch (activityLevel) {
      case 'sedentary':
        activityFactor = 1.2;
        break;
      case 'lightlyActive':
        activityFactor = 1.375;
        break;
      case 'moderatelyActive':
        activityFactor = 1.55;
        break;
      case 'veryActive':
        activityFactor = 1.725;
        break;
      case 'extraActive':
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
        break;
    }

    // Calculate total daily energy expenditure (TDEE)
    const tdee = bmr * activityFactor;

    // Calculate macro nutrient needs
    const protein = Math.round(weight * 1.6);
    const fat = Math.round(weight * 0.45);
    const carbs = Math.round((tdee - ((protein * 4) + (fat * 9))) / 4);

    let caloriesData = {};
    switch (goal) {
      case 'lose':
        caloriesData = Math.floor(tdee * 0.8);
        break;
      case 'maintain':
        caloriesData = Math.floor(tdee * 1);
        break;
      case 'gain':
        caloriesData = Math.floor(tdee * 1.2);
        break;
      default:
        // If goal is not provided or invalid, default to 'maintain'
        caloriesData = Math.floor(tdee * 1);
        break;
    }

    let newCalorieData = {
     height,
   weight,
    age,
  gender,
    activityLevel,
   goal,
  protein,
 fat,
   carbs,
   caloriesData
    };
     let createdata=await CalorieModel.create(newCalorieData)
    // Return the result
    return res.status(200).send({ status: true, message: 'Success', data: { calories: createdata } });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};


module.exports.CountCalories = CountCalories;
