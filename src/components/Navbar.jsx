import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="navbar-list">
        <div className='navbar-row'>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Licenses</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Careers</a></li>
        </div>
        
        <div className='navbar-row'>
          <li><a href="#">Press</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Codeblock</a></li>
        </div>        
      </ul>
    </nav>
  )
}

export default Navbar