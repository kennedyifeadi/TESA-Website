import React from "react";

export const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-full max-w-[800px] mx-auto">
      {images.map((src, index) => (
        <div
          key={index}
          className={`rounded-lg overflow-hidden ${
            index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
        >
          <img src={src} alt={`image-${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};
