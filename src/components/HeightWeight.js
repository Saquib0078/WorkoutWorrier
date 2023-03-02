import React, { useState } from "react";
import "./HeightWeight.css";

function HeightWeight({ form,setForm  }) {

  return (
    <div className="heightweight">
      <div className="height">
        <h4>How tall are you?</h4>
        <label>
          <input
            type="number"
            min={0}
            max={8}
            onChange={(e) => {
              setForm({
                ...form,
                height: e.target.value,
              });
            }}
          />
          <span>Feet</span>
        </label>
      </div>
      <div className="weight">
        <h4>How much do you weight?</h4>
        <p>It's ok to estimate You can update this later </p>

        <label>
          <input
            type="number"
            min={0}
            max={200}
            onChange={(e) => {
              setForm({
                ...form,
                weight: e.target.value,
              });
            }}
          />
          <span>Kg</span>
        </label>
      </div>
      <div className="goalweight">
        <h4>What's your goal weight</h4>
        <p>Dont worry it wont affect your daily calorie goal</p>
        <label>
          <input
            type="number"
            min={0}
            max={200}
            onChange={(e) => {
              setForm({
                ...form,
                goalweight: e.target.value,
              });
            }}
          />
          <span>Kg</span>
        </label>
      </div>
    </div>
  );
}

export default HeightWeight;
