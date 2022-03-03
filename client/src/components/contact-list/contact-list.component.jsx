import React from 'react'

// Component
import ContactItem from '../contact-item/contact-item.component'


const ContactList = () => {
  const contacts = [
    {id: 1, name: 'Jill Johnson', email: 'jill.johnson@test.com', phone: '111-111-1111', type: 'personal'},
    {id: 2, name: 'Aaron Brooks', email: 'aaron.brooks@test.com', phone: '222-222-2222', type: 'professional'},
    {id: 3, name: 'Devin Harris', email: 'devin.harris@test.com', phone: '333-333-3333', type: 'personal'}
  ]

  return (
    <div>
      {
        contacts.map(contact => <ContactItem contact={contact} />)
      }
    </div>
  )
}

export default ContactList