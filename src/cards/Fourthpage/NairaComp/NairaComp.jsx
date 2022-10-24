import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'
import './NairaComp.css'
export default function NairaComp() {
  return (
    <div>
       <h1><TbCurrencyNaira/>|0</h1> 
       <div>
        <button>Add a note</button>
       </div>
    </div>
  )
}
