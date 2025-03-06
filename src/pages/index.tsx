import React from 'react';
import Carousel from '../components/Carousel';
import Card from '@/components/Card';
import Contact from '@/components/ContactForm';
function index() {
  return (
    <div className='bg-background text-text'>
      <Carousel />
      <Card />
      <Contact />
    </div>
  );
}

export default index;
