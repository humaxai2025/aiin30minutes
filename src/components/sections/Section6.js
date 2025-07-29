import React from 'react';
import { Rocket } from 'lucide-react';

const Section6 = ({ isDark }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <Rocket className={`w-6 h-6 mr-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
      Section 6: What's Next? (3 minutes)
    </h2>
    
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
          <h4 className={`font-semibold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`mr-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>🔮</span>
            Near Future (2-5 years)
          </h4>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>🏠 Smarter homes that anticipate your needs</li>
            <li>🚗 More autonomous vehicles on roads</li>
            <li>🎓 Personalized education for every student</li>
            <li>💊 Faster drug discovery for diseases</li>
            <li>🌍 Better climate monitoring and solutions</li>
          </ul>
        </div>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-indigo-900/30' : 'bg-indigo-50'}`}>
          <h4 className={`font-semibold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={`mr-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>🚀</span>
            Longer Term (5-15 years)
          </h4>
          <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <li>AI assistants that understand context better</li>
            <li>More human-like conversation with machines</li>
            <li>AI helping solve global challenges</li>
            <li>New jobs we haven't imagined yet</li>
          </ul>
        </div>
      </div>
      
      <div className={`p-6 rounded-lg ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
        <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className="mr-2">🌍</span>
          Global Perspective
        </h4>
        <p className={`mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Different countries are investing heavily in AI:
        </p>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <div>🇺🇸 <strong>USA:</strong> Research & companies</div>
          <div>🇨🇳 <strong>China:</strong> Government investment</div>
          <div>🇪🇺 <strong>Europe:</strong> Ethical development</div>
          <div>🇮🇳 <strong>India:</strong> Healthcare & education</div>
        </div>
      </div>
    </div>
  </div>
);

export default Section6;