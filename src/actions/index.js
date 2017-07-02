import store from '../Store';
import * as types from './actionTypes';


// success fetch
const onFetchSuccess = (games) => {
   return {
      type: types.SUCCESS_FETCH,
      games
   }
}

// fail fetch
const onFetchFail = (err) => {
   return {
      type: types.FAILED_FETCH,
      err
   }
}

// fetch data
export function fetchData() {
   const url = process.env.NODE_ENV === 'production' ? 'https://eu-west-1.console.aws.amazon.com/console/home?region=eu-west-1/games' : 'http://localhost:5000/games';
   return (dispatch) => {
      return fetch(url)
         .then(res => res.json())
         .then(games => dispatch(onFetchSuccess(games)))
         .catch(err => dispatch(onFetchFail(err)));
   }
}


// update games
const updateGames = (vote) => {
   const gameIndex = store.getState().navigationReducer.activeCardIndex;

   return {
      type: types.UPDATE_GAMES,
      gameIndex,
      vote
   }
}

// success vote
const onVoteSuccess = () => {
   return {
      type: types.SUCCESS_VOTE
   }
}


// fail vote
const onVoteFail = (err) => {
   return {
      type: types.FAILED_VOTE,
      err
   }
}

// place vote
export function placeVote(id, outcome) {
   const url = process.env.NODE_ENV === 'production' ? `https://eu-west-1.console.aws.amazon.com/console/home?region=eu-west-1/games/${id}/vote-${outcome}` : `http://localhost:5000/games/${id}/vote-${outcome}`;
   return (dispatch) => {
      return fetch(url, { method: 'POST' })
         .then(res => res.json())
         .then(game => {
            dispatch(onVoteSuccess());
            dispatch(updateGames(outcome));
         })
         .catch(err => dispatch(onVoteFail(err)));
   }
}



// go to next game
export function getNextGame(currentIndex) {
   let nextIndex;
   const totalNoGames = store.getState().dataReducer.games.length;

   if (currentIndex < totalNoGames - 1) {
      nextIndex = currentIndex + 1
   } else {
      nextIndex = 0;
   }

   return {
      type: types.NEXT_GAME,
      nextIndex
   }
}

// go to previous game
export function getPrevGame(currentIndex) {
   let prevIndex;
   const totalNoGames = store.getState().dataReducer.games.length;

   if (currentIndex > 0) {
      prevIndex = currentIndex - 1
   } else {
      prevIndex = totalNoGames - 1;
   }

   return {
      type: types.PREV_GAME,
      prevIndex
   }
}
