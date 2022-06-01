import React from 'react';


const CalButton = (props)=>{
 
   
    return(
       
        <input type='button' value = {props.label}  onClick = {props.handleClick}/>
        
    );
}

export default CalButton;