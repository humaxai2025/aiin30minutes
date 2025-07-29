import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className={`text-sm flex items-center justify-center space-x-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by</span>
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Human<span className="text-blue-600">X</span>AI
            </span>
            <span>for the learning community</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;