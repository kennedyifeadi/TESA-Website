import React, { useEffect, useState } from 'react';
import { ExecutivesCard } from './UI/ExecutivesCard';
import { motion } from 'framer-motion';
import axios from 'axios';

// In-memory cache fallback
let executivesCache = null;
let cacheTimestamp = null;

// Cache duration: 3 months in milliseconds
const CACHE_DURATION = 3 * 30 * 24 * 60 * 60 * 1000;

// Loading skeleton component
const ExecutivesSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-10"></div>
    <div className="grid grid-cols-2 md:grid-cols-3 w-full md:px-6 h-max gap-4">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-4 space-y-4">
          <div className="h-32 bg-gray-600 rounded"></div>
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="h-3 bg-gray-600 rounded w-1/2"></div>
          <div className="h-3 bg-gray-600 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  </div>
);

export const Executives = () => {
  const [executives, setExecutives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isCacheValid = () => {
    if (!executivesCache || !cacheTimestamp) return false;
    const now = new Date().getTime();
    return now - cacheTimestamp < CACHE_DURATION;
  };

  const saveToCache = (data) => {
    try {
      const cacheData = {
        executives: data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem('executives_cache', JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  const getFromCache = () => {
    try {
      const cached = localStorage.getItem('executives_cache');
      if (cached) {
        const { executives } = JSON.parse(cached);
        return executives || [];
      }
    } catch (error) {
      console.warn('Failed to parse cache:', error);
    }
    return [];
  };

  const loadFromCache = () => {
    try {
      const cached = localStorage.getItem('executives_cache');
      if (cached) {
        const { executives, timestamp } = JSON.parse(cached);
        const now = new Date().getTime();
        if (now - timestamp < CACHE_DURATION) {
          executivesCache = executives;
          cacheTimestamp = timestamp;
          return true;
        } else {
          localStorage.removeItem('executives_cache');
        }
      }
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
      localStorage.removeItem('executives_cache');
    }
    return false;
  };

  const getExecutives = async () => {
    try {
      const response = await axios.get("https://tesa-website.onrender.com/users/getExco");
      if (response.data && response.data.data && response.data.data.executives) {
        return Array.isArray(response.data.data.executives) ? response.data.data.executives : [];
      } else {
        console.warn('Unexpected API response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error("Error fetching executives:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchExecutives = async () => {
      try {
        setLoading(true);
        setError(null);

        loadFromCache();

        if (isCacheValid()) {
          console.log('Loading executives from cache');
          const cachedExecs = getFromCache();
          setExecutives(cachedExecs);
          setLoading(false);
          return;
        }

        console.log('Fetching executives from API');
        const execs = await getExecutives();

        if (execs.length > 0) {
          setExecutives(execs);
          saveToCache(execs);
        } else {
          setError('No executives found');
        }
      } catch (error) {
        console.error('Failed to fetch executives:', error);
        setError('Failed to load executives. Please try again later.');

        if (executivesCache && executivesCache.length > 0) {
          console.log('Using expired cache as fallback');
          setExecutives(executivesCache);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchExecutives();
  }, []);

  const handleRetry = () => {
    executivesCache = null;
    cacheTimestamp = null;
    localStorage.removeItem('executives_cache');

    const fetchExecutives = async () => {
      try {
        setLoading(true);
        setError(null);
        const execs = await getExecutives();

        if (execs.length > 0) {
          setExecutives(execs);
          saveToCache(execs);
        } else {
          setError('No executives found');
        }
      } catch (error) {
        setError('Failed to load executives. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExecutives();
  };

  if (loading) {
    return (
      <div className='flex flex-col gap-2 py-10 w-full h-max bg-[#07101B] px-2 md:px-8 relative' id='executives'>
        <ExecutivesSkeleton />
      </div>
    );
  }

  if (error && executives.length === 0) {
    return (
      <div className='flex flex-col gap-2 py-10 w-full h-max bg-[#07101B] px-2 md:px-8 relative' id='executives'>
        <div className='w-full mb-10 h-max flex justify-center items-center'>
          <h1 className='text-white font-semibold w-full text-center text-3xl md:text-5xl h-full justify-center items-center' style={{ fontFamily: '"Aldrich", sans-serif' }}>
            Meet the Executives
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 py-20'>
          <p className="text-white text-lg text-center">{error}</p>
          <button 
            onClick={handleRetry}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-2 py-10 w-full h-max bg-[#07101B] px-2 md:px-8 relative' id='executives'>
      <div className='w-full mb-10 h-max flex justify-center items-center'>
        <h1 className='text-white font-semibold w-full text-center text-3xl md:text-5xl h-full justify-center items-center' style={{ fontFamily: '"Aldrich", sans-serif' }}>
          Meet the Executives
        </h1>
      </div>

      {error && (
        <div className='w-full mb-4 flex justify-center'>
          <p className="text-yellow-400 text-sm">
            {error} (Showing cached data)
          </p>
        </div>
      )}

      <div className='grid grid-cols-2 md:grid-cols-3 w-full md:px-6 h-max gap-4'>
        {executives.length > 0 ? (
          executives.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index / 5 }}
              viewport={{ once: true }}
              className='flex w-full h-full'
              key={card.id || index}
            >
              <ExecutivesCard 
                Email={"mailto:" + card.emailAddress} 
                Image={card.image} 
                Instagram={"https://instagram.com/" + card.instagramHandle} 
                Level={card.level} 
                Name={card.name} 
                Position={card.position} 
                Twitter={"https://x.com/" + card.twitterHandle} 
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full flex justify-center">
            <p className="text-white text-lg">No executives found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
