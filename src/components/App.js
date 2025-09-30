import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>

      {/* Passing props to children */}
      <ChildComponent1 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
      />
      <ChildComponent2 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
      />

      {/* Display selected option */}
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App;
