"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolio } from "@/data/portofolio";
import HeroSpatialObject from "./HeroSpatialObject";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      <div className="relative mx-auto max-w-6xl w-full px-6 flex-1 flex flex-col justify-center">
        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-6">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-7">
            {/* Crisp Editorial Eyebrow (No pill bubble) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 font-mono-code text-xs text-[var(--text-muted)] tracking-widest uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[var(--text-secondary)] font-medium">Backend Engineer</span>
              <span className="text-[var(--border-strong)]">/</span>
              <span>Software Developer</span>
              <span className="text-[var(--border-strong)]">•</span>
              <span>Indonesia (GMT+7)</span>
            </motion.div>

            {/* Main Editorial Display Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[var(--text-primary)] leading-[0.98]">
                <span className="block text-[var(--text-muted)] font-light text-2xl sm:text-3xl md:text-4xl mb-3 tracking-normal">
                  Hello, I&apos;m
                </span>
                {portfolio.name}.
              </h1>
            </motion.div>

            {/* Calm, Expansive Professional Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-xl"
            >
              Architecting resilient <span className="text-[var(--text-primary)] font-semibold">REST APIs</span>, normalized relational databases, and <span className="text-[var(--text-primary)] font-semibold">intelligent automation workflows</span>. Grounded in software engineering discipline and verified production experience at BPS Pelalawan.
            </motion.p>

            {/* Editorial Action Buttons (Refined borders, no bubble pills) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-[var(--text-primary)] px-6 py-3.5 text-xs font-semibold text-[var(--bg-canvas)] transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              </a>

              <a
                href="/CVFadliYurisman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 py-3.5 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <FileText size={14} />
                <span>Resume PDF</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Sculptural 3D Spatial Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroSpatialObject />
          </div>
        </div>

        {/* Bottom Editorial Metric Strip (Clean, calm typographic alignment) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-14 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono-code"
        >
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              BPS Pelalawan
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">
              Government Systems
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              REST APIs
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">
              Production Architecture
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              MySQL &amp; Postgres
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">
              Relational Schemas
            </p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              AI Automations
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">
              Webhooks &amp; Workflows
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}