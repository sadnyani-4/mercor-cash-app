import React from 'react'
import './Investing.css'
import it from '../assets/investing-rays 1.png'
import invst from '../assets/investing-stocks.png'
import invbit from '../assets/investing-bitcoin.png'
import invg1 from '../assets/investing-graph-1.png'
import invg2 from '../assets/investing-graph-2.png'
import invg3 from '../assets/investing-graph-3 1.png'
import floor from '../assets/Group.png'
import arrow from '../assets/arrowpng.png'
import twitchb from '../assets/Frame.png'
import twitterb from '../assets/Frame-1.png'
import instab from '../assets/Frame-2.png'
import apple from '../assets/applepng.png'
import gplay from '../assets/gplaypng.png'

const Investing = () => {
  return (
    <div className="Investing">
        <img className='inv-floor' src={floor} alt="floor" />
        <img className='it' src={it} alt="it" />
        <img className='invg1' src={invg1} alt="invg1" />
        <img className='invg2' src={invg2} alt="invg2" />
        <img className='invg3' src={invg3} alt="invg3" />

        <h1 className='i-title'>Investing</h1>

        <div className='inv-stuff'>
            <div className='stock-text'>
                <h2 className='s-title'>Stocks</h2>
                <p>
                    Whether you’re an expert or just getting <br />
                    started, Cash App is the fastest and most <br />
                    accessible way to invest in stocks. Start now <br />
                    with as little as $1.
                </p>
            </div>

            <img className='invst' src={invst} alt="invst" />
            <img className='invbit' src={invbit} alt="invbit" />

            <div className='bit-text'>
                <h2 className='s-title'>Bitcoin</h2>
                <p>
                    Cash App is the fastest way to convert <br />
                    dollars to bitcoin. From your home screen, <br />
                    six taps are all it takes to stack sats, buy an <br />
                    entire bitcoin, or just see what it’s all about.
                </p>
            </div>
        </div>
        
        <div className='footer'>
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
                    <a href="#"><img src={twitchb} alt="twitch" /></a>
                    <a href="#"><img src={twitterb} alt="twitter" /></a>
                    <a href="#"><img src={instab} alt="insta" /></a>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Investing