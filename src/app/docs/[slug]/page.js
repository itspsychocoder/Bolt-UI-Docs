import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Use MDX in the App Router
import matter from 'gray-matter';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'docs'));
  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
}

export default async function DocPage({ params }) {
  const { slug } = params;

  // Read the MDX file
  const filePath = path.join(process.cwd(), 'docs', `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return (
    <div className="prose max-w-none mx-auto px-4">
      <h1 className='text-3xl font-bold'>{data.title}</h1>
      <p>{data.description}</p>
      <MDXRemote source={content} />
    </div>
  );
}
