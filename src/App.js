import './App.css';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Not from './components/Not';
import {  NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [stateMenu, changeStateMenu] = useState(false)
  // console.log(stateMenu);
  return (
    <div className="App">
      <header>
        <div className='container-navigation'>
          <i className={`navigation-btn ${stateMenu ? 'active-menu' : ''}`.trimEnd()} id="navigation-toggle" />
          <label  htmlFor='navigation-toggle' className='navigation-menu' onClick={() => changeStateMenu(!stateMenu)}>
            {/* non space */}
            <span>&nbsp;</span>
          </label>
          <div className='navigation-background'>
            &nbsp; 
          </div>
          <div className='blur' onClick={() => changeStateMenu(!stateMenu)}></div>
            <nav className='navigation-nav'>
              <ul>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/'>Inicio</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/about'>Sobre mi</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/jobs'>Trabajos</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/skills'>Habilidades</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/contact'>Contacto</NavLink></li>
              </ul>
            </nav>
        </div>
      </header> 

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
        {/* 404 soft */}
        <Route path='*' element={<Not/>} />
      </Routes>
    </div>
  );
}

export default App;
