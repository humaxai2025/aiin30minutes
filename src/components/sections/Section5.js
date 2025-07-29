import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const Section5 = ({ isDark }) => (
  <div>
    <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <AlertTriangle className={`w-6 h-6 mr-3 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
      Section 5: Benefits vs. Concerns (5 minutes)
    </h2>
    
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
          <h4 className={`font-semibold mb-4 flex items-center ${isDark ? 'text-green-300' : 'text-green-800'}`}>
            <CheckCircle className="w-5 h-5 mr-2" />
            Major Benefits
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3">⚡</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Efficiency:</strong> Automates repetitive tasks
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🎯</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Accuracy:</strong> Reduces human errors
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🔄</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>24/7 Availability:</strong> Never sleeps
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">💡</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>New Discoveries:</strong> Finds patterns humans miss
              </div>
            </li>
          </ul>
        </div>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
          <h4 className={`font-semibold mb-4 flex items-center ${isDark ? 'text-orange-300' : 'text-orange-800'}`}>
            <AlertTriangle className="w-5 h-5 mr-2" />
            Key Concerns
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3">🤖</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Job Changes:</strong> Some roles may be automated
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🔒</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Privacy:</strong> AI needs data
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">⚖️</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Bias:</strong> Can inherit human prejudices
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3">🔍</span>
              <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                <strong>Transparency:</strong> Hard to understand decisions
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={`p-6 rounded-lg ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
        <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Real Example: Facial Recognition
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            <strong className="text-green-600">Benefits:</strong> Unlocks your phone securely, finds missing persons
          </div>
          <div className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            <strong className="text-orange-600">Concerns:</strong> Privacy surveillance, accuracy issues for some groups
          </div>
        </div>
      </div>
      
      <div className={`p-4 rounded-lg text-center ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>The Bottom Line</p>
        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
          AI is a powerful tool - like fire or electricity. The key is using it responsibly with proper safeguards.
        </p>
      </div>
    </div>
  </div>
);

export default Section5;