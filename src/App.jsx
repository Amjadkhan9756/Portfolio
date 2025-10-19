import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Skill" element={<Skill/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
