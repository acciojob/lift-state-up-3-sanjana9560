import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="Parent">
      <h1>Parent Component</h1>
      <ChildComponent1 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <ChildComponent2 selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      <p>Selected Option: {selectedOption}</p>

    </div>
  );
}

export default App;
