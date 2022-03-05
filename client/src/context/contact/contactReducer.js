import {
    ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, SET_CURRENT_CONTACT
} from '../types';

export const contactReducer = (state, action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case EDIT_CONTACT:
            return {
                ...state,
                currentContact: null,
                contacts: state.contacts.map(contact => {
                    if(contact.id === action.payload.id){
                        return action.payload;
                    }
                    return contact;
                })
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                currentContact: null
            }
        case SET_CURRENT_CONTACT:
            return {
                ...state,
                currentContact: action.payload
            }
        default:
            return state;
    }
}