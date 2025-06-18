import React, { useState, useRef, useEffect } from "react";
import { DynamicBackground } from "./DynamicBackground";
import eventBG from "../assets/images/eventBG.jpg";
import { motion } from "framer-motion";
import gallery1 from "../assets/images/Tesa1.jpg";
import gallery2 from "../assets/images/Tesa2.jpg";
import gallery3 from "../assets/images/Tesa3.jpg";
import gallery4 from "../assets/images/Tesa4.jpg";
import gallery5 from "../assets/images/Tesa5.jpg";
import gallery6 from "../assets/images/Tesa6.jpg";
import gallery7 from "../assets/images/Tesa7.jpg";
import gallery8 from "../assets/images/Tesa8.jpg";
import gallery9 from "../assets/images/Tesa9.jpg";
import gallery10 from "../assets/images/Tesa10.jpg";
import gallery11 from "../assets/images/Tesa11.jpg";
import gallery12 from "../assets/images/Tesa12.jpg";
import gallery13 from "../assets/images/Tesa13.jpg";
import gallery14 from "../assets/images/Tesa14.jpg";
import gallery15 from "../assets/images/TESA15.jpg";
import gallery16 from "../assets/images/TESA16.jpg";
import gallery17 from "../assets/images/TESA17.jpg";

// Lazy Image Component
const LazyImage = ({ src, alt, className, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {/* Placeholder/Skeleton */}
      {!isLoaded && (
        <div className="w-full h-full bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Actual Image - only load when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy" // Native lazy loading as fallback
          decoding="async"
        />
      )}
    </div>
  );
};

export const Gallery = () => {
  const images = [gallery1, gallery16, gallery3, gallery4, gallery5, gallery6, gallery7];
  const images2 = [
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
    gallery2,
    gallery17
  ];

  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <DynamicBackground imageUrl={eventBG} />
      <div className="z-10 bg-[#000000f1] w-full h-full flex flex-col p-2 md:p-14 gap-4 md:gap-8 py-8">
        <h1
          style={{ fontFamily: '"Aldrich", sans-serif' }}
          className="w-full text-center text-white text-2xl md:text-4xl mb-4 md:mb-8"
        >
          Events Gallery
        </h1>

        {/* Gallery Container */}
        <div className="w-full flex flex-col gap-6 md:gap-10">
          {/* First Gallery Grid */}
          <div className="w-full">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 auto-rows-[minmax(120px,200px)] md:auto-rows-[minmax(200px,300px)]">
              {images.map((src, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index / 10 }}
                  viewport={{ once: true }}
                  key={`first-${index}`}
                  className={`rounded-lg overflow-hidden ${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : index === 1 || index === 2
                      ? "col-span-2 row-span-1"
                      : "col-span-2 md:col-span-1 row-span-1"
                  }`}
                >
                  <LazyImage
                    src={src}
                    alt={`Event image ${index + 1}`}
                    className="w-full h-full"
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second Gallery Grid */}
          {images2.length > 0 && (
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 auto-rows-[minmax(120px,180px)] md:auto-rows-[minmax(180px,250px)]">
                {images2.map((src, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index / 10 }}
                    viewport={{ once: true }}
                    key={`second-${index}`}
                    className="rounded-lg overflow-hidden"
                  >
                    <LazyImage
                      src={src}
                      alt={`Event image ${index + images.length + 1}`}
                      className="w-full h-full"
                      index={index + images.length}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="w-full flex justify-center items-center mt-8">
          <span className="w-[40%] md:w-[15%] lg:w-[12%] min-w-[120px] flex text-lg justify-center items-center cursor-pointer h-[50px] rounded-md text-white bg-[#007AFF] hover:bg-[#0066cc] transition-colors duration-300">
            <a 
              href="https://drive.google.com/drive/folders/1jd4P7ngmKMRKV_vVm-1v1ST8HXDrI-ex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              View More
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};