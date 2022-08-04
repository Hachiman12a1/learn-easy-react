import React from 'react';
import { Footer, Header } from '../common';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
