import React from 'react'
import { TbCurrencyNaira } from "react-icons/tb";
import './Orow1.css'
export default function Orow1() {
  return (
    <div id='Orow1'>
        <div>
        <img src="images/profile.png" alt="profile" />
        </div>

        <div>
            <h4>Michael Josh</h4>
            <p>+2348166963446</p>
            <div>
                <p>Your Balance</p>
                <p><TbCurrencyNaira/> 1000</p>
            </div>
        </div>
    </div>
  )
}
