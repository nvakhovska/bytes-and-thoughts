export const fetchMarkdown = async (slug: string): Promise<string> => {
  const res = await fetch(`/posts/${slug}.md`);
  return await res.text();
};
