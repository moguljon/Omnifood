import React from 'react';
import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'
import image5 from './img/5.jpg'
import image6 from './img/6.jpg'
import image7 from './img/7.jpg'
import image8 from './img/8.jpg'

import './Grid.scss';

const Grid = () => {
  return(
   <section className='section-grid' id='grid'>

     <ul className='section-grid__list'>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image1} alt='Korean bibimbap with egg and vegetables' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image2} alt= 'Simple italian pizza with cherry tomatoes' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image3} alt= 'Chicken breast steak with vegetables' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image4} alt= 'Autumn pumpkin soup' className='section-grid__image' />
         </figure>
       </li>
     </ul>

     <ul className='section-grid__list'>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image5} alt= 'Paleo beef steak with vegetables' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image6} alt= 'Healthy baguette with egg and vegetables' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image7} alt= 'Burger with cheddar and bacon' className='section-grid__image' />
         </figure>
       </li>
       <li className='section-grid__item'>
         <figure className='section-grid__figure'>
           <img src={image8} alt= 'Granola with cherries and strawberries' className='section-grid__image' />
         </figure>
       </li>
     </ul>
   </section> 
  )
}

export default Grid;