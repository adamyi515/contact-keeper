import React, { useState, useContext } from 'react'

// Context
import { AuthContext } from '../../context/auth/authContext';

const AuthRegister = () => {
  const { registerUser } = useContext(AuthContext);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;


  // Methods ////////////////////////
  const handleSubmit = ev => {
    ev.preventDefault();
    if(name !== '' && email !== '' && password !== ''){ // If any of these fields are empty, then dont 
      if(password !== password2){
        console.log('Password does not match.')
      } else {
        registerUser({
          name, email, password
        });
      }
    } else {
      console.log('Must enter all fields.');
    }
  }

  const handleChange = ev => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value
    })
  }


  return (
    <div className='auth-register'>
        <h1 className='text-center'>Account Register</h1>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input type='text' name='name' className='form-control' value={name} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' className='form-control' value={email} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' className='form-control' value={password} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Confirm Password</label>
            <input type='password' name='password2' className='form-control' value={password2} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <button className='btn btn-submit'>Register</button>
          </div>
        </form>
    </div>
  )
}

export default AuthRegister