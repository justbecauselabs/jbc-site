"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Just Because Labs
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row gap-6 p-6 md:p-0">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="/story" className="hover:text-purple-400 transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}