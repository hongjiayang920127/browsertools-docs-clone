import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'AgentDesk - BrowserToolsMCP', 
  description = 'BrowserTools embeds AI code editors and agents directly into your web browser'
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <div className="flex-grow flex">
        <Sidebar />
        <main className="flex-grow px-4 py-8 md:px-8 lg:px-12 max-w-5xl mx-auto w-full">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;