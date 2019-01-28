import { createStore, combineReducers , applyMiddleware} from 'redux';
import { Dishes } from './dishes';

import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
 

/*
so we have created 4 different reducers and 
now to combine them, we will use combineReducers 
method provided by redux
*/

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        
        }),
        applyMiddleware(thunk, logger)    
    );

    return store;
}