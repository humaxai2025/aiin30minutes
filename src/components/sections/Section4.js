import React from 'react';
import { Zap } from 'lucide-react';
import Activity from '../Activity';

const Section4 = ({ onActivityComplete, activities, isDark }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <Zap className={`w-6 h-6 mr-3 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
      Section 4: AI in Your Daily Life (5 minutes)
    </h2>
    
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
          <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`mr-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>🏠</span>
            Personal Life
          </h4>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>📱 Smartphones: Voice assistants, photo organization</li>
            <li>🏡 Home: Smart thermostats, security cameras</li>
            <li>🚗 Transportation: GPS navigation, ride-sharing</li>
          </ul>
        </div>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
          <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`mr-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>💼</span>
            Work & Business
          </h4>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>📧 Email filtering, translation</li>
            <li>💰 Fraud detection, credit scoring</li>
            <li>🛒 Price comparisons, customer service</li>
          </ul>
        </div>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
          <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`mr-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>🏥</span>
            Important Sectors
          </h4>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>Healthcare: Disease diagnosis</li>
            <li>Education: Adaptive learning</li>
            <li>Environment: Climate monitoring</li>
          </ul>
        </div>
      </div>
      
      <Activity
        title="Quick Activity (2 minutes)"
        description="Pick one area of your life (work, home, hobbies). How could AI make it easier? Write down one specific idea."
        onComplete={(response) => onActivityComplete('section4_activity', response)}
        completed={activities.section4_activity}
        isDark={isDark}
      />
    </div>
  </div>
);

export default Section4;