import React, { useState } from "react";
import "./Firstname.css";

function Firstname({form,setForm,error }) {
  const [isTouched, setIsToched] = useState(false)
  
  return (
    <div className="FirstName">
      <div className="quote">
        <h5>We're happy you're here</h5>
        <h5>Let's get to know a little about you.</h5>
      </div>
      
      <div className="input">
        <input
          className={`${!form.fname && !isTouched  ? 'errorBox' : 'type'}`}
          type="text"
          placeholder="FirstName"
          value={form.fname}
          onBlur={()=> setIsToched(true)}
                required
          onChange={(e) => setForm({...form,fname:e.target.value})}
        />
      </div>
       { !form.fname && <p className="error">{error}</p>}
    </div>
  );
}

export default Firstname;
