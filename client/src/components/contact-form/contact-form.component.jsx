import React, { useState, useContext, useEffect } from 'react'
import './contact-form.styles.css';

// Context
import { ContactContext } from '../../context/contact/contactContext';

const ContactForm = () => {
  const { addContact, currentContact, editContact } = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  // Destructure contact object.
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if(currentContact !== null){
      setContact(currentContact);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [currentContact])


  // Methods ////////////////////////////////////////////
  const handleChange = ev => {
    setContact({
      ...contact,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault();

    if(currentContact === null){
       // If name AND email is NOT empty, then go ahead and make an Action to change the state.
      if(contact.name !== '' && contact.email !== ''){
        addContact(contact);
        setContact({
          name: '',
          email: '',
          phone: '',
          type: 'personal'
        });
      }
    } else if(currentContact){
      // If currentContact is NOT empty then UPDATE.
      editContact(contact);
    }
    
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
            {currentContact === null ? 'Add Contact' : 'Update Contact'}
          </button>   

          {currentContact &&  
            <button className='btn btn-clear'>
              Clear
            </button>}

        </div>
      </form>
    </div>
  )
}

export default ContactForm