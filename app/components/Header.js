"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Browse Jobs" },
    { href: "/companies", label: "Companies" },
    { href: "/career-advice", label: "Career Advice" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="\Next-Jobs-Logo.svg"
              alt="Website Logo"
              width={120}
              height={60}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-[#2563eb] font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6]"
              placeholder="Job title, keywords, or company"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm px-6 py-2 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <select className="text-sm border-none focus:ring-0 bg-transparent outline-none">
                <option>Location (Anywhere)</option>
                <option>Remote</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
              <select className="text-sm border-none focus:ring-0 bg-transparent outline-none">
                <option>Job Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-[#2563eb] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/login"
                  className="block py-2 text-gray-600 hover:text-[#2563eb]"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block py-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-center rounded-lg transition-colors"
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
