



import React from "react";
import ParentOne from './ParentOne';

function GrandParentOne(props) {
    return(
        <div>
            <ParentOne family_name={props.family_name} name='M. Yousif' age={68} />
        </div>
    )
}


export default  GrandParentOne;

