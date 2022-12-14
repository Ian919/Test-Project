import SideBar from "../components/sideBar.jsx"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import Burger from "./busrger.jsx"
function MenuByBurger ({active}) {
   
    let location = useLocation()
    return <div className={active ? "Menu active" :  "Menu"}>
        <div className="MenuName">
            <Burger/>
       <div className="MenuName_logo"><img src="assets/img/profile.png"></img></div> 
       <div className="sideBarForMenu">
        <SideBar/>
        </div>
        </div>
      
    </div>
}

export default MenuByBurger