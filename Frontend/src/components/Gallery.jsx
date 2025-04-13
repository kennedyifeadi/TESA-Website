import React from "react";
import { DynamicBackground } from "./DynamicBackground";
import eventBG from "../assets/images/eventBG.jpg";
import subtract from "../assets/images/galleryBG.jpg";
import {
  motion
} from "framer-motion";
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";

export const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
  return (
    <div className="min-h-screen h-[300dvh] w-full flex flex-col relative">
      <DynamicBackground imageUrl={eventBG} />
      <div className="z-10 bg-[#000000f1] justify-between w-full h-full flex flex-col p-2 md:p-14 gap-2 md:gap-8">
        <h1
          style={{ fontFamily: '"Aldrich", sans-serif' }}
          className="w-full text-center text-white text-2xl md:text-4xl"
        >
          Events Gallery
        </h1>

        <div className="h-[90%] w-full flex-1 flex flex-col gap-4 md:gap-10 overflow-hidden">
          <div className="z-10 w-full aspect-[3/1] rounded-xl overflow-hidden">
            <img
              src={subtract}
              alt="Top Cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="z-10 w-full flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-2 h-full w-full mx-auto">
              {images.map((src, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index / 10 }}
                  viewport={{ once: true }}
                  key={`first-${index}`}
                  className={`rounded-lg overflow-hidden w-full h-full ${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={src}
                    alt={`image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="z-10 w-full flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-2 h-full w-full mx-auto">
              {images.map((src, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index / 10 }}
                  viewport={{ once: true }}
                  key={`second-${index}`}
                  className={`rounded-lg overflow-hidden w-full h-full ${
                    index === 0
                      ? "col-span-2 row-span-2"
                      : "col-span-1 row-span-1"
                  }`}
                >
                  <img
                    src={src}
                    alt={`image-${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center h-[4%] md:h-[5%]">
          <span className="w-[40%] md:w-[15%] lg:w-[12%] flex text-lg justify-center items-center cursor-pointer h-[50%] rounded-md text-white bg-[#007AFF]">
            View More
          </span>
        </div>
      </div>
    </div>
  );
};
