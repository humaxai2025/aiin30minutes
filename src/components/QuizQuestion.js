import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const QuizQuestion = ({ question, options, correctAnswer, onAnswer, answered, isDark }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  
  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setHasAnswered(true);
    const isCorrect = answerIndex === correctAnswer;
    onAnswer(isCorrect);
  };
  
  const handleRetry = () => {
    setSelectedAnswer(null);
    setHasAnswered(false);
    onAnswer(false); // Reset the answer state
  };
  
  const isCorrectAnswer = selectedAnswer === correctAnswer;
  
  return (
    <div className={`p-6 rounded-lg mb-6 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {question}
      </h4>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={hasAnswered}
            className={`w-full text-left p-3 rounded-lg border transition-colors ${
              hasAnswered
                ? index === correctAnswer
                  ? isDark 
                    ? 'bg-green-900/50 border-green-600 text-green-300'
                    : 'bg-green-100 border-green-300 text-green-800'
                  : index === selectedAnswer && index !== correctAnswer
                  ? isDark
                    ? 'bg-red-900/50 border-red-600 text-red-300'
                    : 'bg-red-100 border-red-300 text-red-800'
                  : isDark
                  ? 'bg-gray-800 border-gray-600 text-gray-300'
                  : 'bg-white border-gray-200'
                : selectedAnswer === index
                ? isDark
                  ? 'bg-blue-900/50 border-blue-600 text-blue-300'
                  : 'bg-blue-50 border-blue-300'
                : isDark
                ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {hasAnswered && (
        <div className="mt-4">
          {isCorrectAnswer ? (
            <div className="text-center">
              <span className="text-green-600 font-medium text-lg">✓ Correct! Well done!</span>
              <p className={`text-sm mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                You can now proceed to the next section.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <span className="text-red-600 font-medium text-lg">✗ Not quite right!</span>
              <p className={`text-sm mt-2 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                The correct answer is: <strong>{options[correctAnswer]}</strong>
              </p>
              <button
                onClick={handleRetry}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retry Quiz
              </button>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                You must answer correctly to continue
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;