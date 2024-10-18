"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  // Mengelola perubahan mode gelap
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-20 flex h-16 border-b bg-base-bg/60 backdrop-blur border-base-border">
      <nav className="flex w-full items-center gap-6 sm:gap-9">
        <Link
          className="block overflow-hidden transition-all group relative w-full"
          href={"/"}
        >
          <span className="inline-block group-hover:-translate-y-full transition-all ease-in-out">
            Denny
          </span>
          <span className="inline opacity-0 group-hover:opacity-100 absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
            Full Stack Developer
          </span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 transition-all">
          <Link
            className="focus-outline rounded transition-all ease-in-out"
            href={"/portfolios"}
          >
            Portfolio
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4 transition-all">
          <a
            className="inline-flex select-none items-center justify-center rounded p-2 transition-all ease-in-out -m-2"
            href="https://github.com/katzura1"
            target="_blank"
            title="GitHub"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            className="inline-flex select-none items-center justify-center rounded p-2 transition-all ease-in-out -m-2"
            href="https://www.linkedin.com/in/denny-kz1/"
            target="_blank"
            title="Linkedin"
            aria-label="Linkedin"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <button
            className="inline-flex select-none items-center justify-center rounded p-2 transition-all ease-in-out"
            onClick={() => setDarkMode(!darkMode)}
          >
            <i className={`far ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
