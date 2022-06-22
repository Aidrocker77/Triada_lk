import '../styles/CustomButton.scss';
import React from "react";

const CustomButton=(props)=>{
    const handleClick = () => {
        props.click();
    }
    return(
        <button className={'custom-button '+(props.modifier)} onClick={handleClick} >{props.content}</button>
    )
}

export default CustomButton;