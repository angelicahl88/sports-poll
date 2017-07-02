import React, { Component } from 'react';

import Card from './components/card/Card';
import VoteOption from './components/vote-option/VoteOption';
import NavigationBtn from './components/navigation-btn/NavigationBtn';


class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         activeCardIndex: props.data.length / 2,
         voteOptions: [
            { text: 'Home' },
            { text: 'Draw' },
            { text: 'Away' }
         ]
      }
   }

   render() {
     return (
      <div className="app">
         <div className="card-container">

            {
               this.props.data.map((card, index) => (
                     <Card
                        key={ card.objectId }
                        id={ card.Id }
                        homeName={ card.homeName }
                        awayName={ card.awayName }
                        sport={ card.sport }
                        country={ card.country }
                        matchState={ card.state }
                        cardIndex={ index }
                        activeClass={ this.state.activeCardIndex === index ? 'active' : '' }
                     />
               ))
            }

         </div>
         <div className="vote-container">
            <h5 className="title light upper">Vote on match outcome</h5>

            {
               this.state.voteOptions.map(option => (
                  <VoteOption
                     key={ option.text }
                     text={ option.text }
                     handleClick="tbd"
                  />
               ))
            }

         </div>
         <div className="navigation">
            <NavigationBtn
               text="Prev"
               handleClick="tbd"
            />
            <NavigationBtn
               text="Next"
               handleClick="tbd"
            />
         </div>
      </div>
    );
  }
}

export default App;
