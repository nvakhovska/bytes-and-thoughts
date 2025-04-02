export function stripMarkdown(md: string): string {
  return md
    .replace(/[#*_>`~\-!+[\]()]/g, "") // remove most markdown syntax
    .replace(/!\[.*?\]\(.*?\)/g, "") // remove images
    .replace(/\[(.*?)\]\(.*?\)/g, "$1") // convert [text](link) to text
    .replace(/\n/g, " ") // newlines to space
    .trim();
}
