import React from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';

const Navigation = ({ currentSection, totalSections, onPrevious, onNext, canGoNext, isDark }) => {
  const getNextButtonContent = () => {
    if (currentSection >= totalSections) {
      return 'Complete!';
    }
    
    if (!canGoNext) {
      return (
        <>
          <Lock className="w-4 h-4 mr-2" />
          Complete Required Tasks
        </>
      );
    }
    
    return (
      <>
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </>
    );
  };

  return (
    <div className={`flex justify-between items-center mt-8 pt-6 border-t transition-colors duration-200 ${
      isDark ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <button
        onClick={onPrevious}
        disabled={currentSection === 0}
        className={`flex items-center px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
          isDark 
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </button>
      
      <div className={`text-sm text-center max-w-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {currentSection < totalSections ? (
          canGoNext ? (
            'Great progress! Keep going!'
          ) : (
            <span className="text-orange-500">
              Complete the required activities or quiz to continue
            </span>
          )
        ) : (
          'Tutorial Complete!'
        )}
      </div>
      
      <button
        onClick={onNext}
        disabled={currentSection >= totalSections || !canGoNext}
        className={`flex items-center px-4 py-2 rounded-lg disabled:cursor-not-allowed transition-colors ${
          canGoNext && currentSection < totalSections
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-400 text-white opacity-50'
        }`}
        title={!canGoNext ? 'Complete required tasks to continue' : ''}
      >
        {getNextButtonContent()}
      </button>
    </div>
  );
};

export default Navigation;