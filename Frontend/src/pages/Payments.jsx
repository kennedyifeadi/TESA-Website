import React from 'react';
import { AlertTriangle } from 'lucide-react'; // you can swap this with another icon

export const Payments = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-blue-50 text-gray-800 relative overflow-hidden px-4">
      {/* Decorative glow blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 opacity-30 rounded-full blur-2xl animate-ping" />

      {/* Main Content */}
      <div className="z-10 text-center max-w-md space-y-4">
        <div className="flex justify-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 animate-bounce" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Page Not Available
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          The Payments page is currently under construction. We’re working on something great. Stay tuned!
        </p>
        <div className="mt-6">
          <button
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-300/40"
            onClick={() => alert('We’ll let you know when it’s ready!')}
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};
