import React from "react";

const ChildComponent1 = ({ selectedOption, setSelectedOption }) => {
  return (
    <div> 
      <h3>ChildComponent1</h3>
      
      {/* On click, update the parent state */}
      <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>

      {/* <p>Selected Option: {selectedOption}</p> */}
    </div>
  );
} 

export default ChildComponent1;
