import React from 'react';
import './How.scss';

import iphone from './img/app-iPhone.png';
import play from './img/download-app-android.png';

const How = () => {
  return(
    <section className='section-how'>
      <div className='section-about__box'>
        <h2 className='header--two margin-bottom-small'>How it works.</h2>
      </div>

      <div className='row'>
        <div className='col-1-of-2 center'>
          <img src={iphone}  alt='iphone' className='section-how__image' />
        </div>
        <div className='col-1-of-2'>
          <div className='section-how__side--two'>
            <div className='section-how__numbers'>1</div>
            <p className='section-how__paragraph'>Choose the subscription plan that best fits your needs and sign up today.</p>
          </div>
          <div className='section-how__side--two'>
            <div className='section-how__numbers' >2</div>
            <p className='section-how__paragraph'>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
          </div>
          <div className='section-how__side--two'>
            <div className='section-how__numbers' >3</div>
            <p className='section-how__paragraph'>Enjoy your meal after less than 20 minutes. See you the next time!</p>
          </div>
          <div className='center'>
            <a href='##'><img src={play} alt='download' className='section-how__play margin-top-small' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How;