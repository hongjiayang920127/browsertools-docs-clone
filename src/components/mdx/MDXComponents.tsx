import React from 'react';
import Link from 'next/link';

interface HeadingProps {
  id?: string;
  children: React.ReactNode;
}

export const H1: React.FC<HeadingProps> = ({ children, id }) => (
  <h1 id={id} className="mt-2 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
    {children}
  </h1>
);

export const H2: React.FC<HeadingProps> = ({ children, id }) => (
  <h2 id={id} className="mt-10 mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
    <a href={`#${id}`} className="anchor">
      {children}
    </a>
  </h2>
);

export const H3: React.FC<HeadingProps> = ({ children, id }) => (
  <h3 id={id} className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
    <a href={`#${id}`} className="anchor">
      {children}
    </a>
  </h3>
);

export const H4: React.FC<HeadingProps> = ({ children, id }) => (
  <h4 id={id} className="mt-6 mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    <a href={`#${id}`} className="anchor">
      {children}
    </a>
  </h4>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mb-4 text-base text-gray-700 dark:text-gray-300 leading-7">{children}</p>
);

export const A: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} className="text-primary hover:text-primary-dark dark:hover:text-primary-light underline">
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary-dark dark:hover:text-primary-light underline"
    >
      {children}
    </a>
  );
};

export const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="mb-4 pl-6 list-disc text-gray-700 dark:text-gray-300">{children}</ul>
);

export const OL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="mb-4 pl-6 list-decimal text-gray-700 dark:text-gray-300">{children}</ol>
);

export const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="mb-1">{children}</li>
);

export const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="font-semibold">{children}</strong>
);

export const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <blockquote className="mb-4 pl-4 border-l-4 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 italic">
    {children}
  </blockquote>
);

export const HR: React.FC = () => (
  <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
);

export const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-mono">
    {children}
  </code>
);

export const Pre: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <pre className="mb-4 p-4 rounded-lg bg-gray-800 dark:bg-gray-900 text-gray-200 overflow-x-auto text-sm">
    {children}
  </pre>
);

interface InfoProps {
  children: React.ReactNode;
  title?: string;
}

export const Info: React.FC<InfoProps> = ({ children, title = 'Info' }) => (
  <div className="mb-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
    <div className="flex items-center mb-2">
      <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <span className="font-medium text-blue-800 dark:text-blue-300">{title}</span>
    </div>
    <div className="text-blue-700 dark:text-blue-200">{children}</div>
  </div>
);

export const Tip: React.FC<InfoProps> = ({ children, title = 'Tip' }) => (
  <div className="mb-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
    <div className="flex items-center mb-2">
      <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="font-medium text-green-800 dark:text-green-300">{title}</span>
    </div>
    <div className="text-green-700 dark:text-green-200">{children}</div>
  </div>
);

export const Warning: React.FC<InfoProps> = ({ children, title = 'Warning' }) => (
  <div className="mb-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
    <div className="flex items-center mb-2">
      <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <span className="font-medium text-yellow-800 dark:text-yellow-300">{title}</span>
    </div>
    <div className="text-yellow-700 dark:text-yellow-200">{children}</div>
  </div>
);

const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  li: LI,
  strong: Strong,
  blockquote: Blockquote,
  hr: HR,
  code: Code,
  pre: Pre,
  Info,
  Tip,
  Warning,
};

export default MDXComponents;