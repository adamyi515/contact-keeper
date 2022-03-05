import React, { useState, useContext } from 'react'
import './contact-form.styles.css';

// Context
import { ContactContext } from '../../context/contact/contactContext';

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);


  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  // Destructure contact object.
  const { name, email, phone, type } = contact;


  // Methods
  const handleSubmit = ev => {
    ev.preventDefault();
    // If name AND email is NOT empty, then go ahead and make an Action to change the state.
    if(contact.name !== '' && contact.email !== ''){
      addContact(contact);
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }

  const handleChange = ev => {
    setContact({
      ...contact,
      [ev.target.name]: ev.target.value
    });
  }


  return (
    <div className='contact-form'>
      <h2 className='text-center'>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={handleChange} placeholder='Name' value={name} name='name' />
        </div>
        <div className='form-group'>
          <input type='email' className='form-control' onChange={handleChange} placeholder='Email' value={email} name='email' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={handleChange} placeholder='phone' value={phone} name='phone' />
        </div>
        <div className='form-group'>
          <h4>Contact type:</h4>
          <input type='radio' name='type' value='personal' onChange={handleChange} checked={type === 'personal'} /> Personal {' '}
          <input type='radio' name='type' value='professional' onChange={handleChange} checked={type === 'professional'} /> Professional {' '}
        </div>
        <div className='form-group'>
          <button className='btn btn-submit'>
            Add Contact
          </button>   
        </div>
      </form>
    </div>
  )
}

export default ContactForm