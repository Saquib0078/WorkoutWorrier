import React from 'react'
import './Calorie.css'

const Calorie = () => {
  return (
    <div className='calories'>
      <div className='calories__maindiv'>
      <h1 className='calories__heading'>Congratulations!</h1>
      <p >Your daily net calorie goal is:</p>
       
       <h1 className='calories__count'><strong>2190</strong></h1>
          <p className='calories__count-subheading'>calories</p>

<button>Explore WorkoutWorriers</button>
      </div>
      
    </div>
  )
}

export default Calorie
