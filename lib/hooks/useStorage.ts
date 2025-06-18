import { useCallback } from 'react';

export const useStorage = () => {
  const getStorageItem = useCallback((key: string, defaultValue: any = null) => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch { 
      return defaultValue; 
    }
  }, []);

  const setStorageItem = useCallback((key: string, value: any) => {
    try { 
      sessionStorage.setItem(key, JSON.stringify(value)); 
    } catch (error) { 
      console.error('Storage error:', error); 
    }
  }, []);

  const removeStorageItem = useCallback((key: string) => {
    try { 
      sessionStorage.removeItem(key); 
    } catch (error) { 
      console.error('Storage error:', error); 
    }
  }, []);

  return { getStorageItem, setStorageItem, removeStorageItem };
};