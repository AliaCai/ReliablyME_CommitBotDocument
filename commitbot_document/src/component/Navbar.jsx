import React from 'react'
import '../style/NavBar.css'
import company_logo from '../asset/company_logo.png'
import gpt_logo from '../asset/gpt_logo.png'
const Navbar = () => {
  return (
    <div className='navBar'>
        <div className="navBar_logo"><img className="navBar_logoImg" src={company_logo} alt="reliablyME" /></div>

        <div className="gpt">
          <a href='https://chatgpt.com/g/g-68c34978bd188191954ec0bdf4d74850-reliablyme-commitbot-guide' target='_blank'> <div className="gpt_logo"><img className="gpt_logoImg" src={gpt_logo} alt="gpt logo" />
          </div></a>

          {/* <div className="gpt_describe">Feel free to click the button if you have more questions.</div> */}
        </div>

        {/* <div className="navBar_search">
        </div> */}

    </div>
  )
}

export default Navbar
