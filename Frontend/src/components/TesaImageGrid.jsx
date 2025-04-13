import React from "react";
import { motion } from "framer-motion";

export const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 w-full h-full max-w-[800px] gap-2">
      {images.map((src, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: index / 10 }}
          viewport={{ once: true }}
          key={index}
          className={`rounded-lg overflow-hidden w-full h-full ${
            index === 0
              ? "sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"
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
  );
};
