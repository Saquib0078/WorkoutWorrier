import React, { useState, useEffect } from 'react';

const Filterdata = () => {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    let apiUrl = 'http://localhost:3000/exercise';
    if (muscle) {
      apiUrl += `?muscle=${muscle}`;
    }
    if (category) {
      apiUrl += `${muscle ? '&' : '?'}type=${category}`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setExercises(data.data))
      .catch(error => console.error(error));
  }, [muscle, category]);

  const handleMuscleChange = event => {
    setMuscle(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <h1>Exercise List</h1>
      <div>
        <label htmlFor="muscle-filter">Muscle:</label>
        <select id="muscle-filter" value={muscle} onChange={handleMuscleChange}>
          <option value="">All</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="shoulders">Shoulders</option>
        </select>
      </div>
      <div>
        <label htmlFor="category-filter">Category:</label>
        <select id="category-filter" value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="cardio">cardio</option>
          <option value="olympic_weightlifting">olympic_weightlifting</option>
          <option value="powerlifting">powerlifting</option>
          <option value="strength">strength</option>
          <option value="stretching">stretching</option>
          <option value="strongman">strongman</option>

        </select>
      </div>
      {exercises.length===0?(
        <p>No Exercise found</p>
      ):(
      
      exercises.map(exercise => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.description}</p>
          <p>{exercise.type}</p>
        </div>
      )))}
    </div>
  );
};

export default Filterdata