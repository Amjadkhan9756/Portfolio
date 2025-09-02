import { BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    
    </BrowserRouter>
  );
}

export default App;
