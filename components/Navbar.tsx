"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { portfolio } from "@/data/portofolio";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = ["about", "projects", "stack", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5 sm:py-6"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-[var(--nav-bg)] border border-[var(--border-subtle)] shadow-lg shadow-black/[0.03] dark:shadow-black/60 backdrop-blur-xl"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Brand / Logo */}
            <a
              href="#"
              className="group flex items-center gap-3 text-sm font-medium tracking-tight transition-opacity hover:opacity-85"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--text-primary)] text-[11px] font-bold text-[var(--bg-canvas)] tracking-normal transition-transform duration-300 group-hover:scale-105">
                FY
              </span>
              <div className="flex flex-col">
                <span className="font-semibold tracking-tight text-[var(--text-primary)] text-sm">
                  {portfolio.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-mono-code">
                  Backend Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] p-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Controls: Availability, Theme Toggle, CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 font-mono-code">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available</span>
              </div>

              {/* Theme Toggle Button */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all duration-200"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={14} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={14} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              )}

              {/* Contact Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-canvas)] transition-all duration-200 hover:opacity-90 active:scale-95"
              >
                <span>Contact</span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* Mobile Controls: Theme Toggle & Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] text-[var(--text-primary)] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[var(--bg-canvas)] px-6 pt-28 pb-10 md:hidden"
          >
            <div className="space-y-1">
              <p className="text-[11px] font-mono-code uppercase tracking-[0.2em] text-[var(--text-muted)] mb-4">
                Navigation
              </p>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between border-b border-[var(--border-subtle)] py-4 text-2xl font-normal tracking-tight text-[var(--text-primary)] hover:opacity-75 transition-opacity"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={18} className="text-[var(--text-muted)]" />
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-mono-code">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available for backend &amp; engineering roles</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--text-primary)] py-3.5 text-sm font-semibold text-[var(--bg-canvas)] transition hover:opacity-90"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}