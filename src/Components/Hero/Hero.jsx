import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
          <p>New</p>
        </div>
        <p>Collections<br />For Everyone</p>
        <Link to='/womens' className="hero-latest-btn">
          Latest Collection
          <img src={arrow_icon} alt="" />
        </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};
