import React from 'react'
import './home-page.styles.css';

// Components
import ContactForm from '../contact-form/contact-form.component';
import ContactList from '../contact-list/contact-list.component';
import ContactFilter from '../contact-filter/contact-filter.component';


const HomePage = () => {
  return (
    <div className='home-page'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  )
}

export default HomePage