import React from 'react';
import { useToast } from '@/components/Toast'; // if not already imported

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isCurrentQuestionValid: boolean;

}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  totalQuestions,
  isSubmitted,
  setIsSubmitted,
  onBack,
  onNext,
  onSubmit,
  isCurrentQuestionValid

}) => {
  const { showToast } = useToast(); // use toast to show message
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  const handleNextClick = () => {
    if (!isCurrentQuestionValid) {
      showToast('error', 'Please fill all answers before proceeding', 3000);
      return;
    }
    onNext(); // only call if valid
  };

  return (
    <div className="flex justify-between pt-6">
      <button
        onClick={onBack}
        disabled={currentQuestionIndex === 0}
        className="px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 hover:scale-[1.02] disabled:hover:scale-100"
      >
        Back
      </button>

      <div className="flex gap-3">
        {!isLastQuestion && (
          <button
            onClick={handleNextClick}
            disabled={isSubmitted}
className={`px-6 py-3 rounded-2xl text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]
              ${!isCurrentQuestionValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}
              ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}
            `}          >
            Next
          </button>
        )}

        {isLastQuestion && (
          <button
            onClick={onSubmit}
            disabled={isSubmitted}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-600 hover:to-blue-700 font-semibold transition-all duration-200 shadow-lg shadow-to-blue-700 hover:shadow-xl hover:to-blue-700 hover:scale-[1.02]"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;