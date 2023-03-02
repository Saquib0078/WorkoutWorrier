import React, { useState } from "react";
import "./Gender.css";

function Gender({ form,setForm  }) {
  const [compState, setCompState] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setForm({
      ...form,
      gender: value,
      country: "India",
    });
  };

  // console.log(gender);

  return (
    <div className="Gparent">
      <div className="gender">
        <label>
          <input
            type="radio"
            value="Male"
            onChange={handleOptionChange}
            checked={selectedOption === "Male"}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            onChange={handleOptionChange}
            checked={selectedOption === "Female"}
          />
          Female
        </label>
      </div>

      <div className="dob">
        <h4>When were you born?</h4>
        <input
          type="date"
          onChange={(e) => {
            setForm({
              ...form,
              date: e.target.value,
              country: "India",
            });
          }}
        />
      </div>

      <div className="country">
        <h4>Where do you live?</h4>
        <select
        value={form.country}
          onChange={(e) =>
            setForm({
              ...form,
              country: e.target.value,
            })
          }
        >
          <option value={"India"}>India</option>
          <option value={"pakistan"}>pakistan</option>
          <option value={"Uk"}>Uk</option>
          <option value={"UAE"}>UAE</option>
          <option value={"USA"}>USA</option>
          <option value={"Russia"}>Russia</option>
        </select>
        <h6>
          We use information to calculate an accurate calorie goal for you
        </h6>
      </div>
    </div>
  );
}

export default Gender;
