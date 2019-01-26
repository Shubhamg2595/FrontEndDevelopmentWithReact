/*here i implement my Reducer function
Below imports are done because our main
comp. will now obtain state from Redux Store  

*/
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'


export const initialState={
    dishes:DISHES,
    comments: COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS
    /*this specifies the initial state of our react app*/
};

export const Reducer = (state = initialState,action) =>
{
     return state;
};