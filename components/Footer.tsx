"use client";

import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portofolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 bg-[var(--bg-canvas)]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--text-primary)] text-[10px] font-bold text-[var(--bg-canvas)] tracking-normal">
                FY
              </span>
              <span className="font-semibold text-[var(--text-primary)] tracking-tight">
                {portfolio.name}
              </span>
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)] font-normal max-w-sm">
              Backend Engineer specializing in REST APIs, relational databases, and AI automation systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[var(--text-secondary)]">
            <a href="#about" className="hover:text-[var(--text-primary)] transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">
              Projects
            </a>
            <a href="#stack" className="hover:text-[var(--text-primary)] transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-[var(--text-primary)] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">
              Contact
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-4 py-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-200"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[var(--text-muted)]">
          <p>
            © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
          <p>
            Engineered with Next.js, React &amp; TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}