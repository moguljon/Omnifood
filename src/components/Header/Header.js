import React from 'react';
import logo from './img/logo-white.png';
import './Header.scss';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return(
    <header className='header'>
      <div className='header__logo--box'>
        <img src={logo}  alt='omnifood logo' className='header__logo'/>
      </div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__items'>
            <HashLink smooth to='#about' className='nav__a'>Food Delivery</HashLink>
          </li>
          <li className='nav__items'>
            <HashLink smooth to='#how' className='nav__a'>How It works</HashLink>
          </li>
          <li className='nav__items'>
            <HashLink smooth to='#cities' className='nav__a'>Our Cities</HashLink>
          </li>
          <li className='nav__items'>
            <HashLink smooth to='#signup' className='nav__a'>Signup</HashLink>
          </li>
        </ul>
      </nav>
      <div className='header__text--box'>
        <h1 className='heading-primary'>Goodbye junk food. Hello Healthy</h1>
          <HashLink smooth to='#grid' className='btn btn-primary'>I'm hungry</HashLink>
          <HashLink smooth to='#contact' className='btn btn-ghost'>Show me more</HashLink>
      </div>
    </header>
  )
}

export default Header;