import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import AccessibilityControls from './components/AccessibilityControls';

// Import sections
import WelcomeSection from './components/sections/WelcomeSection';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';
import FinalQuiz from './components/sections/FinalQuiz';
import Summary from './components/sections/Summary';

// Main App Component
const AppContent = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState({});
  const [activities, setActivities] = useState({});
  const [finalQuizScore, setFinalQuizScore] = useState(null);
  const [learnerName, setLearnerName] = useState('');
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);

  // Load saved progress on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('ai-tutorial-progress');
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setCurrentSection(progress.currentSection || 0);
        setQuizAnswered(progress.quizAnswered || {});
        setActivities(progress.activities || {});
        setFinalQuizScore(progress.finalQuizScore || null);
        setLearnerName(progress.learnerName || '');
      } catch (error) {
        console.log('Could not load saved progress');
      }
    }
  }, []);

  // Save progress whenever key state changes
  useEffect(() => {
    const progressData = {
      currentSection,
      quizAnswered,
      activities,
      finalQuizScore,
      learnerName,
      lastSaved: new Date().toISOString()
    };
    localStorage.setItem('ai-tutorial-progress', JSON.stringify(progressData));
  }, [currentSection, quizAnswered, activities, finalQuizScore, learnerName]);

  const sections = [
    { component: WelcomeSection, canProgress: () => learnerName.trim() !== '' },
    { component: Section1, canProgress: () => activities.section1_activity },
    { component: Section2, canProgress: true },
    { component: Section3, canProgress: () => quizAnswered.section3 === true },
    { component: Section4, canProgress: () => activities.section4_activity },
    { component: Section5, canProgress: true },
    { component: Section6, canProgress: true },
    { component: FinalQuiz, canProgress: () => finalQuizScore === 3 }, // Must get perfect score
    { component: Summary, canProgress: true }
  ];
  
  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };
  
  const handleQuizAnswer = (sectionKey, correct) => {
    setQuizAnswered({ ...quizAnswered, [sectionKey]: correct });
  };
  
  const handleActivityComplete = (activityKey, response) => {
    setActivities({ ...activities, [activityKey]: response });
  };

  const handleNameSubmit = (name) => {
    setLearnerName(name);
  };
  
  const canGoNext = () => {
    const section = sections[currentSection];
    if (typeof section.canProgress === 'function') {
      return section.canProgress();
    }
    return section.canProgress;
  };

  const clearProgress = () => {
    localStorage.removeItem('ai-tutorial-progress');
    setCurrentSection(0);
    setQuizAnswered({});
    setActivities({});
    setFinalQuizScore(null);
    setLearnerName('');
  };
  
  const CurrentComponent = sections[currentSection].component;

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      default: return 'text-base';
    }
  };
  
  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gray-900' : highContrast ? 'bg-black' : 'bg-gray-50'
    } ${getFontSizeClass()} ${highContrast ? 'high-contrast' : ''}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Accessibility Controls */}
      <AccessibilityControls
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        isDark={isDark}
        onClearProgress={clearProgress}
        hasProgress={currentSection > 0 || Object.keys(activities).length > 0}
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ProgressBar 
          currentSection={currentSection} 
          totalSections={sections.length - 1} 
          isDark={isDark} 
        />
        
        <div className={`rounded-lg shadow-sm p-8 mb-6 fade-in transition-colors duration-200 ${
          isDark ? 'bg-gray-800' : highContrast ? 'bg-white border-4 border-black' : 'bg-white'
        }`}>
          <CurrentComponent
            onQuizAnswer={(correct) => handleQuizAnswer(`section${currentSection}`, correct)}
            onActivityComplete={handleActivityComplete}
            quizAnswered={quizAnswered[`section${currentSection}`]}
            activities={activities}
            onComplete={setFinalQuizScore}
            completed={finalQuizScore !== null}
            isDark={isDark}
            onNameSubmit={handleNameSubmit}
            learnerName={learnerName}
            highContrast={highContrast}
          />
        </div>
        
        <Navigation
          currentSection={currentSection}
          totalSections={sections.length - 1}
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoNext={canGoNext()}
          isDark={isDark}
        />
      </main>
      
      <Footer isDark={isDark} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;