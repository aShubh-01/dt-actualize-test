import React from 'react';

export interface Question {
  id: string;
  questionText: string;
}

export interface QuestionData {
  id: string;
  scenarioTitle: string;
  scenarioDescription: string;
  questions: Question[];
}

interface QuestionCardProps {
  questionData: QuestionData;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, answer: string) => void;
  setIsCurrentQuestionValid: (valid: boolean) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  currentQuestionIndex,
  answers,
  onAnswerChange,
  setIsCurrentQuestionValid
}) => {

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateAnswer = (questionId: string, value: string) => {
    const isValid = value.trim().length >= 150;

    setErrors((prev) => {
      const updated = { ...prev };
      if (!isValid) {
        updated[questionId] = 'Your answer must be at least 150 characters long.';
      } else {
        delete updated[questionId];
      }
      return updated;
    });
  };

  React.useEffect(() => {
    const isValid = questionData.questions.every((q) => {
      const value = answers[q.id]?.trim() || '';
      return value.length >= 150;
    });
    setIsCurrentQuestionValid(isValid);
  }, [answers, questionData.questions, setIsCurrentQuestionValid]);

  return (
    <div className="space-y-8 w-full">
  {/* Header */}
  <div className="flex items-center gap-4 flex-wrap">
    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold rounded-2xl text-lg shadow-lg shadow-blue-500/25">
      {currentQuestionIndex + 1}
    </div>
    <h2 className="text-2xl font-bold text-gray-900">
      {questionData.scenarioTitle}
    </h2>
  </div>

  {/* Problem Description */}
  <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 border-l-4 border-blue-500 p-5 sm:p-6 rounded-2xl">
    <p className="font-semibold text-blue-700 text-sm uppercase tracking-wide mb-1">
      Problem
    </p>
    <p className="text-gray-700 leading-relaxed">
      {questionData.scenarioDescription}
    </p>
  </div>

  {/* Questions */}
  <div className="space-y-6">
    {questionData.questions.map((question, index) => (
      <div key={question.id} className="space-y-3">
        <label
          htmlFor={`question-${question.id}`}
          className="block text-gray-900 font-semibold text-base sm:text-lg"
        >
          {question.questionText}
        </label>
        <div className="relative">
          <textarea
            id={`question-${question.id}`}
            placeholder="Share your reasoning here..."
            rows={4}
            value={answers[question.id] || ''}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
            onBlur={(e) =>
                  validateAnswer(question.id, e.target.value)
                }
className={`w-full border-2 ${
                  errors[question.id] ? 'border-red-500' : 'border-gray-200'
                } rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder-gray-400 bg-white shadow-sm hover:shadow-md`}          />
          <div className="absolute bottom-3 right-3 text-xs text-gray-400">
            {answers[question.id]?.length || 0} characters
          </div>
        </div>
        {errors[question.id] && (
              <p className="text-sm text-red-600 mt-1">
                {errors[question.id]}
              </p>
            )}
      </div>
    ))}
  </div>
</div>

  );
};

export default QuestionCard;