import React from 'react';
import './Signup.scss';
import { HashLink } from 'react-router-hash-link';

const Signup = () => {
  return(
    <section className='section-signup' id='signup'>
      <div className='section-signup__box'>
       <h2 className='header--two margin-bottom-small'>Start eating eating healthy today.</h2>
      </div>
      <div className='row'>
        <div className='col-1-of-3'>
          <div className='section-signup__card'> 
          
            <div className='section-signup__box--options'>
              <p className='section-signup__paragraph'>Premium</p>
              <h3 className='section-signup__header--three center'>$399</h3>
              <p className='section-signup__paragraph--two'>That's only 13.30$ per meal</p>
            </div>

            <div className='section-signup__box--options'>
              <ul className='section-signup__list'>
                <li className='section-signup__items'>1 meal every day</li>
                <li className='section-signup__items'>Order 24/7</li>
                <li className='section-signup__items'>Access to newest creactions</li>
                <li className='section-signup__items'>Free delivery</li>
              </ul>
            </div>

            <div className='section-signup__box--options'>
              <HashLink smooth to='#contact' className='section-signup__button btn btn-primary'>Signup now</HashLink>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='section-signup__card'> 

            <div className='section-signup__box--options'>
              <p className='section-signup__paragraph'>Pro</p>
              <h3 className='section-signup__header--three center'>$299</h3>
              <p className='section-signup__paragraph--two'>That's only $14.90 per meal</p>
            </div>

            <div className='section-signup__box--options'>
              <ul className='section-signup__list'>
                <li className='section-signup__items'>1 meal 10 days/month</li>
                <li className='section-signup__items'>Order 24/7</li>
                <li className='section-signup__items'>Access to newest creactions</li>
                <li className='section-signup__items'>Free delivery</li>
              </ul>
            </div>

            <div className='section-signup__box--options'>
              <HashLink smooth to='#contact' className='section-signup__button btn btn-ghost'>Signup now</HashLink>
            </div>
          </div>
        </div>
        <div className='col-1-of-3'>
          <div className='section-signup__card'> 

            <div className='section-signup__box--options'>
              <p className='section-signup__paragraph'>Starter</p>
              <h3 className='section-signup__header--three center'>$19</h3>
              <p className='section-signup__paragraph--two'>That's $1 per meal</p>
            </div>

            <div className='section-signup__box--options'>
              <ul className='section-signup__list'>
                <li className='section-signup__items'>1 meal</li>
                <li className='section-signup__items'>Order 24/7</li>
                <li className='section-signup__items'>Order from 8am - 12pm</li>
                <li className='section-signup__items'>Free Ebook</li>
              </ul>
            </div>

            <div className='section-signup__box--options'>
              <HashLink smooth to='#contact' className='section-signup__button btn btn-ghost'>Signup now</HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup;