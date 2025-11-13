import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Component/Home";
import Project from "./Component/Project";
// import 'bootstrap/dist/css/bootstrap.min.css';
//https://skilledportfolio.netlify.app/
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
