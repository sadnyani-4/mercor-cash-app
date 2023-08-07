import React from 'react'
import './Footer.css'
import apple from '../assets/applepng.png'
import gplay from '../assets/gplaypng.png'
import arrow from '../assets/arrowpng.png'
import twitch from '../assets/twitchpng.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='butto'>
            <button className='app-store'>
                <img src={apple} alt="app-store" />
                <span>APP STORE</span>
            </button>
            <button className='google-play'>
                <img src={gplay} alt="google-play" />
                <span>GOOGLE PLAY</span>
            </button>
        </div>
        {/* <div className='rest'> */}
            <img className='arrow' src={arrow} alt="arrow" />
            <p className='policy'>
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC. <br />
                See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin <br />
                trading offered by Cash App. Cash App Investing does not trade bitcoin and <br />
                Cash App is not a member of FINRA or SIPC. Cash App facilitates banking <br />
                services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
            <div className='socials'>
                <a href="#"><img src={twitch} alt="twitch" /></a>
                <a href="#"><img src={twitter} alt="twitter" /></a>
                <a href="#"><img src={insta} alt="insta" /></a>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Footer