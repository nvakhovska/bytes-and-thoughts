import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import "./BlogPostPage.css";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!slug) return;

    fetch(`${import.meta.env.BASE_URL}posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <motion.div
      className="blog-post-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <article className="blog-post-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </motion.div>
  );
}
