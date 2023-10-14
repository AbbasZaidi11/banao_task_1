import React from 'react'
import '../Styles/Holder.css';
import Content from './Content';
import Location from './Location';
function Holder() {
  return (
    <div className='container'>
    <div className='content'>
        <Content/>
    </div>
    <div className='location'>
        <Location/>
    </div>
    </div>
  )
}

export default Holder