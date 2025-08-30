import { BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <h1>Hello</h1>
    </BrowserRouter>
  );
}

export default App;
