import React from 'react'
import Nav from "./Nav"
import Logo from "../Assets/Logo.svg"
const Header = () => {
  return (
        <div className='Header'>
           <img src={Logo} className='logo'/>
          <Nav />
        
        </div>
  )    
         
}

export default Header