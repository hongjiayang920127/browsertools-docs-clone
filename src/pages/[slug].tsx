import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '@/components/Layout';
import MDXComponents from '@/components/mdx/MDXComponents';
import { getDocBySlug, getAllDocs } from '@/lib/mdx';

interface DocPageProps {
  code: string;
  frontmatter: {
    title: string;
    description?: string;
  };
}

const DocPage: React.FC<DocPageProps> = ({ code, frontmatter }) => {
  // This needs to be dynamic because MDX content is loaded at build time
  const Component = React.useMemo(() => (code ? getMDXComponent(code) : null), [code]);

  if (!Component) {
    return (
      <Layout>
        <div className="prose dark:prose-invert">
          <h1>Document not found</h1>
          <p>The requested document could not be found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${frontmatter.title} - AgentDesk BrowserToolsMCP`} description={frontmatter.description}>
      <div className="prose dark:prose-invert max-w-none">
        <h1>{frontmatter.title}</h1>
        <Component components={MDXComponents} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      code: doc.code,
      frontmatter: doc.frontmatter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getAllDocs();
  const paths = docs.map((doc) => ({
    params: {
      slug: doc.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default DocPage;