/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { LuPhilippinePeso } from "react-icons/lu";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Link from "next/link";

const cardData = [
  {
    title: "Startup Office Space",
    image: "https://pics.craiyon.com/2024-09-14/bFZd55MTSVio9iqvnjXQrQ.webp",
    price: 8000,
    location: "Manila",
    floorArea: "50/m2",
    information: "Ideal for startups, high growth potential",
  },
  {
    title: "Boutique Retail Condo",
    image: "https://img.craiyon.com/2025-03-08/zOVacECIRsq0sN3E9ACO9w.webp",
    price: 9500,
    location: "Cebu",
    floorArea: "60/m2",
    information: "Prime retail location, high foot traffic",
  },
  {
    title: "Small Business House",
    image: "https://img.craiyon.com/2025-03-08/fAesBLWXR1in224bVBgDvg.webp",
    price: 7000,
    location: "Davao",
    floorArea: "45/m2",
    information: "Perfect for small businesses, quiet area",
  },
  {
    title: "Creative Studio Space",
    image: "https://pics.craiyon.com/2024-09-09/M6GvNXFXQ1WHgeh9pgVBIQ.webp",
    price: 6000,
    location: "Quezon City",
    floorArea: "35/m2",
    information: "Great for creative ventures, close to shops",
  },
  {
    title: "Tech Startup Condo",
    image: "https://pics.craiyon.com/2024-09-17/Z11EYIFUQQyKpczaPKm3QQ.webp",
    price: 8500,
    location: "Makati",
    floorArea: "55/m2",
    information: "Perfect for tech startups, central location",
  },
  {
    title: "Online Business Apartment",
    image: "https://pics.craiyon.com/2024-09-04/hOGPeGyATCynIem7o4Udyg.webp",
    price: 7500,
    location: "Baguio",
    floorArea: "40/m2",
    information: "Ideal for online businesses, cool climate",
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

const CardProps = ({
  image,
  price,
  location,
  floorArea,
  information,
  title,
}: CardProps) => {
  return (
    <Link href={{ pathname: "/contact", query: { unit: title } }} passHref>
      <div className="bg-background border border-primary shadow-lg rounded-lg m-4 text-gray-800 cursor-pointer p-6 hover:shadow-xl hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center text-primary mb-3">
          <SiHomeassistantcommunitystore className="mr-2 text-2xl" />
          {title}
        </h1>
        <div className="mb-4">
          <img
            src={image}
            alt="Card Image"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="border-b-2 border-primary my-2"></div>
        <div className="mb-4">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <LuPhilippinePeso className="inline-block mr-2 text-xl" />{" "}
                  Price
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">
                  {price}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <FaMapLocationDot className="inline-block mr-2 text-xl" />{" "}
                  Location
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">
                  {location}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-primary text-primary font-semibold">
                  <SlSizeFullscreen className="inline-block mr-2 text-xl" />{" "}
                  Floor Area
                </td>
                <td className="py-2 px-4 border-b border-primary text-primary">
                  {floorArea}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-primary font-semibold">
                  <BsFillInfoSquareFill className="inline-block mr-2 text-xl" />{" "}
                  Information
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
      <div className="grid m-2">
        {cardData.map((card, index) => (
          <CardProps
            key={index}
            image={card.image}
            price={card.price}
            location={card.location}
            floorArea={card.floorArea}
            information={card.information}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
