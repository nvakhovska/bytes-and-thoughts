interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchQueryChange,
}) => {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchQuery}
      onChange={(e) => onSearchQueryChange(e.target.value)}
      className="blog-search-input"
    />
  );
};
