


import React  from "react";
import contextVariable from "./CounterContext";
import GrandParentTwo from "./GrandParentTwo"

// APP_Case Two In this we provide data-to be transfered as createContext + useContext:

function AppTwo() {
  let bioData = {name: 'Baby', age:2, sister:'Adi', father_name: 'Javed Yousif', dob :{day:6, month:'Sept', year:2022}, family_name:'Noonari'}
  
  return (
    <contextVariable.Provider value={bioData} >
      <div >
        <br />
          <GrandParentTwo  />
        
      </div>
    </contextVariable.Provider>    
  );
  
}


export default AppTwo;
