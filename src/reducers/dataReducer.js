import * as types from '../actions/actionTypes';


const initialState = {
   isLoaded: false,
   loadError: false,
   errorMsg: null,
   games: null
};

export default function dataReducer(state = initialState, action) {
   switch (action.type) {

      case types.FAILED_FETCH : {
         return {
            ...state,
            loadError: true,
            isLoaded: false,
            errorMsg: action.err
         }
      }

      case types.SUCCESS_FETCH : {
         return {
            ...state,
            loadError: false,
            isLoaded: true,
            games: action.games
         }
      }

      case types.UPDATE_GAMES : {
         return {
            ...state,
            games: [
               ...state.games.slice(0, action.gameIndex),
               {
                  ...state.games[action.gameIndex],
                  outcomeVote: action.vote
               },
               ...state.games.slice(action.gameIndex + 1)               
            ]
         }
      }

      default : return state

   }
}
