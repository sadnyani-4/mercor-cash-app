import React from 'react'
import './Banking.css'
import bc from '../assets/banking-column.png'
import bh1 from '../assets/banking-hole-1.png'
import bhole from '../assets/banking-hole.png'
import bt from '../assets/banking-tube.png'
import bt2 from '../assets/banking-track-2.png'
import bs2 from '../assets/banking-stairs-2.png'
import bs1 from '../assets/banking-stairs-1.png'
import br2 from '../assets/banking-ramp-2.png'
import br1 from '../assets/banking-ramp-1.png'
import bp from '../assets/banking-phone.png'
import bt1 from '../assets/banking-track-1.png'
import bm from '../assets/banking-monster.png'
import bcu from '../assets/banking-cubes.png'

const Banking = () => {
  return (
    <div className='Banking'>
        
      <div className='bank-text'>
        <h1 className='bank-title'>Banking</h1>
        <p className='bank-para'>
            Receive your paycheck, tax returns, and <br />
            other direct deposits up to two days early <br />
            using your Cash App routing <br />
            and account number.
        </p>
      </div>

      <img className='bhole' src={bhole} alt="bhole" />
      <img className='bc' src={bc} alt="bc" />
      <img className='bh1' src={bh1} alt="bh1" />
      <img className='bt' src={bt} alt="bt" />
      <img className='bt2' src={bt2} alt="bt2" />
      <img className='bs2' src={bs2} alt="bs2" />
      <img className='bs1' src={bs1} alt="bs1" />
      <img className='br2' src={br2} alt="br2" />
      <img className='br1' src={br1} alt="br1" />
      <img className='bt1' src={bt1} alt="bt1" />
      <img className='bp' src={bp} alt="bp" />
      <img className='bm' src={bm} alt="bm" />
      <img className='bcu' src={bcu} alt="bcu" />
    </div>
  )
}

export default Banking