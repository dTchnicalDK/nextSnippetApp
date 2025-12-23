// app/components/Features.tsx - Features Section
import {
  FiSearch,
  FiFolder,
  FiShare2,
  FiLock,
  FiCode,
  FiCloud,
} from "react-icons/fi";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FiCode className="text-2xl" />,
    title: "Multi-Language Support",
    description:
      "Supports 50+ programming languages with syntax highlighting and formatting.",
  },
  {
    icon: <FiSearch className="text-2xl" />,
    title: "Smart Search",
    description:
      "Find snippets instantly by language, tags, or code content with fuzzy search.",
  },
  {
    icon: <FiFolder className="text-2xl" />,
    title: "Organized Collections",
    description:
      "Create folders and collections to organize snippets by project or category.",
  },
  {
    icon: <FiShare2 className="text-2xl" />,
    title: "Team Sharing",
    description:
      "Share snippets with your team and collaborate on shared code libraries.",
  },
  {
    icon: <FiLock className="text-2xl" />,
    title: "Secure Storage",
    description:
      "Your snippets are securely encrypted and backed up in the cloud.",
  },
  {
    icon: <FiCloud className="text-2xl" />,
    title: "Cloud Sync",
    description:
      "Access your snippets from any device with automatic cloud synchronization.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful Features for Developers
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Everything you need to manage your code snippets efficiently
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature: Feature, index: number) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105"
          >
            <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-lg mb-4">
              <div className="text-emerald-400">{feature.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
