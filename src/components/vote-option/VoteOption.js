import React from 'react'

const VoteOption = ({ text, handleClick, voteStatus }) => (
   <div
      className="vote"
      id={text.toLowerCase()}
      onClick={() => handleClick()}
   >
      <h4 className={voteStatus}>{text}</h4>
   </div>
)

export default VoteOption;
