import React, { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import { ContactContext } from './contactContext';
import { v4 as uuid } from 'uuid';
import {
    ADD_CONTACT
} from '../types';


const ContactState = (props) => {
    const initialState = {
        contacts: [
            {id: 1, name: 'Jill Johnson', email: 'jill.johnson@test.com', phone: '111-111-1111', type: 'personal'},
            {id: 2, name: 'Aaron Brooks', email: 'aaron.brooks@test.com', phone: '222-222-2222', type: 'professional'},
            {id: 3, name: 'Devin Harris', email: 'devin.harris@test.com', phone: '333-333-3333', type: 'personal'}
          ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ACTIONS //////////////////////
    const addContact = newContact => {
        newContact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: newContact });
    }


    return(
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact
        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;