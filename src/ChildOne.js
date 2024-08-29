



import React from "react";

function ChildOne(props) {
    return(
        <div>
            <h3>This is Root-Child</h3>
            <p>Data Accessed by Property Decleration and Argument Pass Method:</p>
            <p>Accessing Data by Argument-Method/ prop. method</p>
            <br />
            <h2>Family Name: _{props.family_name} <br />
                Grandpa Name: _{props.Grandpa_Name} <br />
                Grandpa is: _{props.Grandpa_age}
            </h2>
        </div>
    )
}


export default ChildOne;            

