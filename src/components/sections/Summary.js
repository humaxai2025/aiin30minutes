import React, { useState, useEffect } from 'react';
import { CheckCircle, Trophy, Star, Sparkles, X, Download } from 'lucide-react';

const Summary = ({ isDark, learnerName = "Learner" }) => {
  const [showCelebration, setShowCelebration] = useState(true);
  const [animationPhase, setAnimationPhase] = useState('initial');
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setAnimationPhase('celebration'), 500);
    const timer2 = setTimeout(() => setAnimationPhase('settle'), 8000);
    const timer3 = setTimeout(() => setShowCelebration(false), 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className={`confetti confetti-${i % 6 + 1}`}
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}
    />
  ));

  const floatingStars = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="floating-star"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 1}s`
      }}
    >
      ⭐
    </div>
  ));

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const CertificateModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full">
        {/* Close Button */}
        <button
          onClick={() => setShowCertificate(false)}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        {/* Certificate */}
        <div 
          id="certificate"
          className="bg-white p-12 rounded-lg shadow-2xl certificate-container"
          style={{ aspectRatio: '4/3' }}
        >
          {/* Decorative Border */}
          <div className="border-8 border-double border-blue-600 h-full relative p-8">
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-600"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-blue-600"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-blue-600"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-blue-600"></div>
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Human<span className="text-blue-600">X</span>AI
                  </h1>
                  <p className="text-sm text-gray-600">Learning Platform</p>
                </div>
              </div>
              <h2 className="text-4xl font-serif text-blue-800 mb-2">Certificate of Completion</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            {/* Main Content */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">This is to certify that</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2 inline-block px-8">
                {learnerName}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                has successfully completed the
              </p>
              <h4 className="text-2xl font-semibold text-blue-800 mb-6">
                AI in 30 Minutes: Interactive Tutorial
              </h4>
              <p className="text-gray-600 mb-8">
                Demonstrating mastery of fundamental artificial intelligence concepts including:<br/>
                AI definitions, machine learning principles, AI applications, and future implications
              </p>
            </div>
            
            {/* Footer */}
            <div className="flex justify-between items-end">
              <div className="text-center">
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Date of Completion</p>
                <p className="text-sm font-semibold text-gray-800">{getCurrentDate()}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                  <Star className="w-10 h-10 text-blue-600" />
                </div>
                <p className="text-xs text-gray-500">Perfect Score Achievement</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Authorized by</p>
                <p className="text-sm font-semibold text-gray-800">HumanXAI Learning</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="text-center mt-4">
          <p className="text-white text-sm flex items-center justify-center">
            <Download className="w-4 h-4 mr-2" />
            Right-click on the certificate and select "Save image as..." to download
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="text-center relative overflow-hidden">
      {/* Celebration Animation Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confettiElements}
          {floatingStars}
          
          {/* Central celebration burst */}
          <div className={`celebration-burst ${animationPhase}`}>
            <div className="burst-circle"></div>
            <div className="burst-rays"></div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && <CertificateModal />}

      {/* Main Content */}
      <div className={`celebration-content ${animationPhase}`}>
        {/* Trophy Animation */}
        <div className={`trophy-container ${animationPhase}`}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 trophy-glow ${
            isDark ? 'bg-yellow-900' : 'bg-yellow-100'
          }`}>
            <Trophy className={`w-12 h-12 trophy-icon ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
          </div>
        </div>

        {/* Personalized Celebration Message */}
        <div className={`celebration-text ${animationPhase}`}>
          <h2 className={`text-4xl font-bold mb-2 celebration-title ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🎉 Congratulations {learnerName}! 🎉
          </h2>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className={`w-6 h-6 mr-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <p className={`text-xl font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              You've mastered AI fundamentals!
            </p>
            <Sparkles className={`w-6 h-6 ml-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <p className={`text-lg mb-8 celebration-subtitle ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            You're now ready to explore the exciting world of AI with confidence!
          </p>
        </div>

        {/* Achievement Badge - Now Centered and Clickable */}
        <div className={`achievement-badge ${animationPhase} mx-auto mb-8 flex justify-center`}>
          <div 
            onClick={() => setShowCertificate(true)}
            className={`p-6 rounded-lg border-2 border-dashed max-w-md cursor-pointer hover:scale-105 transition-transform duration-200 ${
              isDark ? 'border-green-400 bg-green-900/20 hover:bg-green-900/30' : 'border-green-600 bg-green-50 hover:bg-green-100'
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <Star className={`w-6 h-6 mr-2 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              <span className={`font-bold text-lg ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                AI Fundamentals Certificate
              </span>
              <Star className={`w-6 h-6 ml-2 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <p className={`text-sm mb-2 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
              Awarded to <strong>{learnerName}</strong>
            </p>
            <p className={`text-xs mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Completed with perfect quiz scores
            </p>
            <p className={`text-xs font-medium ${isDark ? 'text-green-300' : 'text-green-600'}`}>
              📜 Click to view your certificate
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className={`p-6 rounded-lg mb-8 fade-in-content ${isDark ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🧠 What {learnerName} Now Knows
        </h3>
        <div className="space-y-3 text-left">
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              AI = Software that learns from data to perform intelligent tasks
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Already everywhere - your phone, email, shopping, navigation
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Narrow AI dominates today - each system does one thing well
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Benefits are huge but we need to address legitimate concerns
            </span>
          </div>
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
            <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Future is bright with responsible development
            </span>
          </div>
        </div>
      </div>
      
      {/* Next Steps */}
      <div className={`p-6 rounded-lg fade-in-content ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
        <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🚀 {learnerName}'s Next Adventure
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Beginner level:
            </h4>
            <ul className={`space-y-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Try ChatGPT or Google Bard for everyday tasks</li>
              <li>• Notice AI features in apps you already use</li>
              <li>• Read one article per week about AI developments</li>
            </ul>
          </div>
          <div>
            <h4 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Want to go deeper?
            </h4>
            <ul className={`space-y-1 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Take a free online course (Coursera's "AI for Everyone")</li>
              <li>• Experiment with AI tools for your work/hobbies</li>
              <li>• Join AI communities online</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Final motivational message */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg fade-in-content">
        <p className="font-medium">💡 Remember {learnerName}: AI is a tool to augment human intelligence, not replace it.</p>
        <p className="text-sm opacity-90 mt-1">The future belongs to people like you who understand how to work alongside AI effectively!</p>
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        @keyframes trophy-bounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-5deg); }
          75% { transform: scale(1.1) rotate(5deg); }
        }

        @keyframes celebration-burst {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.8); }
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: confetti-fall linear infinite;
        }

        .confetti-1 { background: #ff6b6b; }
        .confetti-2 { background: #4ecdc4; }
        .confetti-3 { background: #45b7d1; }
        .confetti-4 { background: #f9ca24; }
        .confetti-5 { background: #6c5ce7; }
        .confetti-6 { background: #fd79a8; }

        .floating-star {
          position: absolute;
          font-size: 20px;
          animation: float-up ease-out infinite;
        }

        .celebration-burst {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .celebration-burst.celebration {
          animation: celebration-burst 2s ease-out;
        }

        .burst-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,215,0,0.6) 0%, transparent 70%);
        }

        .trophy-container.celebration .trophy-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .trophy-container.celebration .trophy-icon {
          animation: trophy-bounce 1s ease-in-out infinite;
        }

        .celebration-text.initial {
          opacity: 0;
          transform: translateY(20px);
        }

        .celebration-text.celebration {
          opacity: 1;
          transform: translateY(0);
          transition: all 1s ease-out;
        }

        .celebration-title {
          animation: celebration-text 2s ease-out;
        }

        .achievement-badge.initial {
          opacity: 0;
          transform: scale(0);
        }

        .achievement-badge.celebration {
          opacity: 1;
          transform: scale(1);
          transition: all 1s ease-out 1s;
        }

        .fade-in-content {
          animation: fade-in-up 1s ease-out 2s both;
        }

        .certificate-container {
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        @keyframes celebration-text {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .certificate-container {
            padding: 2rem;
          }
          
          .certificate-container h2 {
            font-size: 2rem;
          }
          
          .certificate-container h3 {
            font-size: 1.5rem;
          }
          
          .certificate-container h4 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Summary;