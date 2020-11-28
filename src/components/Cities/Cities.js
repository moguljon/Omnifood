import React from 'react';
import './Cities.scss';
import berlin from './img/berlin.jpg';
import london from './img/london.jpg';
import lisbon from './img/lisbon-3.jpg';
import sanfran from './img/san-francisco.jpg';
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Cities = () => {
  return(
    <section className='section-cities' id='cities'>
      <div className='section-cities__box'>
        <h2 className='header--two margin-bottom-small'>We're currently in these cities</h2>
      </div>
      <div className='row section-cities__items'>
        <div className='col-1-of-4'>
          <img src={lisbon} alt='lisbon' className='section-cities__image'/>
          <h3 className='section-cities__header--three'>Lisbon</h3>
          <p className='section-cities__paragraph'><FaStar className='section-cities__icon' /> 1600+ happy eaters</p>
          <p className='section-cities__paragraph'><FaUser className='section-cities__icon' /> 60+ top chef</p>
          <p className='section-cities__paragraph'><FaTwitter className='section-cities__icon' /><a href='##' className='section-cities__hyperlink' > @omnifood</a></p>
        </div>
        <div className='col-1-of-4'>
          <img src={berlin} alt='berlin' className='section-cities__image'/>
          <h3 className='section-cities__header--three'>Berlin</h3>
          <p className='section-cities__paragraph'><FaStar className='section-cities__icon' /> 1600+ happy eaters</p>
          <p className='section-cities__paragraph'><FaUser className='section-cities__icon' /> 60+ top chef</p>
          <p className='section-cities__paragraph'><FaTwitter className='section-cities__icon' /><a href='##' className='section-cities__hyperlink' > @omnifood</a></p>
        </div>
        <div className='col-1-of-4'>
          <img src={london} alt='london' className='section-cities__image'/>
          <h3 className='section-cities__header--three'>London</h3>
          <p className='section-cities__paragraph'><FaStar className='section-cities__icon' /> 1600+ happy eaters</p>
          <p className='section-cities__paragraph'><FaUser className='section-cities__icon' /> 60+ top chef</p>
          <p className='section-cities__paragraph'><FaTwitter className='section-cities__icon' /><a href='##' className='section-cities__hyperlink' > @omnifood</a></p>
        </div>
        <div className='col-1-of-4'>
          <img src={sanfran} alt='san-francisco' className='section-cities__image'/>
          <h3 className='section-cities__header--three'>San Francisco</h3>
          <p className='section-cities__paragraph'><FaStar className='section-cities__icon' /> 1600+ happy eaters</p>
          <p className='section-cities__paragraph'><FaUser className='section-cities__icon' /> 60+ top chef</p>
          <p className='section-cities__paragraph'><FaTwitter className='section-cities__icon' /><a href='##' className='section-cities__hyperlink' > @omnifood</a></p>
        </div>
      </div>
    </section>
  )
}

export default Cities;