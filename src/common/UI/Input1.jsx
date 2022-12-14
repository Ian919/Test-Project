

function Input1(props) {
   // console.log(props)
    return (
    <div className="input " >
    <p className='login'>{props.label}</p>
    <input onInput={props.onInput1} value={props.value } type='text'className="logininput" /> 
   </div> )
}

export default Input1