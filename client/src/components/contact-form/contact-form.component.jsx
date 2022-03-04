import React from 'react'
import './contact-form.styles.css';

const ContactForm = () => {
  






  return (
    <div className='contact-form'>
      <h2 className='text-center'>Add Contact</h2>
      <form>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Name' name='name' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Email' name='email' />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='phone' name='phone' />
        </div>
        <div className='form-group'>
          <h4>Contact type:</h4>
          <input type='radio' name='type' value='personal'/> Personal {' '}
          <input type='radio' name='type' value='professional'/> Professional {' '}
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