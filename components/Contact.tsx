"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolio } from "@/data/portofolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 05. Get In Touch"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        {/* Dramatic Closing Statement */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono-code mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for full-time engineering &amp; collaborations</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
              Let&apos;s build resilient systems together.
            </h2>

            <p className="mt-6 text-base sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
              Whether you are looking for a dedicated backend engineer, need high-throughput REST API services, or want to discuss automated workflows, my inbox is always open.
            </p>
          </motion.div>
        </div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Email / Copy Card */}
          <div className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-[var(--border-strong)]">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                  <Mail size={18} />
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-1 text-[11px] font-mono-code text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                Email Address
              </p>
              <a
                href={`mailto:${portfolio.email}`}
                className="mt-1 block text-sm font-semibold text-[var(--text-primary)] hover:underline break-all"
              >
                {portfolio.email}
              </a>
            </div>

            <a
              href={`mailto:${portfolio.email}`}
              className="mt-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
            >
              <span>Send direct email</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* GitHub Card */}
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-[var(--border-strong)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] group-hover:text-[var(--text-primary)] transition-colors">
                  <GithubIcon size={18} />
                </span>
                <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-0.5 text-[11px] font-mono-code text-[var(--text-muted)]">
                  Code
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                GitHub Repository
              </p>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)] tracking-tight">
                github.com/fadliEvan
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>Inspect repositories</span>
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-[var(--border-strong)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] group-hover:text-[var(--text-primary)] transition-colors">
                  <LinkedinIcon size={18} />
                </span>
                <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-0.5 text-[11px] font-mono-code text-[var(--text-muted)]">
                  Network
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                LinkedIn Profile
              </p>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)] tracking-tight">
                Fadli Yurisman
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={13} />
            </div>
          </a>

          {/* Resume Card */}
          <a
            href="/CVFadliYurisman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-[var(--border-strong)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] group-hover:text-[var(--text-primary)] transition-colors">
                  <FileText size={18} />
                </span>
                <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-0.5 text-[11px] font-mono-code text-[var(--text-muted)]">
                  PDF
                </span>
              </div>

              <p className="mt-6 text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                Curriculum Vitae
              </p>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)] tracking-tight">
                Download CV
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
              <span>View resume PDF</span>
              <ArrowUpRight size={13} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}