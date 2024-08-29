




import React from "react";
import ChildOne from "./ChildOne"
import Child2 from "./SecondChild";

function ParentOne(props) {
    return(
        <div >
            <ChildOne family_name={props.family_name} Grandpa_Name={props.name} name='Javed Yousif' Grandpa_age={props.age}   />
            <br />
            {/* <h2>Father Name:{useContext(counterContext).father_name} </h2> */}
            <br />
        </div>
    )
}


export default ParentOne;