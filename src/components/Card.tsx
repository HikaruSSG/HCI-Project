/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuPhilippinePeso } from "react-icons/lu";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Link from "next/link";

const cardData = [
  { title: "Dog Room", image: "https://picsum.photos/id/237/300", price: 1500000, location: "New York", floorArea: "100/m2", information: "4 bedrooms, 2 bathrooms, parking space" },
  { title: "Condo", image: "https://picsum.photos/id/238/300", price: 1500000, location: "New York", floorArea: "100/m2", information: "4 bedrooms, 2 bathrooms, parking space" },
  { title: "Garden", image: "https://picsum.photos/id/239/300", price: 1500000, location: "New York", floorArea: "100/m2", information: "4 bedrooms, 2 bathrooms, parking space" },
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

const CardProps = ({ image, price, location, floorArea, information, title }: CardProps) => {
  return (
    <Link href={{ pathname: "/contact", query: { unit: title } }} passHref>
      <div className="bg-background border border-primary shadow-lg rounded-lg mx-4 text-gray-800 cursor-pointer p-6 hover:shadow-xl hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center text-primary mb-3">
          <SiHomeassistantcommunitystore className="mr-2 text-2xl" />
          {title}
        </h1>
        <div className="mb-4">
          <img src={image} alt="Card Image" className="w-full h-48 object-cover rounded-lg shadow-md" />
        </div>
        <div className="border-b-2 border-primary my-2"></div>
        <div className="mb-4">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <LuPhilippinePeso className="inline-block mr-2 text-xl" /> Price
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">{price}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <FaMapLocationDot className="inline-block mr-2 text-xl" /> Location
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">{location}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <SlSizeFullscreen className="inline-block mr-2 text-xl" /> Floor Area
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">{floorArea}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-primary font-semibold">
                  <BsFillInfoSquareFill className="inline-block mr-2 text-xl" /> Information
                </td>
                <td className="py-2 px-4 text-primary">{information}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Link>
  );
};

const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid xl:grid-cols-3 m-6 md:grid-cols-2">
        {cardData.map((card, index) => (
          <CardProps key={index} image={card.image} price={card.price} location={card.location} floorArea={card.floorArea} information={card.information} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default Card;