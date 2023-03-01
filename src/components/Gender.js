import React from 'react'
import './Gender.css'


function Gender() {
  return (
    <div className='Gparent'>
      <div  className='gender'>
        <label>
        <input  type="radio"/>
            Male
        </label>
        <label>
            <input type="radio"/>
            Female
        </label>
      </div>

<div className='dob'>
<h4>When were you born?</h4>
<input 
type="text"
/>
</div>

<div className='country'>
    <h4>Where do you live?</h4>
    <select>
        <option>India</option>
    </select>
    <h6>We use information to calculate an accurate calorie goal for you</h6>
</div>


    </div>
  )
}

export default Gender
