import React from 'react'
import './contact-item.styles.css';



const ContactItem = ({ contact }) => {
    const { id, name, email, phone, type } = contact;

    return (
        <div className='contact-item'>

            <div className='contact-item__user-info-1'>
                <h4>{ name }</h4> <span className={type === 'professional' ? 'badge-primary' : 'badge-success'}>{ type }</span>
            </div>

            <div className='contact-item__user-info-2'>
                <div>
                    <i className="fa-solid fa-envelope"></i> { email } 
                </div>
                <div>
                    <i className="fa-solid fa-phone"></i> {' '} { phone }
                </div>
            </div>

            <div className='contact-item__button-container'>
                <button className='btn btn-standard'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    )
}

export default ContactItem