import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./pages/BlogHome";
import BlogPostPage from "./pages/BlogPostPage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <BrowserRouter basename="/bytes-and-thoughts">
      <div className="container">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
