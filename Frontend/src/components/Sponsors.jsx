import React from "react";
import { DynamicBackground } from "./DynamicBackground";
import handshake from "../assets/images/handshakeBG.jpg";
import { SponsorsContent } from "./SponsorsContent";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';

export const Sponsors = () => {
  return (
    <div className="relative p-14 flex justify-center items-center w-full h-screen">
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
          SponsorsContent.map((card, index) =>(
            <SwiperSlide key={index} className="flex flex-col justify-between w-full h-full">
              <div className="w-full h-[20%] flex justify-center items-center">
                <img src={card.image} alt="" className="w-[100px] h-[100px] border-2 object-cover border-white rounded-full" />
              </div>
              <div className="w-full h-max">
                <h1 className="w-full text-center font-bold text-white text-3xl">
                  {card.Name}
                </h1>
              </div>
              <div className="w-full flex justify-center h-max">
                <span className=" text-center text-[#007AFF] font-medium before:absolute relative before:top-[11px] before:right-[-10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#007AFF] after:top-[10px] after:left-[-10px] after:w-[6px] after:h-[6px] after:rounded-full after:bg-[#007AFF] after:absolute">
                  {
                    card.Position
                  }
                </span>
              </div>
              <div className="w-full h-max mt-8">
                <p className="w-full text-center text-[18px] tracking-wide leading-10 text-white">
                  {card.Content}
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
