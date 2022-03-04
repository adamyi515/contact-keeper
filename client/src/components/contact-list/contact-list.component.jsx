import React, { useContext } from 'react'

// Context
import {ContactContext} from '../../context/contact/contactContext';

// Component
import ContactItem from '../contact-item/contact-item.component'


const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      {
        contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)
      }
    </div>
  )
}

export default ContactList