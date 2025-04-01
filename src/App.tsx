import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./pages/BlogHome";
import BlogPostPage from "./pages/BlogPostPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { filterPostsByCategoryAndSearch } from "./utils/filterPosts";

function App() {
  // Fetch all blog posts
  const posts = useFetchPosts();

  // State for search and category filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique categories from posts
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  // Filter posts by selected category and search query
  const filteredPosts = filterPostsByCategoryAndSearch(
    posts,
    selectedCategory,
    searchQuery
  );

  return (
    <BrowserRouter basename="/bytes-and-thoughts">
      <Navbar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <BlogHome
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            }
          />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
