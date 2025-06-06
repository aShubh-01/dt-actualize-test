"use client"

import React, { useState, useEffect } from 'react';
import QuestionCard, { QuestionData } from '@/components/round1/QuestionCard';
import TimerModal from '@/components/round1/TimeModal';

// Hardcoded questions data - replace with API call later
const questionsData: QuestionData[] = [
  {
    id: '1',
    scenarioTitle: 'The Reflection Fatigue',
    scenarioDescription: 'You built a reflection ritual to help interns track growth. In week 1, 78% participated. By week 4, it dropped to 21%. A PM says: "Too many questions. They don\'t see the \'why\'. Can we fix it?"',
    questions: [
      {
        id: '1a',
        questionText: 'What behavior design flaw might be causing the drop-off?'
      },
      {
        id: '1b',
        questionText: 'What redesign would you suggest — to retain rigor but reduce fatigue?'
      }
    ]
  },
  {
    id: '2',
    scenarioTitle: 'Onboarding Overload',
    scenarioDescription: 'Interns are overwhelmed by a long checklist during onboarding. Completion rate is low.',
    questions: [
      {
        id: '2a',
        questionText: 'What behavior issue is at play?'
      },
      {
        id: '2b',
        questionText: 'What small changes could make the onboarding feel lighter?'
      }
    ]
  }
];

const QuestionnaireApp: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [timelineHours, setTimelineHours] = useState<number | null>(null);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleTimelineSet = (hours: number) => {
    const now = new Date();
    const endTime = new Date(now.getTime() + hours * 60 * 60 * 1000);
    setDeadline(endTime);
    setTimelineHours(hours);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted with answers:', answers);
    alert('Form submitted successfully!');
    // Handle form submission logic here
  };

  const formatDeadline = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isLastQuestion = currentQuestionIndex === questionsData.length - 1;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <TimerModal
        isOpen={isModalOpen}
        onTimelineSet={handleTimelineSet}
      />

      <div className="bg-white p-8 rounded-2xl shadow-md max-w-4xl w-full space-y-6 relative">
        {/* Static Time Display */}
        {deadline && timelineHours && (
          <div className="absolute top-4 right-6 text-sm text-gray-600 font-semibold">
            Self-Defined Timeline - {formatDeadline(deadline)}
          </div>
        )}

        {/* Progress Bar */}
        {!isModalOpen && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-gray-700">Progress</h3>
              <span className="text-sm text-gray-500">
                {currentQuestionIndex + 1} of {questionsData.length} scenarios
              </span>
            </div>
            <div className="relative">
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{ 
                    width: `${((currentQuestionIndex + 1) / questionsData.length) * 100}%` 
                  }}
                >
                  <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                {questionsData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      index <= currentQuestionIndex
                        ? 'bg-blue-500 border-blue-500 scale-110'
                        : 'bg-white border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Question Content */}
        {!isModalOpen && (
          <QuestionCard
            questionData={questionsData[currentQuestionIndex]}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            onAnswerChange={handleAnswerChange}
          />
        )}

        {/* Navigation */}
        {!isModalOpen && (
          <div className="flex justify-between pt-6">
            <button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              className="px-10 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 hover:scale-[1.02] disabled:hover:scale-100"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-10 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02]"
            >
              {isLastQuestion ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireApp;