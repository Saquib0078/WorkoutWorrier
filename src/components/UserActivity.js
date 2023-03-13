import React from 'react'
import './UserActivity.css'
const userActivity = () => {
  return (
    <div className='ParentDiv'>
        
     <h3 id="topheading">OverView</h3>

    <div className='card'>
    <div className='progressCircle'>
    <img src="./logo192.png"/>
</div>
<div className='Calories'>
<ul>
        <li>Total Calories</li>
        <p>1904</p>
        <li>Protein</li>
        <p>102 grams</p>
        <li>Carbs</li>
        <p>250 grams</p>
    </ul>
</div>
    </div>
{/* <p>Todays activity</p> */}
<div className='card2'>
    <div className='sets'>
        <img src="./logo192.png"/>
        <h3>1250</h3>
        <p>per/week</p>
        <h3>MMA</h3>
    </div>
    <div className='exercise'>
   <ul>
    <li>Squarts</li>
    <p>10 sets of squarts</p>
    <li>Low Lunges</li>
    <p>15 sets of squarts</p>
    <li>Batting rope</li>
    <p>15 sets of squarts</p>
   </ul>
    </div>
</div>

      
    </div>
  )
}

export default userActivity
