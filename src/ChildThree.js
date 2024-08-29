



import React, { useContext } from "react";
import contextVariable from "./CounterContext";

function ChildThree() {
    let newCount = useContext(contextVariable)
    // newCount = coutState = [value, setValue]
    console.log(newCount)
    return(
        <div>
           <br />
           <h2>Random Number at Child-Component <br /> {newCount[0]} </h2>
           <br />
           <button onClick={()=>{(newCount[1](++newCount[0]))}} >Child-Button</button>
        </div>
    )
}


export default ChildThree;            

