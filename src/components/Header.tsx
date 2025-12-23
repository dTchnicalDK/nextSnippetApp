// app/components/Header.tsx - Navigation Component
"use client";

import { useState } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FiCode className="text-2xl text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">
              Snippet<span className="text-emerald-400">App</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-emerald-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#demo"
              className="hover:text-emerald-400 transition-colors"
            >
              Demo
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <Link href="/snippet">
              <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#features"
              className="block hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#demo"
              className="block hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </a>
            <a
              href="#pricing"
              className="block hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-medium transition-colors mt-2">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
