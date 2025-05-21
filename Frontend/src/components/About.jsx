import React from 'react';
import supportTesa from "../assets/icons/hand-coin-fill.png";
import { Button } from './UI/Button';
import { Award, Code, Compass, Lightbulb, LucideAward, Rocket, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className='w-full h-max bg-gradient-to-b from-white to-[#F0F5FF] px-2 md:px-8 py-16'>
      {/* Section Header with colored background */}
      <div className='w-full max-w-7xl mx-auto mb-10'>
        <div className='bg-[#392B1A] rounded-lg py-6 px-8 text-center shadow-lg'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>About TESA</h2>
          <p className='text-gray-100'>Get to know the Technology and Engineering Student Association</p>
        </div>
      </div>
      
      <div className='w-full h-max px-4 md:px-6 flex flex-col items-center gap-8 max-w-7xl mx-auto'>
        {/* About TESA Section */}
        <div className='w-full bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <h2 className='text-2xl md:text-3xl font-bold text-[#392B1A] mb-4'>Who We Are</h2>
          <p className='text-gray-700 mb-4'>
            Welcome to the Technology and Engineering Student Association (TESA)! We're a dynamic community of students passionate about technology and engineering.
          </p>
          <p className='text-gray-700 mb-4'>
            The Technology and Engineering Student Association (TESA) is the premier body uniting students passionate about innovation, technology, and engineering excellence. With a rich history spanning decades, TESA fosters a thriving community dedicated to academic growth, technical skill development, and industry connections.
          </p>
          <p className='text-gray-700'>
            Structured to ensure representation across various engineering disciplines, TESA is led by an Executive Council, supported by specialized teams handling branding, communications, and strategic initiatives. Our membership spans multiple engineering departments, empowering students through networking, mentorship, workshops, and technical competitions.
          </p>
        </div>
        
        {/* Vision and Mission Section */}
        <div className='w-full flex flex-col md:flex-row gap-6'>
          {/* Vision Card */}
          <div className='w-full md:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <div className='absolute -top-5 left-6 bg-[#392B1A] p-3 rounded-full shadow-md'>
              <Rocket size={24} color="white" />
            </div>
            <h3 className='text-xl font-bold text-[#392B1A] mb-4 mt-4'>Our Vision</h3>
            <p className='text-gray-700'>
              To build a future-focused engineering community that fosters innovation, academic excellence, and leadership.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className='w-full md:w-1/2 bg-white rounded-2xl shadow-md border border-gray-200 p-6 relative hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <div className='absolute -top-5 left-6 bg-[#392B1A] p-3 rounded-full shadow-md'>
              <Compass size={24} color="white" />
            </div>
            <h3 className='text-xl font-bold text-[#392B1A] mb-4 mt-4'>Our Mission</h3>
            <ul className='text-gray-700 list-disc pl-5'>
              <li className='mb-2'>Enhance student welfare and academic success.</li>
              <li className='mb-2'>Create a collaborative learning environment through mentorship and networking.</li>
              <li className='mb-2'>Lead with integrity, sustainability, and student-centered governance.</li>
            </ul>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className='w-full bg-white rounded-2xl shadow-md border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <h3 className='text-xl font-bold text-[#392B1A] mb-4'>Core Values</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            <div className='flex items-start gap-3'>
              <Award className='text-[#007AFF] mt-1 flex-shrink-0' size={20} />
              <div>
                <p className='font-bold'>Excellence</p>
                <p className='text-sm text-gray-700'>Striving for the highest standards.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-3'>
              <Lightbulb className='text-[#007AFF] mt-1 flex-shrink-0' size={20} />
              <div>
                <p className='font-bold'>Innovation</p>
                <p className='text-sm text-gray-700'>Using technology to solve problems.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-3'>
              <Users className='text-[#007AFF] mt-1 flex-shrink-0' size={20} />
              <div>
                <p className='font-bold'>Community</p>
                <p className='text-sm text-gray-700'>Encouraging unity and support.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-3'>
              <Compass className='text-[#007AFF] mt-1 flex-shrink-0' size={20} />
              <div>
                <p className='font-bold'>Leadership</p>
                <p className='text-sm text-gray-700'>Acting with vision and responsibility.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-3'>
              <Code className='text-[#007AFF] mt-1 flex-shrink-0' size={20} />
              <div>
                <p className='font-bold'>Service</p>
                <p className='text-sm text-gray-700'>Committed to transparency and empathy.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Support Button */}
        <Button 
          title={"Support TESA"} 
          width={"20px"} 
          color={'#007AFF'} 
          icon={supportTesa} 
          hoverColor={"#005FCC"} 
          hoverIcon={supportTesa}
          className="hover:shadow-lg transition-all duration-300"
        />
      </div>
    </div>
  );
};