import React, { useContext, useEffect } from 'react'

// Context
import {ContactContext} from '../../context/contact/contactContext';

// Component
import ContactItem from '../contact-item/contact-item.component'


const ContactList = () => {
  const { contacts, filteredContacts } = useContext(ContactContext);



  return (
    <div>
      {
        filteredContacts === null ? (
          contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
        ) : (
          filteredContacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
        )
      }
    </div>
  )
}

export default ContactList