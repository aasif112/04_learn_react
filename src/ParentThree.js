


import React, { useContext } from "react";
import ChildThree from "./ChildThree";
import contextVariable from "./CounterContext";


function ParentThree() {
    let doubleCount = (useContext(contextVariable))[0]
    let setDoubleCount = (useContext(contextVariable))[1]
    return(
        <div >This is Parent Component 
            <br />
            <h3>{doubleCount}</h3>
            <button onClick={()=> {setDoubleCount(doubleCount*2)}}>Parent-Button</button>
            <br />
            <ChildThree />
        </div>
    )
}


export default ParentThree;