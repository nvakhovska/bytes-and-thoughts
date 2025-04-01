import { motion } from "framer-motion";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { BlogList } from "../components/BlogList";
import "../assets/styles/BlogHome.css";
import { filterPostsByCategoryAndSearch } from "@/utils/filterPosts";

interface BlogHomeProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function BlogHome({
  searchQuery,
  selectedCategory,
}: BlogHomeProps) {
  const posts = useFetchPosts();

  // Filter posts based on selected category and search input
  const filteredPosts = filterPostsByCategoryAndSearch(
    posts,
    selectedCategory,
    searchQuery
  );

  return (
    <motion.div
      className="blog-home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="blog-title">Blog</h1>

      {/* Render filtered blog posts */}
      <BlogList posts={filteredPosts} searchQuery={searchQuery} />
    </motion.div>
  );
}
