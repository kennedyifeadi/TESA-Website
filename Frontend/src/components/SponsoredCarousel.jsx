import { useState, useRef, useEffect } from "react";
import { SponsoredCard } from "./UI/SponsoredCard";
import advert1 from "../assets/images/advert1.png";
import advert2 from "../assets/images/advert2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';

const images = [advert1, advert2, advert1, advert2];

export const Carousel = () => {
 
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-md">
      <div className="w-full h-full text-white rounded-md">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full rounded-md"
      >
        {
          images.map((card, index) =>(
            <SwiperSlide key={index} className="flex flex-col justify-between w-full h-full">
              <SponsoredCard image={card}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  );
};
