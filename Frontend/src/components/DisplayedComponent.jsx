import React, { useContext, useState, useEffect } from 'react';
import { PageLoading } from './PageLoading';
import { NavBar } from './Nav';
import { AnimatedRoutes } from '../routes/AnimatedRoute';
import { NavContext } from '../context/NavContext';
import { Footer } from '../components/Footer'


export const DisplayedComponent = () => {
  const { isLoading } = useContext(NavContext);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (!isLoading) {
        setShowHero(true);
    }
  }, [isLoading]);

  return (
    <div>
      <PageLoading />
      <div className={`${isLoading ? 'hidden' : 'flex'} h-max flex-col relative overflow-x-hidden`}>
        <NavBar />
        {showHero && <AnimatedRoutes />}
        <Footer/>
      </div>
    </div>
  );
};
