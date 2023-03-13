import axios from 'axios'
import cookie from 'cookiejs'
import React, { useEffect } from 'react'
const SavedExercises = () => {
    const [exercises, setExercises] = React.useState([]);


const userId=cookie.get('userId')
const getSavedEx=async ()=>{

const{data}=await axios.get(`http://localhost:3000/getExercises/${userId}`)
const exercise=data.data.AddExercises
setExercises(exercise)
console.log(exercise)

}
useEffect(()=>{
    getSavedEx()
},[])

  return (
    <div>
      {exercises.map((item,index) => (
        <div key={index}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default SavedExercises
