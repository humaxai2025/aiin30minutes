import React, { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';

const Activity = ({ title, description, onComplete, completed, isDark }) => {
  const [response, setResponse] = useState('');
  
  const handleComplete = () => {
    if (response.trim()) {
      onComplete(response);
    }
  };
  
  return (
    <div className={`p-6 rounded-lg mb-6 ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
      <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <Play className={`w-4 h-4 mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        {title}
      </h4>
      <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
      {!completed ? (
        <div>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your thoughts here..."
            className={`w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            rows="3"
          />
          <button
            onClick={handleComplete}
            disabled={!response.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Complete Activity
          </button>
        </div>
      ) : (
        <div className="flex items-center text-green-600">
          <CheckCircle className="w-4 h-4 mr-2" />
          Activity completed!
        </div>
      )}
    </div>
  );
};

export default Activity;