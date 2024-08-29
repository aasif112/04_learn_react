


import React, { useState } from "react";
import GrandParentThree from "./GrandParentThree";
import contextVariable from "./CounterContext"

// APP_Case THREE In this we Change-Data from Child to Parent.
// Which is Accessed by createContext and useContext Way:

function AppThree() {
  let coutState = useState(1) 
  // coutState = [value, setValue]
  
  return (
    <contextVariable.Provider value={coutState}>

      <div >
        <br />
        <h3>Random Number AppThree: {coutState} </h3>
        <br />
        <GrandParentThree />

      </div>
    </contextVariable.Provider>
  );  
}

export default AppThree;
