import React, { useReducer } from 'react';
import { contactReducer } from './contactReducer';
import { ContactContext } from './contactContext';


const ContactState = (props) => {
    const initialState = {
        contacts: []
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ACTIONS //////////////////////



    return(
        <ContactContext.Provider value={{
            contacts: state.contacts
        }}>
            { props.children }
        </ContactContext.Provider>
    )
}

export default ContactState;