import {
    REGISTER_USER
} from '../types';


export const authReducer = (state, action) => {
    switch(action.type){
        case REGISTER_USER:
            return state;
        default:
            return state;       
    }
}