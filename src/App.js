import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Login from "./components/Login";
import Home from "./components/Home";
import Calorie from "./components/Calorie";
import UserActivity from "./components/UserActivity";
import ExerciseDetailsPage from "./components/ExerciseDetailsPage";
import SavedExercises from "./components/SavedExercises";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateWorkout from "./components/CreateWorkout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calorie/:_id" element={<Calorie />} />
          <Route path="/userActivity" element={<UserActivity />} />
          <Route path="/exercise/:_id" element={<ExerciseDetailsPage />} />
          <Route path="/savedExcercises" element={<SavedExercises />} />
          <Route path="/addWorkout" element={<CreateWorkout />} />
          <Route path="/dashboard/:userId" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
