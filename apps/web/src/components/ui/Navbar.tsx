"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-md"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:py-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-600" aria-hidden />
            <Link href="/" className="text-white text-sm font-semibold tracking-wide">
              StealMyPrompts
            </Link>
          </div>

          {/* Center: Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/browse" className="text-gray-200 hover:text-white text-sm">Browse</Link>
            <Link href="/create" className="text-gray-200 hover:text-white text-sm">Create</Link>
            <Link href="/community" className="text-gray-200 hover:text-white text-sm">Community</Link>
            <Link href="/pricing" className="text-gray-200 hover:text-white text-sm">Pricing</Link>
          </div>

          {/* Right: Auth actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-gray-200 hover:text-white text-sm">Log In</Link>
            <Link
              href="/signup"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-gray-200 hover:text-white"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col gap-3">
              <Link href="/browse" className="text-gray-200 hover:text-white text-sm">Browse</Link>
              <Link href="/create" className="text-gray-200 hover:text-white text-sm">Create</Link>
              <Link href="/community" className="text-gray-200 hover:text-white text-sm">Community</Link>
              <Link href="/pricing" className="text-gray-200 hover:text-white text-sm">Pricing</Link>
              <div className="h-px bg-white/10 my-1" />
              <Link href="/login" className="text-gray-200 hover:text-white text-sm">Log In</Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
