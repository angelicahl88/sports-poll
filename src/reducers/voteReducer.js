import * as types from '../actions/actionTypes';

const initialState = {
   voteSuccess: null
}

export default function voteReducer(state = initialState, action) {
   switch (action.type) {

      case types.FAILED_VOTE : {
         return {
            ...state,
            voteSuccess: false
         }
      }

      case types.SUCCESS_VOTE : {
         return {
            ...state,
            voteSuccess: true
         }
      }

      default : return state

   }
}
