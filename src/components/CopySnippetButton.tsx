"use client";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

interface CopySnippetButtonProps {
  snippetCode: string;
  className?: string;
}

const CopySnippetButton: React.FC<CopySnippetButtonProps> = ({
  snippetCode,
  className = "",
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-lg border transition-colors ${
        copied
          ? "bg-emerald-100/2 border-emerald-300 text-emerald-300"
          : "bg-gray-100/4 border-gray-300 text-gray-300 hover:bg-gray-500"
      } ${className}`}
      aria-label={copied ? "Copied" : "Copy code"}
      disabled={!snippetCode || snippetCode.trim() === ""}
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <CopyCheckIcon className="size-5" />
        </>
      ) : (
        <CopyIcon className="size-5" />
      )}
    </button>
  );
};

export default CopySnippetButton;
