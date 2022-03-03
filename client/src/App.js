import './App.css';

// Router
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layouts/navbar.component';

// Pages
import HomePage from './components/pages/home-page.component';
import AboutPage from './components/pages/about-page-component';
import RegisterPage from './components/pages/register-page.component';
import Loginpage from './components/pages/login-page.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<Loginpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
