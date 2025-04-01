import { BlogPostMeta } from "../types";

export function filterPostsByCategoryAndSearch(
  posts: BlogPostMeta[],
  selectedCategory: string,
  searchQuery: string
) {
  return posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}
