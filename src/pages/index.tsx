import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Card from '@/components/Card';
import Contact from '@/components/ContactForm';
import { CardData } from './cms';

function index() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  return (
    <div className='bg-background text-text'>
      <Carousel />
      <Card cards={cards} />
      <Contact />
    </div>
  );
}

export default index;
