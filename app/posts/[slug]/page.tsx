import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "introduction-to-mdx": {
    title: "Introduction to MDX",
    date: "2024-01-15",
    content: `
# Introduction to MDX

MDX is a powerful format that lets you write JSX in your Markdown documents. It combines the simplicity of Markdown with the power of React components.

## What is MDX?

MDX allows you to use React components directly in your Markdown files. This means you can:

- Write content in Markdown
- Import and use React components
- Create interactive documentation
- Build rich, component-driven content

## Getting Started

To use MDX in a Next.js project, you'll need to install the necessary packages and configure your setup.

\`\`\`bash
npm install next-mdx-remote
\`\`\`

## Benefits

1. **Component Reusability**: Use your existing React components
2. **Type Safety**: Leverage TypeScript for better development experience
3. **Flexibility**: Mix Markdown and JSX seamlessly
4. **Performance**: Optimize with Next.js static generation

MDX opens up new possibilities for content creation, making it easier to build engaging, interactive documentation and blog posts.
    `,
  },
  "building-modern-portfolios": {
    title: "Building Modern Portfolios",
    date: "2024-01-10",
    content: `
# Building Modern Portfolios

Creating a portfolio website is an essential step for any developer or designer. Here's how to build a modern, responsive portfolio.

## Key Features

A great portfolio should include:

- **Clean Design**: Focus on simplicity and readability
- **Responsive Layout**: Works on all devices
- **Fast Performance**: Optimize for speed
- **Showcase Your Work**: Highlight your best projects

## Technology Stack

For this portfolio, I used:

- Next.js for the framework
- TypeScript for type safety
- Tailwind CSS for styling
- MDX for content management

## Best Practices

1. Keep it simple and focused
2. Show, don't tell
3. Make it easy to contact you
4. Keep it updated with your latest work

Building a portfolio is an ongoing process. Start simple and iterate based on feedback.
    `,
  },
  "machine-learning-basics": {
    title: "Machine Learning Basics",
    date: "2024-01-05",
    content: `
# Machine Learning Basics

Machine learning is transforming how we solve problems and make decisions. Let's explore the fundamentals.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Learning

### Supervised Learning
Learning from labeled data to make predictions.

### Unsupervised Learning
Finding patterns in data without labels.

### Reinforcement Learning
Learning through interaction with an environment.

## Common Algorithms

- **Linear Regression**: For predicting continuous values
- **Decision Trees**: For classification tasks
- **Neural Networks**: For complex pattern recognition

## Getting Started

Start with Python and libraries like scikit-learn and TensorFlow. Practice on real datasets and gradually work on more complex problems.

Machine learning is a vast field, but understanding the basics is the first step toward building intelligent systems.
    `,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/posts"
          className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
        >
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-sm text-muted-foreground mb-8 block">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}

