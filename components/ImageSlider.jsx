import Image from "next/image";
import React, { useState } from "react";

const ImageSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex lg:h-auto lg:w-[500px] relative  w-[400px] h-[60vh] items-center justify-center">
      <img
        src={images[currentIndex]}
        alt="DESIGN CONCEPTS"
        fill
        className="h-full lg:rounded-l-lg rounded-lg"
      />

      <div className="flex justify-between absolute top-1/2 lg:gap-[420px] gap-[300px]">
        <button
          className="bg-gradient-to-r from-gray-900 to-slate-600 text-white font-bold h-10 w-10 rounded-full"
          onClick={handlePreviousClick}
          title="Previous Render"
        >
          ❰
        </button>
        <button
          className="bg-gradient-to-r from-gray-900 to-slate-600 text-white font-bold h-10 w-10 rounded-full"
          onClick={handleNextClick}
          title="Next Render"
        >
          ❱
        </button>
      </div>
    </div>
  );
};

export default ImageSlide;
