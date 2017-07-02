import * as types from '../actions/actionTypes';


const initialState = {
   activeCardIndex: 0
};

export default function navigationReducer(state = initialState, action) {
   switch (action.type) {

      case types.NEXT_GAME : {
         return {
            ...state,
            activeCardIndex: action.nextIndex
         }
      }

      case types.PREV_GAME : {
         return {
            ...state,
            activeCardIndex: action.prevIndex
         }
      }

      default : return state

   }
}
