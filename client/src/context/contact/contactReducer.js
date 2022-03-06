import {
    ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CURRENT_CONTACT,
    FILTER_CONTACTS, CLEAR_FILTER
} from '../types';

export const contactReducer = (state, action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case UPDATE_CONTACT:
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
        case FILTER_CONTACTS:
            return {
                ...state,
                filteredContacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload))
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredContacts: null
            }
        default:
            return state;
    }
}