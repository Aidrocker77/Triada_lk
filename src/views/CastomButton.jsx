import '../styles/CastomButton.scss';

const CastomButton=(props)=>{
    return(
        <button className={'castom-button '+(props.modifier)} >{props.content}</button>
    )
}

export default CastomButton;