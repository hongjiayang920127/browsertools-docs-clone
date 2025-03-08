import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const DOCS_PATH = path.join(process.cwd(), 'content');

export const getDocsSlugs = () => {
  const files = fs.readdirSync(DOCS_PATH);
  return files.filter(file => /\.mdx?$/.test(file)).map(file => file.replace(/\.mdx?$/, ''));
};

export const getDocBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(DOCS_PATH, `${realSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const source = fs.readFileSync(filePath, 'utf8');
  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug];
      return options;
    },
  });

  return {
    code,
    frontmatter,
    slug: realSlug,
  };
};

export const getAllDocs = async () => {
  const slugs = getDocsSlugs();
  const docs = [];
  
  for (const slug of slugs) {
    const doc = await getDocBySlug(slug);
    if (doc) {
      docs.push(doc);
    }
  }
  
  return docs;
};