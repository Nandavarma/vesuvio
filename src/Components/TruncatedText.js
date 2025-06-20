import { useState } from "react";

const TruncatedText = ({ text = "", wordLimit = 25 }) => {
  const [isExpanded, setIsExpanded] = useState(false); // default: collapsed

  const words = typeof text === "string" ? text.split(" ") : [];
  const shouldTruncate = words.length > wordLimit;

  const displayedText = shouldTruncate
    ? isExpanded
      ? text
      : words.slice(0, wordLimit).join(" ")
    : text;

  return (
    <div className="my-3">
      <p className="inline">{displayedText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-green-600 font-semibold ml-1"
        >
          {isExpanded ? "...less" : "...more"}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
