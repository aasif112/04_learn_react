



import React, { useContext } from "react";
import contextVariable from "./CounterContext";

function ChildTwo() {
    let data = (useContext(contextVariable))
    // useContext(contextVariable) = bioData-Object in AppTwo
    return(
        <div>
            <h1>This is Root-Child</h1>
            <br />
            <p>Accessing Data by Argument-Method/ prop. method</p>
            <h2>Child Name: _{data.name} <br />
                {data.name}'s Age: _{data.age} <br />
                {data.name} has a sister named: _{data.sister}
            </h2>
            <h2>{data.name}'s Date_Of_Birth is: <br />
                {data.dob.day} - {data.dob.month} - {data.dob.year}
            </h2>
        </div>
    )
}


export default ChildTwo;            

