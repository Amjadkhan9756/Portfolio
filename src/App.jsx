import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import "./Navbar.css";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;