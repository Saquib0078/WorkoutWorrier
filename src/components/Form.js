import React, { useEffect, useState } from "react";
import Welcome from "./Welcome";
import Firstname from "./Firstname";
import ActivityLevel from "./ActivityLevel";
import Signup from "./Signup";
import GoalBarriers from "./GoalBarriers";
import {Link} from "react-router-dom"
import SetGoals from "./SetGoals";
import Gender from "./Gender";
import HeightWeight from "./HeightWeight";
import "./Form.css";
function Form() {
  const FormTitles = [
    "Welcome",
    "Whats your first name?",
    "Thanks!Now for your Goals",
    "In the past, what have been your barriers to losing weight?",
    "What is your baseline activity level?",
    "Please select which gender we should use to calculate your calorie needs.",
    "How tall are you?",
    "Almost there!Create your account",
  ];

  const [page, setPage] = useState(0);
  // const [fname, setFname] = useState("");
  // const [goals, setGoals] = useState("");
  // const [goalBarriers, setGoalBarriers] = useState("");
  // const [activityLevel, setActivityLevel] = useState({});
  // const [gender, setGender] = useState({});
  // const [heightWeight, setHeightWeight] = useState({});
  // const [regDetails, setRegDetails] = useState({});
  const[form,setForm]=useState( {
    fname :"",
     goals:"",
      barriers:"",
       activityLevel: '',
        gender: '',
         country: '',
          email: '',
           password: '',
            height: '', 
            weight: '',
             goalweight: '',
             terms:""
  })
  console.log(form)

  // useEffect(() => {
  //   console.log(fullDetailsObj);
  // }, [fullDetailsObj.regDetails.password]);

  // console.log(fullDetailsObj);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Welcome page={page}  setPage={setPage}/>;
      case 1:
        return <Firstname  form={form} setForm={setForm}/>;
      case 2:
        return <SetGoals form={form} setForm={setForm} />;
      case 3:
        return (
          <GoalBarriers form={form} setForm={setForm}/>
        );
      case 4:
        return (
          <ActivityLevel form={form} setForm={setForm}/>
        );
      case 5:
        return <Gender form={form} setForm={setForm} />;
      case 6:
        return (
          <HeightWeight form={form} setForm={setForm}/>
        );
      case 7:
        return (
          <Signup
           form={form} setForm={setForm}
          />
        );

      default:
        return 0;
    }
  };

 
  return (
    <div className="form">
      <div className="nav">
        <img src="\fit.png" alt="fit" />
        
        <Link to="/login"><p id="ptag">LOGIN</p></Link>
      </div>
      <div className="form-container"></div>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>

      <div className="body">
        {PageDisplay()}
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "14.2%"
                  : page === 1
                  ? "28.4%"
                  : page === 2
                  ? "42.6%"
                  : page === 3
                  ? "56.8%"
                  : page === 4
                  ? "71%"
                  : page === 5
                  ? "85.2%"
                  : "100%",
            }}
          ></div>
        </div>
      </div>

      {page === 7 || page === 0 ? null : (
        <div id="footer">
          <button
            id="back"
            disabled={page === 0}
            onClick={() => {
              setPage((currpage) => currpage - 1);
            }}
          >
            Back
          </button>
          <button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currpage) => currpage + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Form;
