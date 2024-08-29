



import React, { useContext } from "react";
import ChildTwo from "./ChildTwo";
import contextVariable from "./CounterContext";

function ParentTwo() {
    let parent_data = {name:'Javed Yousif', age:38}
    let data = useContext(contextVariable)
    return(
        <div >
            <ChildTwo    />
            <br />
            <p>This line is in Parent Component</p>
            <h3>Parent Data</h3>
            <br />
            <h4>Name: {parent_data.name} </h4>
            <h4>Family Name: {data.family_name} </h4>

            <br />
        </div>
    )
}


export default ParentTwo;