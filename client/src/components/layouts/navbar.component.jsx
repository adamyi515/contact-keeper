import React from 'react'
import './navbar.styles.css';

// Router
import { Link } from 'react-router-dom';

const Navbar = ({ title = 'Default Title' }) => {
  return (
    <nav className='navbar'>
        <div className='navbar__brand'>
            <i className="fa-solid fa-id-card"></i> {title}
        </div>

        <ul className='navbar__menu'>
            <li>
                <Link className='link' to='/'>Home</Link>
            </li>
            <li>
                <Link className='link' to='/about'>About</Link>
            </li>
            <li>
                <Link className='link' to='/register'>Register</Link>
            </li>
            <li>
                <Link className='link' to='/login'>Login</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar