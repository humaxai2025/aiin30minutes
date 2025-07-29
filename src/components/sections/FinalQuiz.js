import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const FinalQuiz = ({ onComplete, completed, isDark }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const questions = [
    {
      question: "AI is best described as:",
      options: ["Conscious computer brains", "Software that learns from data", "Robots that will replace humans"],
      correct: 1
    },
    {
      question: "Most AI today is:",
      options: ["General AI that can do anything", "Narrow AI focused on specific tasks", "Smarter than humans at everything"],
      correct: 1
    },
    {
      question: "AI learns by:",
      options: ["Reading instruction manuals", "Finding patterns in examples", "Copying human thoughts"],
      correct: 1
    }
  ];
  
  const handleAnswer = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
    const score = questions.reduce((acc, q, i) => {
      return acc + (answers[i] === q.correct ? 1 : 0);
    }, 0);
    
    const allCorrect = score === questions.length;
    setQuizComplete(allCorrect);
    
    if (allCorrect) {
      onComplete(score);
    }
  };
  
  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setQuizComplete(false);
  };
  
  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce((acc, q, i) => {
    return acc + (answers[i] === q.correct ? 1 : 0);
  }, 0);
  const allCorrect = score === questions.length;
  
  return (
    <div>
      <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Final Quiz (1 minute)
      </h2>
      <p className={`mb-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Test your understanding - you must get all questions correct to complete the tutorial:
      </p>
      
      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className={`p-6 rounded-lg border transition-colors ${
            isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
          }`}>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {qIndex + 1}. {q.question}
            </h4>
            <div className="space-y-2">
              {q.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleAnswer(qIndex, oIndex)}
                  disabled={submitted}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    submitted
                      ? oIndex === q.correct
                        ? isDark
                          ? 'bg-green-900/50 border-green-600 text-green-300'
                          : 'bg-green-100 border-green-300 text-green-800'
                        : oIndex === answers[qIndex] && oIndex !== q.correct
                        ? isDark
                          ? 'bg-red-900/50 border-red-600 text-red-300'
                          : 'bg-red-100 border-red-300 text-red-800'
                        : isDark
                        ? 'bg-gray-800 border-gray-600 text-gray-300'
                        : 'bg-gray-50 border-gray-200'
                      : answers[qIndex] === oIndex
                      ? isDark
                        ? 'bg-blue-900/50 border-blue-600 text-blue-300'
                        : 'bg-blue-50 border-blue-300'
                      : isDark
                      ? 'bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {String.fromCharCode(65 + oIndex)}) {option}
                </button>
              ))}
            </div>
            
            {submitted && answers[qIndex] !== q.correct && (
              <div className={`mt-3 text-sm p-3 rounded-lg ${isDark ? 'bg-red-900/30' : 'bg-red-50'}`}>
                <span className="text-red-600 font-medium">
                  ✗ Incorrect. The correct answer is: {q.options[q.correct]}
                </span>
              </div>
            )}
            
            {submitted && answers[qIndex] === q.correct && (
              <div className={`mt-3 text-sm p-3 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
                <span className="text-green-600 font-medium">✓ Correct!</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {!submitted && (
        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      )}
      
      {submitted && (
        <div className="text-center mt-6">
          {allCorrect ? (
            <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30' : 'bg-green-50'}`}>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                🎉 Excellent! Perfect Score!
              </h3>
              <p className={`mb-4 ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                You scored {score} out of {questions.length} - You can now complete the tutorial!
              </p>
            </div>
          ) : (
            <div className={`p-6 rounded-lg ${isDark ? 'bg-orange-900/30' : 'bg-orange-50'}`}>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-orange-300' : 'text-orange-800'}`}>
                Almost there! You scored {score} out of {questions.length}
              </h3>
              <p className={`mb-4 ${isDark ? 'text-orange-200' : 'text-orange-700'}`}>
                You need to get all questions correct to proceed. Review the incorrect answers above and try again!
              </p>
              <button
                onClick={handleRetry}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retry Quiz
              </button>
              <p className={`text-xs mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                You must answer all questions correctly to complete the tutorial
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FinalQuiz;