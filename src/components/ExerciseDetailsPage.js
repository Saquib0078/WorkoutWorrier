import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cookie from "cookiejs";
import './ExerciseDetailsPage.css'
const ExerciseDetailsPage = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const fetchExercise = async () => {
    const token=cookie.get('token')

    const { data } = await axios.get(`http://localhost:3000/exercise/${_id}`,{headers: {
        'Content-Type': 'application/json',
        'Authorization':token
  }
      });
    setData(data.data);
  };
useEffect(()=>{
    fetchExercise()
}
,[]
)

  return <div className="MainParent">
  <img
    src={data.image}
  />
  <div className="detailsPage">
    <div className="headingDiv">
      <h1>{data.name}</h1>
      <p>{data.type}</p>
      <p>{data.equipment}</p>
      <p>{data.difficulty}</p>
    </div>
    <div className="instDiv">
      <p>{data.instructions}</p>
    </div>
  </div>
</div>
};

export default ExerciseDetailsPage;
