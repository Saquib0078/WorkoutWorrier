import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const goals = [
    { id: 1, name: 'Run 5 miles', progress: 3.5 },
    { id: 2, name: 'Lift weights', progress: 2 },
    { id: 3, name: 'Do 100 pushups', progress: 50 },
  ];

  const todaysActivity = [
    { id: 1, name: 'Run 2 miles', duration: '20 min', calories: 200 },
    { id: 2, name: 'Lift weights', duration: '30 min', calories: 250 },
    { id: 3, name: 'Yoga', duration: '60 min', calories: 150 },
  ];

  const activityData = [
    { date: '2022-03-01', steps: 8000 },
    { date: '2022-03-02', steps: 6000 },
    { date: '2022-03-03', steps: 10000 },
    { date: '2022-03-04', steps: 12000 },
    { date: '2022-03-05', steps: 9000 },
    { date: '2022-03-06', steps: 7000 },
    { date: '2022-03-07', steps: 11000 },
  ];

  const fitnessGoal = {
    name: 'Lose weight',
    description: 'Lose 10 pounds in 2 months',
    progress: 5,
  };

  const popularTrainers = [
    { id: 1, name: 'John Doe', specialty: 'Weightlifting' },
    { id: 2, name: 'Jane Smith', specialty: 'Yoga' },
    { id: 3, name: 'Mark Johnson', specialty: 'Cardio' },
  ];

  // Chart.js configuration
  const chartConfig = {
    type: 'line',
    data: {
      labels: activityData.map(data => data.date),
      datasets: [{
        label: 'Steps',
        data: activityData.map(data => data.steps),
        borderColor: 'blue',
        fill: false,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  };

  return (
    <div className="dashboard">
     <div className='divsss'>
     <div className="goals">
        <h2>Goals</h2>
        <ul>
          {goals.map(goal => (
            <li key={goal.id}>
              {goal.name} - {goal.progress}/{goal.target}
            </li>
          ))}
        </ul>
      </div>
      <div className="todays-activity">
        <h2>Today's Activity</h2>
        <ul>
          {todaysActivity.map(activity => (
            <li key={activity.id}>
              {activity.name} - {activity.duration}, {activity.calories} calories burned
            </li>
          ))}
        </ul>
      </div>
     </div>
      <div className="activity">
        <h2>Activity</h2>
        <canvas id="activity-chart" width="400" height="200"></canvas>
      </div>
      <div className="fitness-goal">
        <h2>Fitness Goal</h2>
        <p>{fitnessGoal.name}</p>
        <p>{fitnessGoal.description}</p>
        <p>Progress: {fitnessGoal.progress
        }</p>
</div>
<div className="user-activity-chart">
<h2>User Activity</h2>
<canvas id="user-activity-chart" width="400" height="200"></canvas>
</div>

<div className="popular-trainers">
  <h2>Popular Trainers</h2>
  <div className="trainers-container">
    {popularTrainers.map(trainer => (
      <div key={trainer.id} className="trainer-card">
        <h3>{trainer.name}</h3>
        <p>{trainer.specialty}</p>
      </div>
    ))}
  </div>
</div>

</div>

);
}

export default Dashboard;



