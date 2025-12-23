// app/components/Footer.tsx - Footer Component
import {
  FiCode,
  FiMail,
  FiTwitter,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FiCode className="text-2xl text-emerald-400" />
              <span className="text-xl font-bold">
                Snippet<span className="text-emerald-400">App</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate code snippet manager for developers. Organize, save,
              and reuse your code efficiently.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Demo
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FiTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FiMail className="text-xl" />
              </a>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-l px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-r text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SnippetApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
