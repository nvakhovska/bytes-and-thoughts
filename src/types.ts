export interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  category: string;
}

export interface BlogPost extends BlogPostMeta {
  searchQuery: string;
}
