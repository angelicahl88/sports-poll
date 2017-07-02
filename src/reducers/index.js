import { combineReducers } from 'redux';

import dataReducer from './dataReducer';
import navigationReducer from './navigationReducer';
import voteReducer from './voteReducer';


const rootReducer = combineReducers({
   dataReducer,
   navigationReducer,
   voteReducer
});

export default rootReducer;
