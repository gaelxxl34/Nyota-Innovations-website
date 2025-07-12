'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="https://static.readdy.ai/image/1c2e56bb8b2f5d51332d0f9ddb220f05/533004864e99e11afa640a2ac35b3821.png" 
              alt="Nyota Innovations Logo" 
              className="w-16 h-16 rounded-lg"
            />
            <span className="text-white font-bold text-2xl tracking-wide" style={{fontFamily: 'Orbitron, sans-serif'}}>Nyota Innovations</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="/services" className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="/about" className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer whitespace-nowrap">
              About Us
            </Link>
            <Link href="/contact" className="text-blue-100 hover:text-blue-300 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </div>

          <div className="relative md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-100 w-6 h-6 flex items-center justify-center cursor-pointer"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>

            {isMenuOpen && (
              <div
                className="fixed top-0 right-0 h-full w-48 shadow-lg z-50 backdrop-blur-md bg-slate-950
                transform transition-transform duration-300 ease-in-out origin-top-right scale-100 opacity-100 translate-x-0"
                style={{
                  animation: 'slideInFromRight 0.3s ease forwards',
                  transformOrigin: 'top right',
                }}
              >
                <style>
                  {`
                    @keyframes slideInFromRight {
                      0% {
                        opacity: 0;
                        transform: translateX(100%);
                      }
                      100% {
                        opacity: 1;
                        transform: translateX(0);
                      }
                    }
                  `}
                </style>
                <div className="flex flex-col space-y-4 p-4 text-blue-100 relative h-full">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.location.href = '/';
                    }}
                    className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
                    aria-label="Close menu"
                  >
                    &times;
                  </button>
                  <Link href="/" className="cursor-pointer hover:bg-blue-100 rounded-md p-1">
                    Home
                  </Link>
                  <Link href="/services" className="cursor-pointer hover:bg-blue-100 rounded-md p-1">
                    Services
                  </Link>
                  <Link href="/about" className="cursor-pointer hover:bg-blue-100 rounded-md p-1">
                    About Us
                  </Link>
                  <Link href="/contact" className="cursor-pointer hover:bg-blue-100 rounded-md p-1">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
