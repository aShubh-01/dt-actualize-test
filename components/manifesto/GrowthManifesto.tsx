'use client';

import React, { useState, useEffect } from 'react';

interface GrowthManifestoProps {
  onSubmit?: (manifestoText: string) => void;
}

const GrowthManifesto: React.FC<GrowthManifestoProps> = ({ onSubmit }) => {
  const [manifestoText, setManifestoText] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Array of placeholder sentences
  const placeholders = [
    "I am becoming a great leader who inspires others...",
    "I am transforming into an innovative problem solver...",
    "I am evolving into a compassionate mentor who...",
    "I am developing into a creative visionary that...",
    "I am growing into a strategic thinker who...",
  ];

  useEffect(() => {
    if (manifestoText) {
      // If user has typed, stop the animation
      return;
    }

    const currentText = placeholders[placeholderIndex];
    
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < currentText.length) {
          setCurrentPlaceholder(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, start erasing after a pause
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCurrentPlaceholder(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished erasing, move to next placeholder
          setIsTyping(true);
          setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
        }
      }
    }, isTyping ? 80 : 50); // Typing speed: 80ms, erasing speed: 50ms

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, placeholderIndex, manifestoText, placeholders]);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(manifestoText);
    }
    // Handle submission logic here
    console.log('Manifesto submitted:', manifestoText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-4xl text-blue-600 mb-6 leading-tight font-sans">
            Your Growth Manifesto - Who Are You Becoming?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto font-sans">
            You've now walked through five real moments — not hypothetical cases, but 
            reflections of what happens when systems meet people.
          </p>
        </div>

        {/* Reflection Questions */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 text-sm font-semibold font-sans">?</span>
              </div>
              <div>
                <p className="text-gray-800 font-medium text-lg font-sans">
                  So you enjoy thinking, don't you?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Identity Shift Highlight */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium font-sans">
            You can now unleash your identity shift.
          </div>
        </div>

        {/* Manifesto Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="flex gap-1 text-xl font-semibold text-gray-800 mb-2 font-sans">
              <span>
                Write
              </span>
              <span className='text-blue-500'>
                Your Growth Story
              </span>
            </h2>
          </div>

          <textarea
            value={manifestoText}
            onChange={(e) => setManifestoText(e.target.value)}
            placeholder={manifestoText ? "Express yourself freely..." : currentPlaceholder}
            className="w-full h-40 p-6 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-700 placeholder-gray-400 text-lg leading-relaxed font-sans"
          />

          <p className="text-gray-400 text-sm text-center mt-4 italic font-sans">
            No timer. No word limit. No distractions.
          </p>
        </div>

        {/* Mindset Message */}
        <div className="text-center mb-8">
          <p className="text-blue-600 font-semibold text-lg font-sans">
            This is not a performance. It's a decision.
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={!manifestoText.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl font-sans"
          >
            Submit Your Manifesto
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrowthManifesto;