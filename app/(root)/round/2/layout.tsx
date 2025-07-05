import React from 'react';
import Header from '@/components/round2/hooks/Header'
import Sidebar from '@/components/round2/Sidebar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Main content area with sidebar */}
      <div className='flex flex-1'>
        <div className='fixed left-0 top-0 h-screen z-10'>
          <Sidebar />
        </div>
        <div className='flex-1 flex flex-col items-center ml-64'>
          <Header/>
          <main className='w-full max-w-7xl px-4 flex-1'>
            {children}
          </main>
        </div>
      </div>
      
      {/* Footer with left margin to account for fixed sidebar */}
      <div className='ml-64'>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;