import { createStore, combineReducers , applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';

import { Comments } from './comments'
import { Promotions } from './promotions'
import { Leaders } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback } from './forms';
 

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
            leaders:Leaders,
            ...createForms({
                feedback : InitialFeedback
            })
        
        }),
        applyMiddleware(thunk, logger)    
    );

    return store;
}