const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ExerciseModel = require("../models/ExerciseModel");

const createUser = async (req, res) => {
  try {
    let data = req.body;
    const {
      fname,
      goals,
      barriers,
      activityLevel,
      gender,
      country,
      email,
      password,
      height,
      weight,
      goalweight,
      terms,
      username,
      age,
    } = req.body;
    console.log(req.body);

    let bcryptPass = await bcrypt.hash(password, 10);

    if (
      !fname ||
      !goals ||
      !barriers ||
      !activityLevel ||
      !gender ||
      !country ||
      !email ||
      !password ||
      !height ||
      !weight ||
      !goalweight
    ) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }
    if (!/^[a-zA-Z\s]*$/.test(fname)) {
      return res.status(400).json({
        message: "First name should only contain letters and spaces.",
      });
    }

    // let heightcm=height/30.48+ (height * 2.54);

    let bmr = 0;
    if (gender === "Male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "Female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    console.log(bmr);

    let activityFactor = 1;
    switch (activityLevel) {
      case "Not Very Active":
        activityFactor = 1.2;
        break;
      case "Lightly Active":
        activityFactor = 1.375;
        break;
      case "Active":
        activityFactor = 1.55;
        break;
      case "Very Active":
        activityFactor = 1.725;
        break;
      default:
        activityFactor = 1.2;
        break;
    }

    // Calculate total daily energy expenditure (TDEE)
    const tdee = Math.round(bmr * activityFactor);

    // Calculate macro nutrient needs in grams
    let protein = Math.round(weight * 1.6);
    let fats = Math.round(weight * 0.45);
    let carbs = Math.round((tdee - (protein * 4 + fats * 9)) / 4);

    // Convert calories to grams
    protein = Math.round(protein);
    fats = Math.round(fats);
    carbs = Math.round(carbs);

    let caloriesData = 0;
    switch (goals) {
      case "Lose weight":
        caloriesData = Math.floor(tdee * 0.8);
        break;
      case "Maintain weight":
        caloriesData = Math.floor(tdee * 1);
        break;
      case "Gain weight":
        caloriesData = Math.floor(tdee * 1.1);
        break;
      case "Gain muscle":
        caloriesData = Math.floor(tdee * 1.2);
        break;
      case "Modify my diet":
        caloriesData = Math.floor(tdee * 1.05);
        break;
      default:
        // If goal is not provided or invalid, default to 'maintain'
        caloriesData = Math.floor(tdee * 1);
        break;
    }

    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(password)) {
    //   return res.status(400).json({ message: 'Password must be at least 8 characters long and contain at least one letter and one number.' });
    // }
    const user = {
      fname,
      goals,
      barriers,
      activityLevel,
      gender,
      country,
      email,
      password: bcryptPass,
      height,
      weight,
      goalweight,
      terms,
      username,
      age,
      protein,
      fats,
      carbs,
      caloriesData,
    };

    let create = await UserModel.create(user);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: create });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const loginUser = async function (req, res) {
  try {
    const body = req.body;
    if (Object.keys(body).length == 0)
      return res
        .status(400)
        .send({ status: false, message: "Please fill data in body" });

    const { email, password } = body;

    if (!email)
      return res
        .status(400)
        .send({ status: false, message: "Email is mandatory" });

    if (!password)
      return res
        .status(400)
        .send({ status: false, message: "Please provide the password!!" });

    let checkUser = await UserModel.findOne({ email: email });

    if (!checkUser) {
      return res.status(401).send({ status: false, message: "User not found" });
    }
    let checkPassword = await bcrypt.compare(password, checkUser.password);

    if (!checkPassword)
      return res
        .status(400)
        .send({ status: false, message: "Enter correct Password" });

    let createToken = jwt.sign(
      {
        userId: checkUser._id.toString(),
      },
      "user-secret-key",
      { expiresIn: "48 hr" }
    );

    return res.status(201).send({
      status: true,
      message: "User login successfull",
      data: { userId: checkUser._id, token: createToken },
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const userid = req.params;
    const findUser = await UserModel.findOne({ _id: userid });
    if (!findUser)
      return res.status(400).send({ status: false, message: "No user Found" });

    return res.status(200).send({ status: true, data: findUser });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const AddExercise = async (req, res) => {
  try {
    const findEx = await ExerciseModel.findById(req.body.AddExercises);
    if (!findEx)
      return res
        .status(400)
        .send({ status: false, message: "no exercise found" });
    // console.log(findEx);
    const findUSer = await UserModel.findOne({ id: req.body.userId }).populate({
      path: "AddExercises",
      strictPopulate: false,
    });
    // console.log(findUSer);
    if (!findUSer)
      return res.status(400).send({ status: false, message: "no user found" });

    const exerciseIds = findUSer.AddExercises.map((exercise) =>
      exercise._id.toString()
    ); // get an array of exercise ids as strings
    if (exerciseIds.includes(findEx._id.toString())) {
      // check if exercise is already in array
      return res
        .status(400)
        .send({ status: false, message: "Exercise already added" });
    }

    findUSer.AddExercises.push(findEx);

    await findUSer.save();
    return res.status(200).send({ status: true, data: findUSer });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getUserExercise = async (req, res) => {
  try {
    const findEx = await UserModel.findById(req.params.userId).populate({
      path: "AddExercises",
      strictPopulate: false,
      select: { _id: 0 },
    });
    if (!findEx)
      return res.status(400).send({ status: false, message: "no user found" });

    return res.status(200).send({ status: true, data: findEx });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUsers = getUsers;
module.exports.AddExercise = AddExercise;
module.exports.getUserExercise = getUserExercise;
