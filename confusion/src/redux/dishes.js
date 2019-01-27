import {DISHES} from '../shared/dishes'

/*this reducer  fn wl only manage the state
of dishes*/
export const Dishes =(state=DISHES,action) =>{
    switch(action.type)
    {
        default:
            return state; 
            /*this is the default action that this reducer fn will perfrom if it does not receive another action*/
    }
}