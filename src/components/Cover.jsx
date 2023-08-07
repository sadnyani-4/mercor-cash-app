import React from 'react'
import './Cover.css'
import logo from '../assets/logo.png'
import eye from '../assets/eye button.png'
import phone from '../assets/intro-phone 1.png'
import cube from '../assets/intro-cube 1.png'
import stairs from '../assets/intro-stairs 1.png'
import cubes from '../assets/intro-cubes 1.png'
import pillar from '../assets/intro-pillar 1.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Cover = () => {
  return (
    <div className='Cover'>
        <div className='Menu'>
            <img className='logo' src={logo} alt='logo'/>

            <Navbar/>
            <input type="checkbox" id="eye-toggle" class="eye-toggle"/>
            <label class="eye" for="eye-toggle">
                <img src={eye} alt="eye" />
            </label>
            <ul class="eye-list">
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Codeblock</a></li>
                <li className='policy'>
                    Brokerage services by Cash App Investing LLC, member FINRA / SIPC. 
                    See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
                    trading offered by Cash App. Cash App Investing does not trade bitcoin and
                    Cash App is not a member of FINRA or SIPC. Cash App facilitates banking
                    services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
                </li>
            </ul>  
        </div>

        <div className='cash-app'>
            <img src={phone} alt="phone" />
            <div className='the-text'>
                <span className='cash'>CASH</span><br/>
                <span className='app'>APP</span>
            </div>
        </div>

        <img className='cube' src={cube} alt="cube" />
        <img className='stairs' src={stairs} alt="stairs" />
        <img className='cubes' src={cubes} alt="cubes" />
        <img className='pillar' src={pillar} alt="pillar" />

        <Footer/>
    </div>
  )
}

export default Cover