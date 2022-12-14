import { useState } from "react"
import Burger from "../UI/busrger.jsx"
import MenuByBurger from "../UI/menuByBurger"
import store from "../../core/redux/store"
import { useSelector } from "react-redux"
const Navifation: React.FC = () => {
    let namePlayer = useSelector(state => state.auth.name)
    const [menuActive, setMenuActive] = useState(false)
    return <div className="NAVBAR">
    <div className="burgerOnclick"  >
    <Burger menu={menuActive} setActive={setMenuActive} />
    {/* <div className="burger" onClick={() => setMenuActive(!menuActive)} >
        <img src="/assets/img/menu_24px.png"></img>
    </div> */}
    </div>
    
   <div className="LogoBaske"> <img src="/assets/img/logo.png" className="LogoBaske-1"></img></div>
   <div className='NameACC'>
       
       <div className="c">
           {/* John Smith */}
           {namePlayer}
           </div>
       <div className="accLogo"><img src="/assets/img/profile.png"></img></div>
   </div>
   <MenuByBurger active={menuActive} /> 
    </div>
    

}

export default Navifation