import { useState, useEffect } from "react";
import fm from "front-matter";
import { stripMarkdown } from "@/utils/stripMarkdown";

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  category: string;
}

export function useFetchPosts() {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postSlugs = ["solid", "jwt-in-practice", "oauth-2-flow"];
      const results = await Promise.all(
        postSlugs.map(async (slug) => {
          const res = await fetch(
            `${import.meta.env.BASE_URL}posts/${slug}.md`
          );
          const raw = await res.text();
          const { attributes: data, body: content } = fm<{
            title: string;
            date: string;
            category: string;
            excerpt?: string;
          }>(raw);

          return {
            title: data.title,
            date: data.date,
            slug,
            category: data.category,
            excerpt: stripMarkdown(content).substring(0, 140) + "...",
            content: content,
          };
        })
      );
      setPosts(results);
    };

    fetchPosts();
  }, []);

  return posts;
}
