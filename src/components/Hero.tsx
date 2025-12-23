// app/components/Hero.tsx - Hero Section
const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Organize, Save & Reuse{" "}
          <span className="text-emerald-400">Code Snippets</span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          A powerful, developer-friendly tool to save, organize, and instantly
          access your code snippets across all your projects and devices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg shadow-emerald-500/20">
            Start Free Trial
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors border border-gray-700">
            View Demo
          </button>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-3xl -z-10"></div>
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-4 md:p-6 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-400">snippet.js</span>
            </div>
            <pre className="text-left overflow-x-auto text-sm md:text-base">
              <code className="text-gray-300">
                {`// Save your reusable code snippets
const snippet = {
  id: "fetch-user-data",
  title: "Fetch User Data with Error Handling",
  language: "javascript",
  tags: ["api", "fetch", "error-handling"],
  code: \`async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}\`,
  createdAt: new Date().toISOString()
};

// Save to your personal snippet library
snippetApp.save(snippet);`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
