import React,{useState} from "react";
import './Signup.css'
function Signup( {email,setEmail,password,setPassword}) {

  const[isChecked,setIsChecked]=useState(false)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
console.log(email)
console.log(password)

  console.log(isChecked)
  return (
    <div className="maindiv">
      <div className="inputdiv">
        <input type="email" placeholder="Email" 
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
        />
        <input type="password" placeholder="Password" 
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                />
        <h6>Must be atleast 8 characters no spaces</h6>
      </div>
      <div className="terms">
        <label>
          <input type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
           />
          <span>Terms & Conditions </span>
          <p>I agree to Terms & Conditions and Privacy Policy</p>
        </label>
      </div>

      <div className="lastdiv">
        <h6>By signing up, you are agreeing to our Privacy Policy and terms</h6>
        <button>Continue</button>
        <p>or</p>
        <button>Continue with Google</button>
       <p>we will never post anything without your permission</p>
      </div>
    </div>
  );
}

export default Signup;
