import React from 'react'

import Player from '../player/Player';

const Card = ({ id, homeName, awayName, sport, country, matchState, matchStateText, cardIndex, activeClass }) => (
   <div className={`card cardIndex${cardIndex} ${activeClass}`}>
      <div className={`country-banner ${country.toLowerCase()}`} />

      <div className="matchState">
         <p>{matchStateText}</p>
         <span className={matchState.toLowerCase()} />
      </div>

      <div className="gameStats">
         <Player
            title="Home"
            playerName={homeName}
         />

         <p className="versus">vs</p>

         <Player
            title="Away"
            playerName={awayName}
         />
      </div>

      <div className={`sportImg ${sport.toLowerCase()}`} />

   </div>
)

export default Card;
