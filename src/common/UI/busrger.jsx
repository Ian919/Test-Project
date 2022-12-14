import { useState } from "react"
import React from 'react'
const Burger:React.FC = ({menu, setActive}) =>  {
    
    return <div className="burger" onClick={() => setActive(!menu)} >
        <img src="/assets/img/menu_24px.png"></img>
    </div>
}

export default Burger