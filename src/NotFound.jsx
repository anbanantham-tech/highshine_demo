import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1A1025] flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-[#A874FF] mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-400 text-lg mb-10 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 rounded-full bg-[#F5A623] text-[#1A1025] font-semibold hover:bg-[#F5A623]/90 transition-colors shadow-lg shadow-[#F5A623]/20"
      >
        Go to About Page
      </Link>
    </div>
  );
};

export default NotFound;
