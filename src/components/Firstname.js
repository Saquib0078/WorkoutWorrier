import React from 'react'
import './Firstname.css'
function Firstname() {
  return (
    <div className='FirstName'>
      <div className='quote'><h5>We're happy you're here</h5>
      <h5>Let's get to know a little about you.</h5>
      </div>
      <div className='input'>
        <input
        id='type'
        type="text"
        placeholder='FirstName'
        />
      </div>
    </div>
  )
}

export default Firstname
