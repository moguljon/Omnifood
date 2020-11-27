import React from 'react';
import './Testimonials.scss';
import customer1 from './img/customer-1.jpg';
import customer2 from './img/customer-2.jpg';
import customer3 from './img/customer-3.jpg';


const Testimonials = () => {
  return(
    <section className='section-testimonials'>
      <div className='section-testimonials__box'>
        <h2 className='header--two margin-bottom-small'>Our Customers Can't Live without us</h2>
      </div>
      <div className='row section-testimonials__padding'>
        <div className='col-1-of-3'>
          <blockquote className='section-testimonials__blockquote'>
          Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
          <cite className='section-testimonials__cite'><img src={customer1} alt='customer1' className='section-testimonials__customers' />Alberto Duncan</cite>
          </blockquote>
        </div>
        <div className='col-1-of-3'>
          <blockquote className='section-testimonials__blockquote'>
          Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
          
          <cite className='section-testimonials__cite'>
            <img src={customer2} alt='customer2' className='section-testimonials__customers' /> Joana Silva
          </cite>
          </blockquote>
        </div>
        <div className='col-1-of-3'>
          <blockquote className='section-testimonials__blockquote'>
          I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
          <cite className='section-testimonials__cite'><img src={customer3} alt='customer3' className='section-testimonials__customers' />Milton Chapman</cite>
          </blockquote>
        </div>
      </div>
     
    </section>
  )
}

export default Testimonials;