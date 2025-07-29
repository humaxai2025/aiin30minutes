import React, { useState } from 'react';
import { Settings, Type, Eye, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

const AccessibilityControls = ({ 
  fontSize, 
  setFontSize, 
  highContrast, 
  setHighContrast, 
  isDark, 
  onClearProgress,
  hasProgress 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClearProgress = () => {
    if (window.confirm('Are you sure you want to restart the tutorial? All progress will be lost.')) {
      onClearProgress();
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg transition-all duration-200 ${
          isDark 
            ? 'bg-gray-700 text-white hover:bg-gray-600' 
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
        aria-label="Accessibility Settings"
      >
        <Settings className="w-5 h-5" />
        {isOpen ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
      </button>

      {/* Controls Panel */}
      {isOpen && (
        <div className={`mt-2 p-4 rounded-lg shadow-xl min-w-64 transition-all duration-200 ${
          isDark 
            ? 'bg-gray-800 border border-gray-600' 
            : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Accessibility Settings
          </h3>
          
          {/* Font Size Control */}
          <div className="mb-4">
            <label className={`flex items-center text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Type className="w-4 h-4 mr-2" />
              Font Size
            </label>
            <div className="flex gap-2">
              {['small', 'normal', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 text-xs rounded transition-colors ${
                    fontSize === size
                      ? 'bg-blue-600 text-white'
                      : isDark
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size === 'small' ? 'A' : size === 'normal' ? 'A' : 'A'}
                  <span className="ml-1 text-xs">
                    {size === 'small' ? '⁻' : size === 'large' ? '⁺' : ''}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="mb-4">
            <label className={`flex items-center text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <Eye className="w-4 h-4 mr-2" />
              High Contrast
            </label>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full p-2 text-sm rounded transition-colors ${
                highContrast
                  ? 'bg-blue-600 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {highContrast ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {/* Clear Progress */}
          {hasProgress && (
            <div>
              <label className={`flex items-center text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Progress
              </label>
              <button
                onClick={handleClearProgress}
                className={`w-full p-2 text-sm rounded transition-colors ${
                  isDark
                    ? 'bg-red-700 text-white hover:bg-red-600'
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
              >
                Restart Tutorial
              </button>
            </div>
          )}

          {/* Continue from saved progress indicator */}
          {hasProgress && (
            <div className={`mt-3 p-2 text-xs rounded ${
              isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-700'
            }`}>
              ✓ Progress automatically saved
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;