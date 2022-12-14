
function ButtonSubmit(props) { 
    return <button type="submit" className='buttonSubmit' onClick={props.onClick} name={props.name}>{props.name}</button>
}

export default ButtonSubmit