import React from 'react'
import './About.css'
import thatsme from '../assets/thatsme.png'
import atwitter from '../assets/06 Behance-1.png'
import abehance from '../assets/06 Behance.png'
import facebook from '../assets/01 Facebook.png'
import linkedin from '../assets/01 Facebook-1.png'

const About = () => {
  return (
    <div className='About'>
        <div className='myinfo'>
            <img className='thatsme' src={thatsme} alt="thatsme" />

            <div className='theinfo'>
                <h1>OGOLUWA OJEWALE</h1>
                <p>UI/UX Designer</p>
                <hr />

                <h2>@ogopedia</h2>

                <div className='asocials'>
                    <img src={atwitter} alt="" />
                    <img src={abehance} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>

                <hr />

                <h3>ogopedia.com</h3>
            </div>
        </div>
    </div>
  )
}

export default About