import React from 'react';

const ProgressBar = ({ currentSection, totalSections, isDark }) => {
  const progress = (currentSection / totalSections) * 100;
  
  return (
    <div className={`w-full rounded-full h-2 mb-6 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
      <div className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Section {currentSection} of {totalSections} • {Math.round(progress)}% Complete
      </div>
    </div>
  );
};

export default ProgressBar;