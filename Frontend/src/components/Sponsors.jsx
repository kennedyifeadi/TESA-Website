import React from "react";
import { DynamicBackground } from "./DynamicBackground";
import handshake from "../assets/images/handshakeBG.jpg";
import { CompaniesContent } from "./SponsorsContent";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';

export const Sponsors = () => {
  return (
    <div className="relative p-2 md:p-14 flex justify-center items-center w-full h-screen">
      <DynamicBackground imageUrl={handshake} />
      <div className="w-full h-full text-white">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {
          CompaniesContent.map((card, index) =>(
            <SwiperSlide key={index} className="flex flex-col justify-between w-full h-full">
              <div className="w-full h-[20%] flex justify-center items-center">
                <img src={card.logo} alt="" className="w-[100px] h-[100px] border-2 object-contain border-white bg-white rounded-full" />
              </div>
              <div className="w-full h-max">
                <h1 className="w-full text-center font-bold text-white text-2xl md:text-3xl">
                  {card.name}
                </h1>
              </div>
              <div className="w-full flex justify-center h-max">
                <span className=" text-center text-[#007AFF] font-medium before:absolute relative before:top-[11px] before:right-[-10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#007AFF] after:top-[10px] after:left-[-10px] after:w-[6px] after:h-[6px] after:rounded-full after:bg-[#007AFF] after:absolute">
                  {
                    card.focus
                  }
                </span>
              </div>
              <div className="w-full h-max mt-2 md:mt-8">
                <p className="w-full text-center text-[15px] md:text-[18px] md:tracking-wide md:leading-10 text-white">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  );
};
