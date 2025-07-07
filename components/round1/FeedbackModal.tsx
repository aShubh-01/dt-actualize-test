import React from 'react';

interface CTAModalProps {
    isOpen: boolean;
    roleTitle: string;
    onExploreMore: () => void;
    onLockIn: () => void;
}

const CTAModal: React.FC<CTAModalProps> = ({
    isOpen,
    roleTitle,
    onExploreMore,
    onLockIn
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">

                {/* Header CTA Section */}
                <div className="p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Answers Submitted for {roleTitle}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        What would you like to do next?
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="p-6 bg-gray-50">
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
                            className="flex-1 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:scale-[1.02] flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Lock In This Role</span>
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

export default CTAModal;