import React from 'react';
import { QuestionData } from '@/components/round1/QuestionCard';

interface ProgressBarProps {
  questionsData: QuestionData[];
  currentQuestionIndex: number;
  deadline: Date | null;
  formatDeadline: (date: Date) => string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  questionsData, 
  currentQuestionIndex, 
  deadline, 
  formatDeadline 
}) => (
  <div className="space-y-3 w-full">
  {/* Header row */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
    <h3 className="text-sm font-semibold text-gray-700">Progress</h3>
    {deadline && (
      <div className="text-sm text-gray-600 font-semibold">
        Self-Defined Timeline - {formatDeadline(deadline)}
      </div>
    )}
  </div>

  {/* Progress indicators */}
  <div className="flex gap-1 w-full">
    {questionsData.map((scenario, index) => (
      <div
        key={index}
        className={`flex-1 h-3 sm:h-4 rounded-full transition-all duration-300 ${
          index === currentQuestionIndex
            ? 'bg-blue-500 shadow-md shadow-blue-500/30'
            : index < currentQuestionIndex
            ? 'bg-blue-300'
            : 'bg-gray-200'
        }`}
        title={`Scenario ${index + 1}: ${scenario.scenarioTitle}`}
      />
    ))}
  </div>
</div>

);

export default ProgressBar;