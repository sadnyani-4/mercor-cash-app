import React from 'react'
import './Payments.css'
import pc2 from '../assets/payments-column-2.png'
import pc1 from '../assets/payments-column-1.png'
import pc from '../assets/payments-column.png'
import ppm from '../assets/payments-pillar-medium.png'
import ppm2 from '../assets/payments-pillar-medium-2.png'
import ppm1 from '../assets/payments-pillar-medium-1.png'
import ppm3 from '../assets/payments-pillar-medium-3.png'
import pps from '../assets/payments-pillar-small.png'
import ppl from '../assets/payments-pillar-large.png'
import pp1 from '../assets/payments-phone 1.png'

const Payments = () => {
  return (
    <div className='Payments'>
      <div className='pay-text ttext'>
        <h1 className='pay-title'>Payments</h1>
        <p className='pay-para'>
          Send and receive money with anyone, donate  to an important cause, or tip professionals. 
          Just enter a $cashtag, phone number, or 
          scan their  QR code to pay.
        </p>
      </div>

      <img className='pc' src={pc} alt="pc" />
      <img className='pc1' src={pc1} alt="pc1" />
      <img className='ppl' src={ppl} alt="ppl" />
      <img className='pp1' src={pp1} alt="pp1" />
      <img className='ppm' src={ppm} alt="ppm" />
      <img className='ppm2' src={ppm2} alt="ppm2" />
      <img className='ppm1' src={ppm1} alt="ppm1" />
      <img className='pc2' src={pc2} alt="pc2" />
      <img className='pps' src={pps} alt="pps" />
      <img className='ppm3' src={ppm3} alt="ppm3" />
    </div>
  )
}

export default Payments