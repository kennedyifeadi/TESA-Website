import React from "react";
import { motion } from "framer-motion";

export const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full max-w-[800px] ">
      {images.map((src, index) => (
        <motion.div
        initial = {{opacity: 0, scale: 0.5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.8, delay: index / 10}}
        viewport={{once: true}}
          key={index}
          className={`rounded-lg overflow-hidden ${
            index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
        >
          <img src={src} alt={`image-${index}`} className="w-full h-full object-contain" />
        </motion.div>
      ))}
    </div>
  );
};
