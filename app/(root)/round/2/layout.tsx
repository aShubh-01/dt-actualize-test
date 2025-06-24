import React from 'react';
import Header from '@/components/round2/hooks/Header'
import Sidebar from '@/components/round2/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div>
          <Header/>
          {children}
        </div>
    </div>
  );
};

export default PageLayout;