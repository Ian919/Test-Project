import {Link} from 'react-router-dom'

function Link1 (props) {
    return <Link to={props.to} className="link1" > {props.text || <img src="src/common/UI/link" />}  </Link>
}

export default Link1;