import React from 'react'
import './HeightWeight.css'


function HeightWeight() {
  return (
    <div className='heightweight'>
      <div className='height'>
       <h4>How tall are you?</h4>
      <label>
      <input 
      type="number"
      min={0}
      max={8}
      onChange={(e)=>{console.log(e.target.value)}}/>
     <span>Feet</span>

      </label>
      </div>
      <div className='weight'>
       <h4>How much do you weight?</h4>
       <p>It's ok to estimate You can update this later </p>
       
       <label>
      <input 
      type="number"
      min={0}
      max={200}/>
     <span>Kg</span>

      </label>
      </div>
      <div className='goalweight'>
      <h4>What's your goal weight</h4>
      <p>Dont worry it wont affect your daily calorie goal</p>
      <label>
        
      <input 
      type="number"
      min={0}
      max={200}/>
     <span>Kg</span>

      </label>
      </div>

    </div>
  )
}

export default HeightWeight
