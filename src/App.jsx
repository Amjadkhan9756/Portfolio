import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import Navbar from "./Navbar.jsx";
import Home from "./component/Home.jsx";

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