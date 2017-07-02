import React from 'react'

const NavigationBtn = ({ text }) => (
   <div className="nav-btn" id={text.toLowerCase()}>
      <p>{text}</p>
   </div>
)

export default NavigationBtn;
