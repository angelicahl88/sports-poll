import React from 'react'

const NavigationBtn = ({ text, handleClick }) => (
   <div
      className="nav-btn"
      id={text.toLowerCase()}
      onClick={() => handleClick()}
   >
      <p>{text}</p>
   </div>
)

export default NavigationBtn;
