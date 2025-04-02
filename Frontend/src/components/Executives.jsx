import React, { useEffect, useState } from 'react';
import { ExecutivesCard } from './UI/ExecutivesCard';
import { motion } from 'framer-motion';
import axios from 'axios';

export const Executives = () => {
  const [executives, setExecutives] = useState([]); 

  const getExecutives = async () => {
    try {
      const response = await axios.get("https://tesa-website.onrender.com/users/getExco");
      return Array.isArray(response.data.data.executives) ? response.data.data.executives : []; 
    } catch (error) {
      console.error("Error fetching executives:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchExecutives = async () => {
      try {
        const storedExecutives = localStorage.getItem("executives");
        const lastUpdated = localStorage.getItem("executives_last_updated");

        const now = new Date().getTime();
        const twentyFourHours = 1000 ;

        if (storedExecutives && lastUpdated && now - lastUpdated < twentyFourHours) {
          const parsedExecutives = JSON.parse(storedExecutives);
          if (Array.isArray(parsedExecutives)) {
            setExecutives(parsedExecutives);
            return;
          }
        }

        const data = await getExecutives();
        setExecutives(data);
        localStorage.setItem("executives", JSON.stringify(data));
        localStorage.setItem("executives_last_updated", now.toString());
      } catch (error) {
        console.error("Error processing executives:", error);
      }
    };

    fetchExecutives();
  }, []);

  return (
    <div className='flex flex-col gap-2 py-10 w-full h-max bg-[#07101B] px-2 md:px-8 relative'>
      <div className='w-full mb-10 h-max flex justify-center items-center'>
        <h1 className='text-white font-semibold w-full text-center text-3xl md:text-5xl h-full justify-center items-center' style={{ fontFamily: '"Aldrich", sans-serif' }}>
          Meet the Executives
        </h1>
      </div>
      <div className='flex flex-wrap justify-center w-full md:px-6 h-max gap-4'>
        {
          executives.length > 0 ? (
            executives.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index / 5 }}
                viewport={{ once: true }}
                className='flex w-max h-max'
                key={index}
              >
                <ExecutivesCard Email={card.Email} Image={card.image} Instagram={card.Instagram} Level={card.level} Name={card.name} Position={card.position} Twitter={card.Twitter} />
              </motion.div>
            ))
          ) : (
            <p className="text-white text-lg">No executives found.</p>
          )
        }
      </div>
    </div>
  );
};
