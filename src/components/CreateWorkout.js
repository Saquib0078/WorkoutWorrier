import React, { useState } from "react";
import "./CreateWorkout.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import cookie from "cookiejs";
function CreateWorkout() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userId = cookie.get("userId");
  const navigate = useNavigate();
  const handleContinueClick = () => {
    setIsClicked(true);
    setIsLoading(true);
    axios
      .put("http://localhost:3000/workout", {
        workoutType: document.getElementById("workout-type").value,
        difficulty: document.getElementById("difficulty").value,
        muscleGroup: document.getElementById("muscle-group").value,
        duration: document.getElementById("duration").value,
        userId: userId,
      })
      .then((response) => {
        // console.log(response.data);
        // const workoutId=response.data._id
        cookie.set("workoutId", response.data);
        // console.log(workoutId)
        setTimeout(() => setIsLoading(false), 2000); // display loading for 2 seconds
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleAddWorkout = () => {
    setIsLoading(true);
    navigate("/home");
  };

  return (
    <div className="parent">
      <div className="title">
        <h1>Add Workout</h1>
        {!isClicked && (
          <div className="form-container">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="workout-type">Workout Type</label>
                <select id="workout-type">
                  <option value="cardio">Cardio</option>
                  <option value="powerlifting">Powerlifting</option>
                  <option value="strength">Strength</option>
                  <option value="stretching">Stretching</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
                <select id="difficulty">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group" style={{ marginLeft: "1.5rem" }}>
                <label htmlFor="muscle-group">Muscle Group</label>
                <select id="muscle-group">
                  <option value="abdominals">Abdominals</option>
                  <option value="abductors">Abductors</option>
                  <option value="biceps">Biceps</option>
                  <option value="calves">Calves</option>
                  <option value="cardio">Cardio</option>
                  <option value="chest">Chest</option>
                  <option value="forearms">Forearms</option>
                  <option value="glutes">Glutes</option>
                  <option value="hamstrings">Hamstrings</option>
                  <option value="lats">Lats</option>
                  <option value="lower-back">Lower Back</option>
                  <option value="middle-back">Middle Back</option>
                  <option value="quadriceps">Quadriceps</option>
                  <option value="shoulders">Shoulders</option>
                  <option value="traps">Traps</option>
                  <option value="triceps">Triceps</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (minutes)</label>
                <input
                  type="number"
                  id="duration"
                  placeholder="Enter duration"
                  min="1"
                  max="120"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <button className="add-workout-btn" onClick={handleContinueClick}>
                {isLoading ? (
                  <Bars color="#fff" height={16} width={16} />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>
        )}
        {isClicked && (
          <div className="add-workout-btn-container">
            <button className="add-workout-btn" onClick={handleAddWorkout}>
              Add Workout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateWorkout;
