import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Components
import { BrowserRouter } from 'react-router-dom';

// Context
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
  <AuthState>
    <ContactState>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ContactState>
  </AuthState>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
