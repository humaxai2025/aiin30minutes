import React, { useState } from 'react';
import { Brain, Clock, CheckCircle, User } from 'lucide-react';

const WelcomeSection = ({ isDark, onNameSubmit, learnerName }) => {
  const [name, setName] = useState(learnerName || '');
  const [hasSubmitted, setHasSubmitted] = useState(!!learnerName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
      setHasSubmitted(true);
    }
  };

  if (!hasSubmitted) {
    return (
      <div className="text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
          isDark ? 'bg-blue-900' : 'bg-blue-100'
        }`}>
          <Brain className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Welcome to AI in 30 Minutes
        </h1>
        <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Let's start your AI learning journey!
        </p>

        <div className={`max-w-md mx-auto p-6 rounded-lg border ${
          isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
        }`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isDark ? 'bg-purple-900' : 'bg-purple-100'
          }`}>
            <User className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          
          <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What should we call you?
          </h3>
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            We'll personalize your learning experience
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              required
              autoFocus
            />
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Start Learning Journey
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
          isDark ? 'bg-blue-900' : 'bg-blue-100'
        }`}>
          <Brain className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Welcome {name}! 👋
        </h1>
        <h2 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          AI in 30 Minutes
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Your personalized AI learning journey starts now
        </p>
        <div className={`flex items-center justify-center mt-4 text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <Clock className="w-4 h-4 mr-2" />
          Total time: 30 minutes
        </div>
      </div>
      
      <div className={`p-6 rounded-lg border mb-6 ${
        isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          What You'll Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              What AI actually is (and isn't)
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              How AI works in simple terms
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Where you encounter AI daily
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Key benefits and concerns
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              What's coming next
            </span>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          Ready {name}? Let's dive in! 🚀
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;