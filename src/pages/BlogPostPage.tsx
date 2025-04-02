import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import fm from "front-matter";
import "../assets/styles/BlogPostPage.css";
import rehypeHighlight from "rehype-highlight";

interface FrontMatter {
  title: string;
  date: string;
  category: string;
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState<{
    title: string;
    date: string;
    category: string;
  } | null>(null);
  const [body, setBody] = useState("");

  useEffect(() => {
    if (!slug) return;

    fetch(`${import.meta.env.BASE_URL}posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { attributes, body } = fm<{
          title: string;
          date: string;
          category: string;
        }>(text);
        setMeta(attributes);
        setBody(body);
      });
  }, [slug]);

  return (
    <motion.div
      className="blog-post-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {meta && (
        <header className="blog-post-header">
          <h1 className="blog-post-title">{meta.title}</h1>
          <p className="blog-post-meta">
            {new Date(meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {meta.category}
          </p>
        </header>
      )}

      <article className="blog-post-content">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{body}</ReactMarkdown>
      </article>
    </motion.div>
  );
}
