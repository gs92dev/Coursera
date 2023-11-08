import React, { useState } from "react";
import "./MyComponent.css";

function MyComponent() {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {data.slice(0, 3).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <button onClick={toggleShowAll}>{showAll ? "Hide" : "Show All"}</button>
      <div className={`hidden-items ${showAll ? "show" : "hide"}`}>
        {data.slice(3).map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default MyComponent;
