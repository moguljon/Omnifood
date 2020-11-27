import React from 'react';
import logo from './img/logo-white.png';
import './Header.scss';

const Header = () => {
  return(
    <header className='header'>
      <div className='header__logo--box'>
        <img src={logo}  alt='omnifood logo' className='header__logo'/>
      </div>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__items'>
            <a href='##' className='nav__a'>Food Delivery</a>
          </li>
          <li className='nav__items'>
            <a href='##' className='nav__a'>How it works</a>
          </li>
          <li className='nav__items'>
            <a href='##' className='nav__a'>Our cities</a>
          </li>
          <li className='nav__items'>
            <a href='##' className='nav__a'>Locations</a>
          </li>
        </ul>
      </nav>
      <div className='header__text--box'>
        <h1 className='heading-primary'>Goodbye junk food. Hello Healthy</h1>
        <a href='##' className='btn btn-primary'>I’m hungry </a>
        <a href='##' className='btn btn-ghost'>Show me more  </a>
      </div>
    </header>
  )
}

export default Header;