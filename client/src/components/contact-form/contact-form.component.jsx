import React, { useState } from 'react'
import './contact-form.styles.css';

const ContactForm = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    type: ''
  });


  // Methods
  const handleSubmit = ev => {
    ev.preventDefault();
  }

  const handleChange = ev => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value
    });
  }


  return (
    <div className='contact-form'>
      <h2 className='text-center'>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={handleChange} placeholder='Name' name='name' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={handleChange} placeholder='Email' name='email' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' onChange={handleChange} placeholder='phone' name='phone' />
        </div>
        <div className='form-group'>
          <h4>Contact type:</h4>
          <input type='radio' name='type' value='personal' onChange={handleChange}/> Personal {' '}
          <input type='radio' name='type' value='professional' onChange={handleChange}/> Professional {' '}
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