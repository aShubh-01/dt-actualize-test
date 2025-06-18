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
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-semibold text-gray-700">Progress</h3>
      {deadline && (
        <div className="text-sm text-gray-600 font-semibold">
          Self-Defined Timeline - {formatDeadline(deadline)}
        </div>
      )}
    </div>
    <div className="flex gap-1">
      {questionsData.map((scenario, index) => (
        <div
          key={index}
          className={`flex-1 h-4 rounded-2xl transition-all duration-300 ${
            index === currentQuestionIndex ? 'bg-blue-500 shadow-lg shadow-blue-500/25' :
            index < currentQuestionIndex ? 'bg-blue-300' : 'bg-gray-200'
          }`}
          title={`Scenario ${index + 1}: ${scenario.scenarioTitle}`}
        />
      ))}
    </div>
  </div>
);

export default ProgressBar;