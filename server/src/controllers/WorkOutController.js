const WorkoutModel = require("../models/WorkoutModel");
const UserModel = require("../models/UserModel");
const ExerciseModel = require("../models/ExerciseModel");
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

const createWorkout = async (req, res) => {
  try {
    data = req.body;
    const {
      date,
      musclestoTrain,
      difficultyofWorkout,
      WorkouType,
      duration,
      exercises,
      userId,
    } = req.body;

    // console.log(exercises, user_id);
    const findUSer = await UserModel.findById(userId).populate({
      path: "userId",
      strictPopulate: false,
    });
    const a = mongoose.Types.ObjectId.isValid(userId);
    console.log(a);

    // console.log(data.user_id);
    if (!findUSer)
      return res.status(400).send({ status: false, message: "no User found" });
    // Calculate the calories burned using the provided parameters
    // const findex = await ExerciseModel.findById(exercises).populate({
    //   path: "exercises",
    //   strictPopulate: false,
    // });
    // // console.log(findex);
    // if (!findex)
    //   return res
    //     .status(400)
    //     .send({ status: false, message: "no Exercises found" });

    const metValues = {
      abdominals: 6.0,
      adductors: 4.0,
      biceps: 4.0,
      calves: 8.0,
      forearms: 4.0,
      chest: 4.5,
      hamstrings: 4.0,
      glutes: 5.0,
      lats: 6.0,
      lower_back: 4.0,
      middle_back: 4.0,
      neck: 2.0,
      quadriceps: 8.0,
      traps: 5.0,
      triceps: 5.0,
    };

    let met = metValues[findUSer.activityLevel] || 4.0;

    switch (findUSer.gender) {
      case "male":
        met *= 1.0;
        break;
      case "female":
        met *= 0.9;
        break;
      default:
        met *= 0.95;
    }
    switch (findUSer.activityLevel) {
      case "Not Very Active":
        met *= 0.7;
        break;
      case "Lightly Active":
        met *= 1.0;
        break;
      case "Active":
        met *= 1.1;
        break;
      case "Very Active":
        met *= 1.3;
        break;
      default:
        met *= 1.0;
    }

    if (findUSer.age < 18) {
      met *= 1.1;
    }

    const weight_kg = findUSer.weight * 0.453592;

    const calories_burned = met * weight_kg * (data.duration / 60);

    // Create a new workout object and add it to the workouts array
    const workout = {
      // exercises: [data.exercises],
      userId: data.userId,
      type: data.WorkouType,
      duration: data.duration,
      caloriesBurned: calories_burned.toFixed(2),
    };
    // console.log(findUSer.workouts)
    // console.log(workout);

    const create = await (
      await WorkoutModel.create(workout)
    ).populate({
      path: "Workout",
      strictPopulate: false,
    });
    // console.log(workout);
    // findUSer.workouts.push({
    //   workout_id: create._id,
    //   exercises: [data.exercises],
    // });

    console.log(create._id);
    // console.log(findUSer.workouts);
    findUSer.workouts.push(create._id);
    // findUSer.workouts.exercises.push(data.exercises)
    // Find the index of the newly added workout in the workouts array
    // const workoutIndex = findUSer.workouts.findIndex(
    //   (w) => w.workout_id === create._id
    // );
    // // Push the exercise ID into the exercises array of the corresponding workout
    // findUSer.workouts[workoutIndex].exercises.push(data.exercises);
    await findUSer.save();

    // return res.json(findUSer);
    return res.json(create._id);
    // return res.status(201).json({ message: 'Workout added successfully!', create });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getWorkout = async (req, res) => {
  try {
    const findEx = await UserModel.findById(req.params.userId).populate({
      path: "workouts AddExercises",
      strictPopulate: false,
      select: { _id: 0 },
    });
    console.log(req.params.user_id);
    if (!findEx)
      return res.status(400).send({ status: false, message: "no user found" });

    return res.status(200).send({ status: true, data: findEx });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const addExercisestoWorkouts = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId).populate({
      path: "workouts",
      strictPopulate: false,
    });
    if (!user.workouts || !Array.isArray(user.workouts)) {
      return res.status(404).json({ error: "Workouts not found" });
    }

    const workout = user.workouts.find(
      (w) => w._id.toString() === req.params.workoutId
    );
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    console.log(workout);
    const exercisesToAdd = req.body.exercises;

    for (let i = 0; i < exercisesToAdd.length; i++) {
      const exerciseId = exercisesToAdd[i];

      if (!workout.exercises.includes(exerciseId)) {
        workout.exercises.push(exerciseId);
      }
    }

    await user.save();
    const createpush=await (await WorkoutModel.create(workout)).populate({
      path:'exercises',
      strictPopulate:false
    })
    return res.json(createpush.exercises);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports.createWorkout = createWorkout;
module.exports.getWorkout = getWorkout;
module.exports.addExercisestoWorkouts = addExercisestoWorkouts;
