import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/round2/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
        <Sidebar />
        {children}
    </div>
  );
};

export default PageLayout;