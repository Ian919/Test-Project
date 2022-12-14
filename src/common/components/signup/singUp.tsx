import App from "../../../App";
import {Link} from 'react-router-dom'
import Input from '../../UI/input_type'
import Input1 from "../../UI/Input1";
import ButtonSubmit  from '../../UI/buttonSubmit'
import api from "../../../API copy";
import { useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContexts";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import schema from './validation';
import store from '../../../core/redux/store';
import { useNavigate } from "react-router-dom";
import schema from "./validation";
function SignUp() {
  // const [context, setContext] = useContext(AuthContext);
  const { register, handleSubmit, setValue } = useForm({});
  const navigate = useNavigate()
  const onSubmit = async (data) => { 
    
  await api.registration(data).then((r) => {console.log(r)})
  await api.login({
        "login":data.login,
        "password":data.password
      }).then((r) => {console.log(r)
      const token= r.token;
    console.log(token)
    const name1:string = r.name
   
    localStorage.auth = JSON.stringify(r.data)
      console.log(localStorage.auth)
    store.dispatch({
      type:'auth/loaded',
      payload:
      {name: name1,
      token: token}
    })})
    // .then(() => navigate("/AddNewTeam"))
    navigate("/AddNewTeam");
  }
    

  
  
    return (
      <div className="signUp">
        <div className="formsignUp">
        <div className="signUpmargin">
      <h1 className='signUpText' >Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input1 label="Name" onInput1={(e) => {
        setValue('userName', e.target.value)
      }}/>
    <Input1 label="Login" onInput1={(e) => {
        setValue('login', e.target.value)
      }}/>
    <Input label="Password" seePassword= "true" onInput={(e) => {
      console.log(e.target.value)
        setValue('password', e.target.value)
      }}/>
    <Input label="Enter your password again" seePassword= "true" />
     <p className='textAgreement'> <input type='checkbox'/>   I accept the agreement</p>
      
          <input type="submit" className='buttonSubmit' />
          <p className='signUpAlreadyamember'>Already a member? 
      <Link to='/signin' className='LingtoSignIn'>sign in</Link></p>
      </form>
    </div></div>
      <div className='imgSignup'><img src='assets/img/7873 1.png' className='imgSignup1'/></div>
       </div>
    );
  }
  
  export default SignUp;
