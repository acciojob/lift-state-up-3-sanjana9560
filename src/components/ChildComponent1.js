import React from "react";

const ChildComponent1 = ({ selectedOption, setSelectedOption }) => {
  return (
    <div>
      <h3>ChildComponent1</h3>
      <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
    </div>
  );
}

export default ChildComponent1;
