import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto"
                src="https://mintlify.s3.us-west-1.amazonaws.com/agentdesk/logo/agentdesk-logo-light.svg"
                alt="AgentDesk Logo"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">BrowserToolsMCP</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://x.com/tedx_ai" className="nav-link">
              Support
            </Link>
            <Link href="https://github.com/AgentDeskAI/browser-tools-mcp" className="nav-link">
              GitHub
            </Link>
            <Link href="https://agentdesk.ai" className="btn-primary">
              AgentDesk
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="https://x.com/tedx_ai" className="block px-3 py-2 rounded-md text-base font-medium nav-link">
              Support
            </Link>
            <Link href="https://github.com/AgentDeskAI/browser-tools-mcp" className="block px-3 py-2 rounded-md text-base font-medium nav-link">
              GitHub
            </Link>
            <Link href="https://agentdesk.ai" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary">
              AgentDesk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;