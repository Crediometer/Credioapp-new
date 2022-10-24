import React from 'react'
import Firstrow from './firstrow/Firstrow'
import Secondrow from './secondrow/Secondrow'
import './SecondCol.css'
export default function SecondCol() {
  return (
    <div id='second-col'>
        <Firstrow/>
        <Secondrow/>
    </div>
  )
}
