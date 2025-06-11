import React from 'react';

interface FeedbackModalProps {
    isOpen: boolean;
    feedback: string;
    onExploreMore: () => void;
    onLockIn: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
    isOpen,
    feedback,
    onExploreMore,
    onLockIn
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900">Feedback</h2>
                        <p className="text-sm text-gray-600 mt-1">AI-generated insights on your responses</p>
                    </div>
                </div>

                {/* Main Feedback Section */}
                <div className="p-6 max-h-96 overflow-y-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <div className="flex items-start space-x-3">
                            {/* AI Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Feedback Content */}
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mt-[5px]">AI Analysis</h3>
                                {feedback ? (
                                    <div className="prose prose-sm max-w-none">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{feedback}</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div className="animate-pulse">
                                            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-4/6 mb-2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-3/6"></div>
                                        </div>
                                        <p className="text-sm text-gray-500 italic">Analyzing your responses...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={onExploreMore}
                            className="flex-1 px-6 py-3 rounded-2xl border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-semibold transition-all duration-200 hover:scale-[1.02] flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span>Explore Other Roles</span>
                        </button>

                        <button
                            onClick={onLockIn}
                            className="flex-1 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:scale-[1.02] flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Lock In</span>
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-[15px] text-gray-500">
                            You can explore other roles or lock in your journey with this role!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;