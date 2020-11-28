import React from 'react';
import './About.scss';

import { FaHourglassStart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";


const About = () => {
  return(
    <section className='section-about' id='about'>
      <div className='section-about__box'>
        <h2 className='header--two margin-bottom-small'>Get food fast — not fast food.</h2>
        <p className='section-about__paragraph'>Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
      </div>
      <div className='row'>
        <div className='col-1-of-4'>
          <FaHourglassStart className='icon' />
          <h3 className='heading-three'>Up to 365 days/year</h3>
          <p className='paragraph'>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
        </div>
        <div className='col-1-of-4'>
          <FaClock className='icon' />
          <h3 className='heading-three'>Ready in 20 minutes</h3>
          <p className='paragraph'>All meals are fast and hastle free so it will be done in 20 minutes so that you do not ever have to miss a meal. Better yet, the meals taste amazing better than meals that are not healthy.</p>
        </div>
        <div className='col-1-of-4'>
          <FaLeaf className='icon' />
          <h3 className='heading-three'>100% organic</h3>
          <p className='paragraph'>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health and the environment, and it also tastes better!</p>
        </div>
        <div className='col-1-of-4'>
          <FaConciergeBell className='icon' />
          <h3 className='heading-three'>Order anything</h3>
          <p className='paragraph'>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
        </div>
      </div>
    </section>
  )
}

export default About;