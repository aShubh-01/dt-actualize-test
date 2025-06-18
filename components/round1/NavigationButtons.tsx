import React from 'react';

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onBack: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  totalQuestions,
  onBack,
  onNext
}) => (
  <div className="flex justify-between pt-6">
    <button
      onClick={onBack}
      disabled={currentQuestionIndex === 0}
      className="px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 hover:scale-[1.02] disabled:hover:scale-100"
    >
      Back
    </button>
    <button
      onClick={onNext}
      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02]"
    >
      {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
    </button>
  </div>
);

export default NavigationButtons;
