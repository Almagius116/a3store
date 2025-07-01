import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };
  return (
    <div className="relative w-[90%] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="w-full h-[400px] object-cover flex-shrink-0"
            alt={`Slide ${idx}`}
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full p-2 shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-black rounded-full p-2 shadow"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
