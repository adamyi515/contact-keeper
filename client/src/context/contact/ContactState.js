import React, { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import { ContactContext } from './contactContext';
import { v4 as uuid } from 'uuid';
import {
    ADD_CONTACT, DELETE_CONTACT,
    SET_CURRENT_CONTACT, EDIT_CONTACT
} from '../types';


const ContactState = (props) => {
    const initialState = {
        contacts: [
            {id: 1, name: 'Jill Johnson', email: 'jill.johnson@test.com', phone: '111-111-1111', type: 'personal'},
            {id: 2, name: 'Aaron Brooks', email: 'aaron.brooks@test.com', phone: '222-222-2222', type: 'professional'},
            {id: 3, name: 'Devin Harris', email: 'devin.harris@test.com', phone: '333-333-3333', type: 'personal'}
        ],
        currentContact: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ACTIONS //////////////////////
    // Add Contact
    const addContact = newContact => {
        newContact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: newContact });
    }

    // Edit Contact
    const editContact = updatedContact => {
        dispatch({ type: EDIT_CONTACT, payload: updatedContact });
    }

    // Remove Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id});
    }

    // Edit Contact
    const setCurrentContact = contactToEdit => {
        dispatch({ type: SET_CURRENT_CONTACT, payload: contactToEdit });
    }


    return(
        <ContactContext.Provider value={{
            ...state,
            addContact,
            editContact,
            deleteContact,
            setCurrentContact
        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;