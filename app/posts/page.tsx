import Link from "next/link";
import React from "react";

const posts = [
  {
    slug: "introduction-to-mdx",
    title: "Introduction to MDX",
    description: "Learn how to use MDX to write React components in Markdown.",
    date: "2024-01-15",
  },
  {
    slug: "building-modern-portfolios",
    title: "Building Modern Portfolios",
    description: "A guide to creating beautiful, responsive portfolio websites with Next.js.",
    date: "2024-01-10",
  },
  {
    slug: "machine-learning-basics",
    title: "Machine Learning Basics",
    description: "An introduction to machine learning concepts and practical applications.",
    date: "2024-01-05",
  },
];

export default function PostsPage() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Posts</h1>
        <p className="text-muted-foreground mb-8">
          Thoughts, tutorials, and insights on web development, computer science, and more.
        </p>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="block p-6 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-3">{post.description}</p>
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

