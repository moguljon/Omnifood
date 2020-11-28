import React from 'react';
import './Contact.scss';
import image from './img/1.jpg';

const Contact = () => {
  return(
    <section className='section-contact' id='contact'>
      <div className='section-contact__box'>
        <h2 className='header--two margin-bottom-small'>Contact Us</h2>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <form className='section-contact__form' netlify='true' netlify-honeypot="bot-field" method='post'>
            <input type='hidden' name='form-name' value='contact' />
            <div className='section-contact__info'>
              <label className='section-contact__label'>Name</label>
              <input className='section-contact__input' type='text' name='name' id='name' placeholder='your name here'></input>
            </div>
            <div className='section-contact__info'>
              <label className='section-contact__label'>Email</label>
              <input className='section-contact__input' type='text' name='email' id='email' placeholder='your name here'></input>
            </div>
            <div className='section-contact__info'>
              <textarea className='section-contact__textarea' placeholder='message'></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>

        <div className='col-1-of-2 other-img-box'>
         <img src={image} alt='phone' className='section-contact__image' />
        </div>
        
      </div>

    </section>
  )
}

export default Contact;