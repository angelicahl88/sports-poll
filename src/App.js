import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './components/card/Card';
import VoteOption from './components/vote-option/VoteOption';
import NavigationBtn from './components/navigation-btn/NavigationBtn';

import { getNextGame, getPrevGame, placeVote } from './actions/index';


class App extends Component {
   constructor(props) {
      super(props)

      this.state = {
         voteOptions: [
            { text: 'Home' },
            { text: 'Draw' },
            { text: 'Away' }
         ]
      }
   }

   _getMatchStateText(matchState) {
      const stateText = {
         'STARTED': 'Started',
         'NOT_STARTED': 'Not Started',
         'FINISHED': 'Finished'
      };

      return stateText[matchState].toUpperCase();
   }

   _placeVote(id, voteOutcome) {
      this.props.placeVote(id, voteOutcome);
   }

   _getNextGame() {
      this.props.getNextGame(this.props.activeCardIndex);
   }

   _getPrevGame() {
      this.props.getPrevGame(this.props.activeCardIndex);
   }

   _renderLoading() {
      return (
         <h3>Loading...</h3>
      )
   }

   _renderError() {
      console.error(this.props.errorMsg);
      return (
         <h3>There was an error in getting the data...</h3>
      );
   }

   _renderApp() {
      return (
         <div className="app">
            <div className="card-container">

               {
                  this.props.games.map((card, index) => (
                        <Card
                           key={ card.objectId }
                           id={ card.Id }
                           homeName={ card.homeName }
                           awayName={ card.awayName }
                           sport={ card.sport }
                           country={ card.country }
                           matchState={ card.state }
                           matchStateText={ this._getMatchStateText(card.state) }
                           cardIndex={ index }
                           activeClass={ this.props.activeCardIndex === index ? 'active' : '' }
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
                        voteStatus={ this.props.placedVote === option.text.toLowerCase() ? 'active' : '' }
                        handleClick={ () => this._placeVote(this.props.gameId, option.text.toLowerCase()) }
                     />
                  ))
               }

            </div>
            <div className="navigation">
               <NavigationBtn
                  text="Prev"
                  handleClick={ () => this._getPrevGame() }
               />
               <NavigationBtn
                  text="Next"
                  handleClick={ () => this._getNextGame() }
               />
            </div>
         </div>
      )
   }

   render() {
      return (
         <div>
            {  this.props.loadError ? this._renderError() :
               this.props.games != null ? this._renderApp() :
               this._renderLoading()
            }
         </div>
      );
  }
}


const mapStateToProps = (state) => {
   const { dataReducer, navigationReducer } = state;
   const gameId = dataReducer.games != null ? dataReducer.games[navigationReducer.activeCardIndex].id : null;
   const placedVote = dataReducer.games != null ? dataReducer.games[navigationReducer.activeCardIndex].outcomeVote : null;

   return {
      games: dataReducer.games,
      isLoaded: dataReducer.isLoaded,
      loadError: dataReducer.loadError,
      errorMsg: dataReducer.errorMsg,
      activeCardIndex: navigationReducer.activeCardIndex,
      gameId,
      placedVote
   }
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ getNextGame, getPrevGame, placeVote }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
