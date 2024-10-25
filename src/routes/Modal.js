import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Modal.css"
// TypewriterText component for subtitle animation
const TypewriterText = ({ 
  words = [], 
  typingSpeed = 150, 
  deletingSpeed = 100, 
  delayBetweenWords = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      setCurrentText(prev => prev.slice(0, -1));
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText === currentWord) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, delayBetweenWords]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, isPaused, deletingSpeed, typingSpeed]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

// Theme toggle button component
const ThemeToggle = ({ isDark, onToggle }) => (
  <button 
    onClick={onToggle}
    className="theme-toggle"
    aria-label="Toggle theme"
  >
    {isDark ? '☀️' : '🌙'}
  </button>
);

// Main Home component
const Home = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const typingTexts = [
    "Discover Amazing Clubs",
    "Join Exciting Events",
    "Build Your Network",
    "Create Your Journey"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    navigate('/clubregistry');
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`home-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
      
      <div className="accent-circle accent-circle-1"></div>
      <div className="accent-circle accent-circle-2"></div>
      
      <div className="content-wrapper">
        <h1 className="main-title">Welcome to ClubHub</h1>

        <div className="typing-text">
          <TypewriterText 
            words={typingTexts}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetweenWords={2000}
          />
        </div>

        <div className={`content-fade ${showContent ? 'visible' : ''}`}>
          <p className="subtitle">
            Your Gateway to Student Life at SRM University, Ramapuram
          </p>

          <button 
            className="get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;