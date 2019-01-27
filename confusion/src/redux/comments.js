import {COMMENTS} from '../shared/comments'

export const Comments =(state=COMMENTS,action) =>{
    switch(action.type)
    {
        default:
            return state; 
            /*this is the default action that this reducer fn will perfrom if it does not receive another action*/
    }
}