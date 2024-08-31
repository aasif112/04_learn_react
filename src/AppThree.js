


import React, { useState } from "react";
import GrandParentThree from "./GrandParentThree";
import contextVariable from "./CounterContext"

// APP_Case THREE In this we Change-Data from Child to Parent.
// Which is Accessed by createContext and useContext Way:

function AppThree() {
  let countState = useState(1) 
  // countState = [value, setValue]
  
  return (
    <contextVariable.Provider value={countState}>

      <div >
        <br />
        <h3>Random Number AppThree: {countState} </h3>
        <br />
        <GrandParentThree />

      </div>
    </contextVariable.Provider>
  );  
}

export default AppThree;
