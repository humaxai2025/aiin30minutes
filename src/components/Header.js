import React from 'react';
import { Moon, Sun, Brain } from 'lucide-react';

const Header = ({ isDark, toggleTheme }) => {
  return (
    <header className={`${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-b transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: HumanXAI Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* HumanXAI Logo */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-600' : 'bg-blue-100'}`}>
                <Brain className={`w-6 h-6 ${isDark ? 'text-white' : 'text-blue-600'}`} />
              </div>
              
              {/* Brand Name */}
              <div className="flex items-center space-x-2">
                <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Human<span className="text-blue-600">X</span>AI
                </span>
                <span className={`text-sm px-2 py-1 rounded-full ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  Learning
                </span>
              </div>
            </div>
            
            {/* Separator */}
            <div className={`w-px h-8 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
            
            {/* Tutorial Title */}
            <div>
              <h1 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AI in 30 Minutes
              </h1>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Interactive Tutorial
              </p>
            </div>
          </div>
          
          {/* Right: Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;