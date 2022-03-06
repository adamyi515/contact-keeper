import React, { useState, useRef, useContext } from 'react'
import './contact-filter.styles.css';

// Context
import { ContactContext } from '../../context/contact/contactContext';

const ContactFilter = () => {
    const { filterContacts, clearFilterContacts } = useContext(ContactContext);

    // const [ filterText, setFilterText ] = useState('');
    const filterText = useRef('');

    const handleChange = () => {
        if(filterText.current.value === ''){
            clearFilterContacts();
            filterText.current.value = '';
        } else {
            filterContacts(filterText.current.value);
        }
    }

    return (
        <div>
            <input className='contact-filter' type='text' ref={filterText} placeholder='Filter Contacts...'  onChange={handleChange}  />
        </div>
    )
}

export default ContactFilter;