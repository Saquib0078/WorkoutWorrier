import Cookies from "cookiejs";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ExerciseCard.css";
import ExerciseCard from "./ExerciseCard";
import { toast } from "react-toastify";
import cookie from "cookiejs";

const Home = () => {
  const [savedExercise, setSavedExercise] = useState([]);

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = Cookies.get("token");
  if (!token) navigate("/login");

  // const addExercise = async (AddExercises) => {
  //   try {
  //     const userId = Cookies.get("userId");

  //     console.log(userId + "user");

  //     const { data } = await axios.put("http://localhost:3000/AddExercises", {
  //       AddExercises,
  //       userId,
  //     });
  //     console.log(AddExercises);
  //     setSavedExercise(data.data);
  //     console.log(data);
  //     console.log("add");
  //   } catch (error) {
  //     toast.warn(error.response.data.message, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //     console.log(error.response.data.message);
  //   }
  // };
  let exercideIDArr =JSON.parse(localStorage.getItem("exArr")) ||  [];

  const addToCookie = async (id) => {
    try {

      // const addyFromCokki = cookie.get(JSON.parse())
      exercideIDArr.push(id);

      localStorage.setItem("exArr", JSON.stringify(exercideIDArr));
      console.log(id);
      // console.log(AddExercises);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const isExercisesaved = (id) => savedExercise.includes(id);

  // const handleClick = (id) => {
  //   addExercise(id);

  //   console.log("click" + id);
  // };

  const handleClick = useCallback(
    async (id) => {
      try {
        await addToCookie(id);
      } catch (error) {
        console.log(error);
      }
    },
    [addToCookie]
  );


  const handleAddWorkout=async(req,res)=>{

try {
  const exerciseIDs = JSON.parse(localStorage.getItem("exArr")) || [];
  const response = await axios.post(`http://localhost:3000/users/${cookie.get('userId')}/workout/${cookie.get('workoutId')}`, {
    exercises: exerciseIDs
  });
  localStorage.removeItem("exArr");
  
const userId=cookie.get('userId')
  navigate(`/dashboard/${userId}`)
  console.log(response)
} catch (error) {
  console.log(error)
}

  }
  // const fetchExercise = async (req, res) => {
  //   const { data } = await axios.get("http://localhost:3000/exercise", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: token,
  //     },
  //   });
  //   console.log(data.data);
  //   setData(data.data);
  // };

  const fetchExercise = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/exercise", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExercise();
  }, []);

  return (
    <div>
      {/* <div className="navBar"><h3 onClick={navigate('/savedExcersise')}>SavedExercises</h3></div> */}
      {token && (
        <div className="navBar">
          <h3 onClick={() => navigate("/savedExcercises")}>SavedExercises</h3>
          <button onClick={handleAddWorkout}>AddToWorkout</button>

        </div>
      )}
      <div className="cardExerciseParent">
        {/* {data.map((item) => (
          <div className="cardExercise" key={item._id}>
            <Link to={`/exercise/${item._id}`}>
              <img src={item.image} />
              <h3> {item.type}</h3>
              <p>{item.name}</p>
              <p>{item.muscle}</p>
            </Link>
            <button onClick={() => handleClick(item._id)}>Add</button>
          </div>
        ))} */}
        {data.map((item) => (
          <ExerciseCard key={item._id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
