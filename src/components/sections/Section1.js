import React from 'react';
import { Book } from 'lucide-react';
import Activity from '../Activity';

const Section1 = ({ onActivityComplete, activities, isDark }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <Book className={`w-6 h-6 mr-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
      Section 1: What is AI? (5 minutes)
    </h2>
    
    <div className="space-y-6">
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          The Simple Definition
        </h3>
        <div className={`p-4 rounded-lg mb-4 ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
          <p className={`text-lg font-medium ${isDark ? 'text-blue-300' : 'text-blue-900'}`}>
            Artificial Intelligence (AI) = Computer systems that can perform tasks normally requiring human intelligence.
          </p>
        </div>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Think of AI like a digital assistant that can:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              🔍 Recognize patterns (like identifying spam emails)
            </span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              🧠 Make decisions (like suggesting your next Netflix show)
            </span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              📚 Learn from experience (like getting better at chess)
            </span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          What AI Is NOT
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start">
            <span className="text-red-500 mr-3">❌</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Conscious or emotional</strong> - AI doesn't have feelings
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3">❌</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Magic</strong> - It follows mathematical rules
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3">❌</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Perfect</strong> - It makes mistakes like humans
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-red-500 mr-3">❌</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Sci-fi robots</strong> - Most AI is invisible software
            </div>
          </div>
        </div>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
        <p className={`text-sm font-medium ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
          💡 Did You Know?
        </p>
        <p className={isDark ? 'text-yellow-200' : 'text-gray-700'}>
          77% of devices you use daily contain AI technology!
        </p>
      </div>
      
      <Activity
        title="Quick Activity (2 minutes)"
        description="Name 3 AI tools you've used today. Hint: Search engines, maps, social media, email, shopping sites all use AI."
        onComplete={(response) => onActivityComplete('section1_activity', response)}
        completed={activities.section1_activity}
        isDark={isDark}
      />
    </div>
  </div>
);

export default Section1;