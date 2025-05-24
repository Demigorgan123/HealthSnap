'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">HealthSnap</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600">Features</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600">How it Works</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/auth/login" className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Login</Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-3 items-center">
            <Link href="#home" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="#features" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Features</Link>
            <Link href="#how-it-works" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">How it Works</Link>
            <Link href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="/auth/login" onClick={toggleMenu} className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
