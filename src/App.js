import "./App.css";
import{BrowserRouter,Route, Routes} from "react-router-dom"

import Form from "./components/Form";
import Login from "./components/Login";
import Home from "./components/Home";
import Calorie from "./components/Calorie";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Form/>}/>
      <Route path="/calorie" element={<Calorie/>}/>

    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
