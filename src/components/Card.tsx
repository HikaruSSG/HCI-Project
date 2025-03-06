/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuPhilippinePeso } from "react-icons/lu";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const cardData = [
  {
    title: "Dog Room",
    image: "https://picsum.photos/id/237/300",
    price: 1500000,
    location: "New York",
    floorArea: "100/m2",
    information: "4 bedrooms, 2 bathrooms, parking space",
  },
  {
    title: "Condo",
    image: "https://picsum.photos/id/238/300",
    price: 1500000,
    location: "New York",
    floorArea: "100/m2",
    information: "4 bedrooms, 2 bathrooms, parking space",
  },
  {
    title: "Garden",
    image: "https://picsum.photos/id/239/300",
    price: 1500000,
    location: "New York",
    floorArea: "100/m2",
    information: "4 bedrooms, 2 bathrooms, parking space",
  },
];

interface CardProps {
  image?: string;
  price?: number;
  location?: string;
  floorArea?: string;
  information?: string;
  title?: string;
  index?: number;
}

import Link from 'next/link';

const CardProps = ({ image, price, location, floorArea, information, title }: CardProps) => {
  // Assuming 'index' is passed as a prop to CardProps
  return (
    <Link href={{ pathname: '/contact', query: { unit: title } }} passHref>
      <div className="border border-primary shadow-text rounded-lg mx-4 text-text cursor-pointer">
        <h1 className=' text-3xl p-2 text-center flex items-center justify-center text-primary'><SiHomeassistantcommunitystore className='mr-1' />
          {title}
        </h1>
        <div className='m-4'>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src={image} alt="Card Image" className="w-full h-48 object-cover rounded-md" />
        </div>
        <div className='m-4'>
          <div className="flex items-center mb-1 text-primary justify-center text-2xl">
            <LuPhilippinePeso className="mr-1" />
            <span>{price}</span>
          </div>
          <div className="flex items-center mb-1 text-primary">
            <FaMapLocationDot className="mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mb-1 text-primary">
            <SlSizeFullscreen className="mr-1" />
            <span>{floorArea}</span>
          </div>
          <div className="flex items-center text-primary">
            <BsFillInfoSquareFill className="mr-1" />
            <span>{information}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}


const Card = () => {
  return (
    <div className='grid xl:grid-cols-3 m-6 md:grid-cols-2'>
      {cardData.map((card, index) => (
        <CardProps
          key={index}
          image={card.image}
          price={card.price}
          location={card.location}
          floorArea={card.floorArea}
          information={card.information}
          title={card.title}
          index={index}
        />
      ))}
    </div>
  );
};



export default Card
