import { useState } from "react"

function Input(props) {
    interface eyeOnType {
        eyeOn: Boolean,
        setEyeOn: Boolean
    }
    const [eyeOn, setEyeOn] = useState(false);
    function onEyeClick() {
        setEyeOn(!eyeOn);
    }
    return (
        <span className="inpute_type">
    <div className={"input " + (props.seePassword? "seePassword": '')}>
    <p className='login'>{props.label}</p>
    <input type={eyeOn ?   'text' : 'password'} className="logininput" onInput={props.onInput} /> 
    {props.seePassword && <span className={'seePasswordEye' + (eyeOn ? " seePasswordEye--on" : "")}  onClick={onEyeClick}>
    </span>}
    </div></span> )
}

export default Input