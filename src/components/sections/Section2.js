import React from 'react';
import { Brain } from 'lucide-react';

const Section2 = ({ isDark }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <Brain className={`w-6 h-6 mr-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
      Section 2: How AI Works (5 minutes)
    </h2>
    
    <div className="space-y-6">
      <div>
        <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          The Simple Process
        </h3>
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Think of teaching a child to recognize animals:
        </p>
        
        <div className={`flex items-center justify-center mb-6 p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>SHOW EXAMPLES</div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>(Data)</div>
          </div>
          <div className={`mx-4 text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>→</div>
          <div className="text-center">
            <div className="text-2xl mb-2">🧠</div>
            <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>PRACTICE</div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>(Training)</div>
          </div>
          <div className={`mx-4 text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>→</div>
          <div className="text-center">
            <div className="text-2xl mb-2">✅</div>
            <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>TEST ON NEW ANIMALS</div>
            <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>(Real Use)</div>
          </div>
        </div>
        
        <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          AI works exactly the same way:
        </p>
        <ol className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Feed it data</strong> - Thousands of examples (photos, text, numbers)
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Let it practice</strong> - AI finds patterns and learns from mistakes
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
            <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              <strong>Use it for real</strong> - AI applies what it learned to new situations
            </div>
          </li>
        </ol>
      </div>
      
      <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
        <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Real Example: Email Spam Filter
        </h4>
        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><strong>Data:</strong> 10,000 emails labeled "spam" or "not spam"</li>
          <li><strong>Training:</strong> AI learns that emails with "FREE MONEY!!!" are usually spam</li>
          <li><strong>Real use:</strong> When a new email arrives, AI checks for spam patterns</li>
        </ul>
      </div>
      
      <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Point</p>
        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          AI doesn't "think" like humans - it's very good at finding mathematical patterns in data.
        </p>
      </div>
    </div>
  </div>
);

export default Section2;