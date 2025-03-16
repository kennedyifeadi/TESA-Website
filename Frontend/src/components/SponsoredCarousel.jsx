import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SponsoredCard } from "./UI/SponsoredCard";
import advert1 from "../assets/images/advert1.png";
import advert2 from "../assets/images/advert2.png";

const images = [advert1, advert2, advert1, advert2];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  const maxIndex = Math.ceil(images.length / 2) - 1; // Adjusted for 2-in-view
  const itemWidth = 50; // Since each item takes up 50% of width

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * itemWidth}%`,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    });
  }, [currentIndex, controls]);

  const handleDragEnd = (event, info) => {
    const dragThreshold = 50;
    let newIndex = currentIndex;

    if (info.offset.x < -dragThreshold && currentIndex < maxIndex) {
      newIndex += 1;
    } else if (info.offset.x > dragThreshold && currentIndex > 0) {
      newIndex -= 1;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden">
      {/* Image Wrapper */}
      <motion.div
        ref={carouselRef}
        className="flex w-full h-[90%] gap-2 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }} // Keeps it in bounds
        dragElastic={0.15} // Slight elasticity for better feel
        animate={controls}
        onDragEnd={handleDragEnd}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[50%] h-full flex justify-center">
            <SponsoredCard image={src} />
          </div>
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
