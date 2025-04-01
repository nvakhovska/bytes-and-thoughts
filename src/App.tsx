import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./pages/BlogHome";
import BlogPostPage from "./pages/BlogPostPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter basename="/bytes-and-thoughts">
        <div className="container">
          <Routes>
            <Route path="/" element={<BlogHome />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
