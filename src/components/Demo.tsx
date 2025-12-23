// app/components/Demo.tsx - Interactive Demo Section
"use client";

import { useState, useEffect } from "react";
import { FiCopy, FiSave, FiTag } from "react-icons/fi";

interface Snippet {
  id: number;
  title: string;
  language: string;
  tags: string[];
  code: string;
}

const initialSnippet: Snippet = {
  id: 1,
  title: "React useState Hook",
  language: "javascript",
  tags: ["react", "hooks", "state"],
  code: `import { useState } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}`,
};

const Demo = () => {
  const [snippet, setSnippet] = useState<Snippet>(initialSnippet);
  const [copied, setCopied] = useState<boolean>(false);
  const [newTag, setNewTag] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    alert("Snippet saved to your library!");
    // In a real app, this would call an API
  };

  const addTag = () => {
    if (newTag.trim() && !snippet.tags.includes(newTag.trim())) {
      setSnippet({
        ...snippet,
        tags: [...snippet.tags, newTag.trim()],
      });
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSnippet({
      ...snippet,
      tags: snippet.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  return (
    <section id="demo" className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Out</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience how easy it is to create and manage code snippets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Snippet Editor */}
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-400">{snippet.title}.js</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-2 text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
              >
                <FiCopy />
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="p-4">
              <textarea
                value={snippet.code}
                onChange={(e) =>
                  setSnippet({ ...snippet, code: e.target.value })
                }
                className="w-full h-64 bg-gray-900 text-gray-100 font-mono text-sm p-4 rounded resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                spellCheck="false"
              />

              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <FiTag className="text-gray-400 mr-2" />
                  <span className="text-gray-400">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {snippet.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-xs hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addTag()}
                    placeholder="Add a tag..."
                    className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={addTag}
                    className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                <FiSave />
                <span>Save Snippet</span>
              </button>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Why Use SnippetApp?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-emerald-500/20 p-1 rounded mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Save Time</h4>
                    <p className="text-gray-400 text-sm">
                      Stop rewriting the same code. Access your snippets
                      instantly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-500/20 p-1 rounded mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Stay Organized</h4>
                    <p className="text-gray-400 text-sm">
                      Categorize snippets by project, language, or custom tags.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-500/20 p-1 rounded mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Team Collaboration</h4>
                    <p className="text-gray-400 text-sm">
                      Share snippets with your team and maintain code
                      consistency.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-4">
                Supported Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "Java",
                  "C++",
                  "PHP",
                  "Ruby",
                  "Go",
                  "Rust",
                  "Swift",
                  "Kotlin",
                  "SQL",
                ].map((lang: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-700/50 px-3 py-1 rounded text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
