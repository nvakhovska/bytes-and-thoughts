import { useState, useEffect } from "react";
import fm from "front-matter";

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
            category: string;
          }>(raw);

          return {
            title: data.title,
            date: data.date,
            slug,
            category: data.category,
            excerpt: content.substring(0, 140) + "...",
          };
        })
      );
      setPosts(results);
    };

    fetchPosts();
  }, []);

  return posts;
}
