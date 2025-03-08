import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

interface NavGroup {
  group: string;
  pages: NavItem[];
}

const navItems: NavGroup[] = [
  {
    group: 'Get Started',
    pages: [
      {
        title: 'Installation',
        href: '/installation',
        description: 'BrowserTools embeds AI code editors and agents directly into your web browser'
      },
      {
        title: 'Quickstart',
        href: '/quickstart',
        description: 'Start using BrowserTools MCP'
      },
      {
        title: 'Contributing',
        href: '/contributing',
        description: 'Architecture overview and contribution guide'
      }
    ]
  }
];

const globalLinks = [
  {
    anchor: 'Github',
    icon: 'book-open-cover',
    href: 'https://github.com/AgentDeskAI/browser-tools-mcp'
  },
  {
    anchor: 'Blog',
    icon: 'slack',
    href: 'https://blog.agentdesk.ai/'
  },
  {
    anchor: 'Support',
    icon: 'newspaper',
    href: 'https://x.com/tedx_ai'
  },
  {
    anchor: 'Top Secret Waitlist',
    icon: 'user-secret',
    href: 'https://agentdesk.ai/'
  }
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button
          onClick={toggleSidebar}
          className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-full overflow-y-auto py-4 px-3">
          <div className="space-y-6">
            {/* Global links */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Resources
              </h3>
              <div className="mt-2 space-y-1">
                {globalLinks.map((link) => (
                  <a
                    key={link.anchor}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md nav-link"
                  >
                    {link.anchor}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation groups */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                BrowserTools MCP Guide
              </h3>
              {navItems.map((navGroup) => (
                <div key={navGroup.group} className="mt-3">
                  <h4 className="px-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {navGroup.group}
                  </h4>
                  <div className="mt-1 space-y-1">
                    {navGroup.pages.map((item) => {
                      const isActive = router.pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`
                            group flex items-center px-2 py-2 text-sm font-medium rounded-md 
                            ${isActive 
                              ? 'bg-primary/10 text-primary dark:text-primary-light' 
                              : 'nav-link'
                            }
                          `}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;