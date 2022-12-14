import { useEffect } from "react"
function SmallInput ({label, value, onInput}) {
    let value2 = value
    useEffect(() => {
        value2 = value
    }, [value])
    return <div className="smallInput">
        <p className="nameofsmallinput">{label} </p>
        <input type='text' className="inputsmall" onInput={onInput} value={value2}/>
    </div>
}

export default SmallInput