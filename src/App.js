import "./App.css";
import{BrowserRouter,Route, Routes} from "react-router-dom"

import Form from "./components/Form";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Form />}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
