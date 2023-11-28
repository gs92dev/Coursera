import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Form from "./Form";
function App() {
  const [fruits] = React.useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "apple", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  return (
    <div className="App">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/fruits">What Fruits we have today</Link>
        <Link to="/form">Form with state</Link>
      </div>
      <Routes>
        <Route path="/" element={<FruitsCounter fruits={fruits} />} />
        <Route path="/fruits" element={<Fruits fruits={fruits} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
