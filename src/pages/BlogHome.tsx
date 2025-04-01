import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fm from "front-matter";
import "./BlogHome.css";

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

export default function BlogHome() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postSlugs = ["jwt-in-practice", "oauth-2-flow"];
      const results = await Promise.all(
        postSlugs.map(async (slug) => {
          const res = await fetch(
            `${import.meta.env.BASE_URL}posts/${slug}.md`
          );
          const raw = await res.text();
          const { attributes: data, body: content } = fm<{
            title: string;
            date: string;
          }>(raw);

          return {
            title: data.title,
            date: data.date,
            slug,
            excerpt: content.substring(0, 140) + "...",
          };
        })
      );
      setPosts(results);
    };
    fetchPosts();
  }, []);

  return (
    <motion.div
      className="blog-home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="blog-title">Blog</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.slug} className="blog-card">
            <div className="blog-card-content">
              <h2 className="blog-post-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="blog-button">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
