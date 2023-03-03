import React, { useState } from "react";
import "./Firstname.css";

function Username({form,setForm,error }) {
  const [isTouched, setIsToched] = useState(false)
  
  return (
    <div className="FirstName">
      <div className="quote">
        <h5>Set Your Username</h5>
      </div>
      
      <div className="input">
        <input
          className={`${!form.username && !isTouched  ? 'errorBox' : 'type'}`}
          type="text"
          placeholder="Username"
          value={form.username}
          onBlur={()=> setIsToched(true)}
                required
          onChange={(e) => setForm({...form,username:e.target.value})}
        />
      </div>
       { !form.username && <p className="error">{error}</p>}
    </div>
  );
}

export default Username;
