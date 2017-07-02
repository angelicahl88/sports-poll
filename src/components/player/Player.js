import React from 'react'

const Player = ({ title, playerName }) => (
   <div className={`player ${title.toLowerCase()}`}>
      <h6 className="title light upper">{title}</h6>
      <h2>{playerName}</h2>
   </div>
)

export default Player;
