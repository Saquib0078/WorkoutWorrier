import React, { useState } from "react";
import "./Signup.css";
function Signup({ form, setForm, setPage,postForm }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleContinueClick = () => {
    if (!form.email && !form.password) return;
    setPage((curr) => curr + 1);
    // postForm()
  };
  // console.log(isChecked)
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setForm({ ...form, terms: !isChecked });
  };

  return (
    <div className="maindiv">
      <div className="inputdiv">
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          required
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          placeholder="Password"
        />
        <h6>Must be atleast 10 characters no spaces</h6>
      </div>
      <div className="terms">
        <label>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
          />
          <span>Terms & Conditions </span>
          <p>I agree to Terms & Conditions and Privacy Policy</p>
        </label>
      </div>

      <div className="lastdiv">
        <h6>By signing up, you are agreeing to our Privacy Policy and terms</h6>
        <button onClick={handleContinueClick}>Continue</button>
        <p>or</p>
        <button>Continue with Google</button>
        <p>we will never post anything without your permission</p>
      </div>
    </div>
  );
}

export default Signup;
