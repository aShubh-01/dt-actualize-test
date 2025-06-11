import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
    <div className="bg-white p-12 rounded-3xl shadow-lg max-w-md w-full text-center space-y-6">
      <svg className="w-12 h-12 animate-spin text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Questions</h2>
        <p className="text-gray-600">Please wait while we prepare your challenge...</p>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;