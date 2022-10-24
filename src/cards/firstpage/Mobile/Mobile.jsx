import React from 'react'
import Header from './Header'
import './Mobile.css'
import MobileInput from '../../../Overview/Mobile/MobileInput/MobileInput'
import { FaSortAmountUp } from 'react-icons/fa'
import TodayOperation from './TodayOperation'
import YesterdayOperation from './YesterdayOperation'
export default function Mobile() {
  return (
    <div>
        <Header/>
        <div>
          <MobileInput/>
        </div>
        <div className='my-4 shadow mx-4 p-3'>
          <div className='d-flex justify-content-between'>
           <h4>Operation History</h4>
           <h5><FaSortAmountUp/><span>Sort by</span></h5>
          </div>
          <TodayOperation/>
          <YesterdayOperation/>
        </div>
    </div>
  )
}
