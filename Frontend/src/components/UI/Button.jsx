import React, { useState } from "react";

export const Button = ({ title, icon, hoverIcon, color, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer flex justify-center items-center text-white w-[10rem] h-10 gap-2 font-medium rounded-md duration-500"
      style={{
        backgroundColor: isHovered ? hoverColor : color,
        transition: "background-color 0.5s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-[12px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
        {title}
      </span>
      <img src={isHovered ? hoverIcon : icon} alt="" className="w-5" />
    </div>
  );
};
