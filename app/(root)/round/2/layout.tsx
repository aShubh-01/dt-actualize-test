import React from 'react';
import Header from '@/components/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div>
        <div>header</div>
        {children}
    </div>
  );
};

export default PageLayout;