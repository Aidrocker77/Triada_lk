import '../styles/CustomButton.scss';
import React from "react";

const CustomButton=(props)=>{
    return(
        <button className={'custom-button '+(props.modifier)} >{props.content}</button>
    )
}

export default CustomButton;