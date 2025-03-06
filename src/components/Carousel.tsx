/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    "https://picsum.photos/id/237/400",
    "https://picsum.photos/id/238/400",
    "https://picsum.photos/id/239/400",
  ];

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [goToNext, images.length]);

  return (
    <section>
      <div
        style={{
          width: screenWidth,
          height: "300px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {images.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index }`}
            className="absolute transition-transform duration-500"
            style={{
              width: screenWidth,
              height: "300px",
              objectFit: "fill",
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
            }}
          />
        ))}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-secondary/50 text-text font-bold py-2 px-4 rounded-full m-1 z-10 bg-transparent opacity-0 hover:opacity-50"
          onClick={goToPrevious}
        >
          <MdOutlineArrowBackIosNew />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-secondary/50 text-text font-bold py-2 px-4 rounded-full m-2 z-10 bg-transparent opacity-0 hover:opacity-50"
          onClick={goToNext}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
