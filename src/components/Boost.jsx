import React from 'react'
import './Boost.css'
import bbur from '../assets/boost-burger.png'
import bs from '../assets/boost-shoe.png'
import bp from '../assets/boost-phone.png'
import bh from '../assets/boost-hand.png'
import bcup from '../assets/boost-coffee.png'
import bca from '../assets/boost-card.png'
import bst2 from '../assets/boost-stairs-2.png'
import bst1 from '../assets/boost-stairs-1.png'

const Boost = () => {
  return (
    <div className='Boost'>
        <div className='boost-text ttext'>
            <h1 className='boost-title'>Cash Card <br /> & Boost</h1>
            <p className='boost-para'>
                The Cash Card is a free, customizable debit <br /> 
                card that lets you pay online and in stores. <br />
                It’s the only way to get Boosts—instant <br />
                discounts that work at places where you <br />
                want to spend.
            </p>
        </div>

        <img className='bst1' src={bst1} alt="bst1" />
        <img className='bbur' src={bbur} alt="bbur" />
        <img className='bs' src={bs} alt="bs" />
        <img className='bp' src={bp} alt="bp" />
        <img className='bh' src={bh} alt="bh" />
        <img className='bca' src={bca} alt="bca" />
        <img className='bst2' src={bst2} alt="bst2" />
        <img className='bcup' src={bcup} alt="bcup" />
    </div>
  )
}

export default Boost