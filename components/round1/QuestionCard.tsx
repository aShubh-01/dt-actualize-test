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
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  currentQuestionIndex,
  answers,
  onAnswerChange
}) => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold rounded-2xl text-lg shadow-lg shadow-blue-500/25">
          {currentQuestionIndex + 1}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{questionData.scenarioTitle}</h2>
        </div>
      </div>

      {/* Problem Description */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 border-l-4 border-blue-500 p-6 rounded-2xl">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-blue-700 text-sm uppercase tracking-wide mb-1">Problem</p>
            <p className="text-gray-700 leading-relaxed">{questionData.scenarioDescription}</p>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {questionData.questions.map((question, index) => (
          <div key={question.id} className="space-y-3">
            <label className="block text-gray-900 font-semibold text-lg">
              <span className="text-blue-600">Q{currentQuestionIndex + 1}{String.fromCharCode(65 + index)}.</span>{' '}
              {question.questionText}
            </label>
            <div className="relative">
              <textarea
                placeholder="Share your thoughts here..."
                rows={4}
                value={answers[question.id] || ''}
                onChange={(e) => onAnswerChange(question.id, e.target.value)}
                className="w-full border-2 border-gray-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder-gray-400 bg-white shadow-sm hover:shadow-md"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {answers[question.id]?.length || 0} characters
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;