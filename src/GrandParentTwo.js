


import React from "react";
import ParentTwo from './ParentTwo';

function GrandParentTwo(props) {
    let grandpa_data = {family_name:'Noonari', name:'M. Yousif', age:68}
    return(
        <div>
            <ParentTwo  />
        </div>
    )
}


export default  GrandParentTwo;

