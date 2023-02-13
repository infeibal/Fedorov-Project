import React from 'react';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import LogIn from './Components/LogIn';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

//Все хуки использованы в самих компонентах, а они в LogIn.js <-- !!!

function App() {
  return (
    <>
      <Router>
        <nav>
          <li><Link className='Penis' to="/">Home</Link></li>
          <li><Link className='Penis' to="/About">About</Link></li>
          <li><Link className='Penis Red' to="/logIn">Log in</Link><span className='gray' > ⤌ Use this</span></li>
        </nav>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/logIn" element={<LogIn title="Log In"/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
