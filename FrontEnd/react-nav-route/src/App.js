import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import Image from "./Image";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/image" className="nav-item">
          Image
        </Link>
        <Link to="/audio" className="nav-item">
          Audio
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/image" element={<Image />}></Route>
      </Routes>
    </div>
  );
}

export default App;
