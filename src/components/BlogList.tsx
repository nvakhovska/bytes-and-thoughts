import { Link } from "react-router-dom";
import { highlightText } from "@/utils/highlightText";
import { BlogPostMeta } from "../types";

export function BlogList({
  posts,
  searchQuery,
}: {
  posts: BlogPostMeta[];
  searchQuery: string;
}) {
  return (
    <div className="blog-grid">
      {posts.length === 0 ? (
        <p>No posts found matching your query.</p>
      ) : (
        posts.map((post) => (
          <div key={post.slug} className="blog-card">
            <div className="blog-card-content">
              <h2 className="blog-post-title">
                <Link to={`/blog/${post.slug}`}>
                  {highlightText(post.title, searchQuery)}
                </Link>
              </h2>
              <p className="blog-post-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="blog-post-excerpt">
                {highlightText(post.excerpt, searchQuery)}
              </p>
              <Link to={`/blog/${post.slug}`} className="blog-button">
                Read More
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
