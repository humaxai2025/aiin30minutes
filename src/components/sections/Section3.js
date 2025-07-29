import React, { useState } from 'react';
import { Users } from 'lucide-react';
import QuizQuestion from '../QuizQuestion';

const Section3 = ({ onQuizAnswer, quizAnswered, isDark }) => {
  const [quizCorrect, setQuizCorrect] = useState(false);
  
  const handleQuizAnswer = (isCorrect) => {
    setQuizCorrect(isCorrect);
    onQuizAnswer(isCorrect);
  };
  
  return (
    <div>
      <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <Users className={`w-6 h-6 mr-3 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
        Section 3: Types of AI (5 minutes)
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Two Main Types
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
              <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className={`mr-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>🎯</span>
                Narrow AI (What we have now)
              </h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Does ONE thing really well</li>
                <li>• Examples: Siri, Google Translate, Netflix recommendations</li>
                <li>• Like a chess master who can only play chess</li>
              </ul>
            </div>
            
            <div className={`p-6 rounded-lg ${isDark ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
              <h4 className={`font-semibold mb-3 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className={`mr-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>🤖</span>
                General AI (Future goal)
              </h4>
              <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Could do ANY intellectual task humans can do</li>
                <li>• Like JARVIS from Iron Man movies</li>
                <li>• Still science fiction - we're not there yet</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How AI Learns: Machine Learning
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Instead of programming every rule, we show AI examples and let it figure out patterns.
          </p>
          
          <div className={`p-4 rounded-lg mb-6 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <div><strong>Traditional Programming:</strong> Human writes every rule</div>
              <div><strong>Machine Learning:</strong> Human provides examples, AI creates its own rules</div>
            </div>
          </div>
        </div>
        
        <QuizQuestion
          question="Which type of AI recommends products on Amazon?"
          options={["General AI", "Narrow AI", "Both"]}
          correctAnswer={1}
          onAnswer={handleQuizAnswer}
          answered={quizCorrect}
          isDark={isDark}
        />
      </div>
    </div>
  );
};

export default Section3;