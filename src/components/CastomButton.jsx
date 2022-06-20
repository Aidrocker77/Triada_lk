import '../styles/CastomButton.scss';
import React from "react";

const CastomButton=(props)=>{
    return(
        <button className={'castom-button '+(props.modifier)} >{props.content}</button>
    )
}

export default CastomButton;