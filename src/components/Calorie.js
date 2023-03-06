import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Calorie.css";

const Calorie = () => {
  const [data, setData] = useState({});
  const { _id } = useParams();
  // console.log(_id);
  const navigate = useNavigate();

  useEffect(() => {
   

    fetchCalorieDetails();
  }, [_id]);

  
   const fetchCalorieDetails = async (req, res) => {
      try {

        const response = await axios.get(
          `http://localhost:3000/userProfile/${_id}`
        );
        // const data = await response.json();
        // console.log(userId);
        // console.log(response.data.data)
         setData(response.data.data);
        console.log(response.data.data._id);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="calories">
      <div className="navbar">Calories</div>

      <div className="calories__maindiv">
        <h1 className="calories__heading">Congratulations!</h1>
        <p>Your daily net calorie goal is:</p>

        <h1 className="calories__count">
          <strong>{data.caloriesData}</strong>
          <br />
          <strong>{data.protein}</strong>
          <br />
          <strong>{data.fats}</strong>
        </h1>
        <p className="calories__count-subheading">calories</p>

        <button onClick={()=> navigate('/')} >Explore WorkoutWorriers</button>
      </div>
    </div>
  );
};

export default Calorie;
