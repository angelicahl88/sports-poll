import React from 'react'

const VoteOption = ({ text }) => (
   <div className="vote" id={text.toLowerCase()}>
      <h4>{text}</h4>
   </div>
)

export default VoteOption;
