import { useEffect, useState } from 'react';
import { Button } from './UI/Button';
import { PressNews } from './TesaImageGrid';


export const TesaPress = () => {
  const [posts, setPosts] = useState([]);
  const RSS_FEED = 'https://medium.com/feed/@tesapressui';
  const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED)}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_API);
        const data = await response.json();
        setPosts(data.items.slice(0, 4));
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='w-full min-h-[120dvh] h-max md:gap-4 px-2 md:px-8 flex flex-col items-center py-10'>
      <h1 className='text-black text-3xl md:text-5xl w-full text-center' style={{ fontFamily: '"Aldrich", sans-serif' }}>
        TESA Press
      </h1>
      <p className='text-[#392B1A] w-full text-center text-[15px]' style={{ fontFamily: '"Poppins", sans-serif' }}>
        Stories about students, events, research and innovation across the faculty
      </p>
      <div className='w-full h-[90%] flex justify-center'>
        <PressNews posts={posts} />
      </div>
      <div className='w-full h-[20%] flex justify-center items-center'>
        <a target='_blank' rel="noopener noreferrer" href='https://tesapressui.medium.com/'>
        <Button title={"Read More"} color={"#392B1A"} hoverColor={"#392B1A"} />
        </a>
      </div>
    </div>
  );
};
