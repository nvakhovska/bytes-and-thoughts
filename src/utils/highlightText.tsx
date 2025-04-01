import { JSX } from "react";

export function highlightText(text: string, keyword: string): JSX.Element {
  if (!keyword) return <>{text}</>;

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <mark
            key={index}
            style={{
              backgroundColor: "transparent",
              color: "var(--color-primary)",
              fontWeight: 600,
            }}
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}
