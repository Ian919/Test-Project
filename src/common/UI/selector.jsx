import Select from 'react-select'

function Selector ({label,  onInput, value, multiple, options}) {

 return <div className="SELECT">
 
      <Select options={options} onChange={onInput} isMulti={multiple} value={value} controlShouldRenderValue={true}/>  
    </div>
}

Selector.defaultProps = {
  label: '',
  options: [],
  multiple: false,
  // value:''
}


export default Selector