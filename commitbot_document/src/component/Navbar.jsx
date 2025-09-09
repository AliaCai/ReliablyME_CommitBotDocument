import React from 'react'
import '../style/NavBar.css'
import logo from '../asset/company_logo.png'
const Navbar = () => {
  return (
    <div className='navBar'>
        <div className="navBar_logo"><img className="navBar_logoImg" src={logo} alt="reliablyME" /></div>
        <div className="navBar_search">
        </div>

    </div>
  )
}

export default Navbar
