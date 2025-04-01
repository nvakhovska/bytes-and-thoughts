import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { CategoryFilter } from "../components/CategoryFilter";
import { SearchBar } from "../components/SearchBar";
import "../assets/styles/BlogHome.css";
import { highlightText } from "@/utils/highlightText";

export default function BlogHome() {
  const posts = useFetchPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      className="blog-home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="blog-title">Blog</h1>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <SearchBar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
      />

      <div className="blog-grid">
        {filteredPosts.length === 0 ? (
          <p>No posts found matching your query.</p>
        ) : (
          filteredPosts.map((post) => (
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
    </motion.div>
  );
}
