import './App.css';

// Router
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layouts/navbar.component';

// Pages
import HomePage from './components/pages/home-page.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
