"use client";

import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { CheckCircle, XCircle, Loader2, Info } from 'lucide-react';

// Types
type ToastType = 'success' | 'error' | 'loading' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContextType {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

// Context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Hook to use toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Individual Toast Component
const ToastItem: React.FC<{ toast: Toast; onRemove: (id: string) => void }> = ({ 
  toast, 
  onRemove 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Slide in animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        handleRemove();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration]);

  const handleRemove = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onRemove(toast.id);
    }, 300); // Wait for slide-out animation
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'loading':
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getBackgroundColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50 border-green-500';
      case 'error':
        return 'bg-red-50 border-red-500';
      case 'loading':
        return 'bg-blue-50 border-blue-500';
      case 'info':
        return 'bg-blue-50 border-blue-500';
      default:
        return 'bg-gray-50 border-gray-500';
    }
  };

  return (
    <div
      className={`
        flex items-center gap-3 p-4 rounded-lg border-2 shadow-lg backdrop-blur-sm
        transition-all duration-300 ease-in-out transform
        ${getBackgroundColor()}
        ${isVisible && !isLeaving 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
        }
        max-w-sm w-full
      `}
    >
      <div className="flex-shrink-0">
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-s font-bold text-gray-900 break-words">
          {toast.message}
        </p>
      </div>
      
      {toast.type !== 'loading' && (
        <button
          onClick={handleRemove}
          className="flex-shrink-0 p-1 hover:bg-white/50 rounded transition-colors"
          aria-label="Close notification"
        >
          <XCircle className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};

// Toast Container Component
const ToastContainer: React.FC<{ toasts: Toast[]; onRemove: (id: string) => void }> = ({ 
  toasts, 
  onRemove 
}) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <div className="flex flex-col gap-2 pointer-events-auto">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

// Toast Provider Component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: ToastType, message: string, duration: number = 4000) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    
    const newToast: Toast = {
      id,
      type,
      message,
      duration // All toasts now respect the duration parameter
    };

    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const contextValue: ToastContextType = {
    showToast
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

// Demo Component
const ToastDemo: React.FC = () => {
  const { showToast } = useToast();

  const handleSuccessToast = () => {
    showToast('success', 'Operation completed successfully!', 3000);
  };

  const handleErrorToast = () => {
    showToast('error', 'Something went wrong. Please try again.', 5000);
  };

  const handleLoadingToast = () => {
    showToast('loading', 'Processing your request...');
  };

  const handleInfoToast = () => {
    showToast('info', 'Here is some important information for you.', 4000);
  };

  const handleLongMessageToast = () => {
    showToast('info', 'This is a very long message that should wrap properly within the toast container and still look good.', 6000);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Toast Notification Demo</h2>
      
      <div className="space-y-4">
        <button
          onClick={handleSuccessToast}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Show Success Toast
        </button>
        
        <button
          onClick={handleErrorToast}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Show Error Toast
        </button>
        
        <button
          onClick={handleLoadingToast}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Show Loading Toast
        </button>
        
        <button
          onClick={handleInfoToast}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Show Info Toast
        </button>
        
        <button
          onClick={handleLongMessageToast}
          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Show Long Message Toast
        </button>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Usage Example:</h3>
        <code className="text-sm text-gray-700">
          showToast('success', 'Data saved!', 3000)
        </code>
      </div>
    </div>
  );
};