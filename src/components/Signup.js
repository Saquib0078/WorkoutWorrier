import React from "react";
import './Signup.css'
function Signup() {
  return (
    <div className="maindiv">
      <div className="inputdiv">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <h6>Must be atleast 10 characters no spaces</h6>
      </div>
      <div className="terms">
        <label>
          <input type="checkbox" />
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
