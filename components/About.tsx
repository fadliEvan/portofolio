"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit, GraduationCap, CheckCircle2 } from "lucide-react";

const focusAreas = [
  {
    icon: Server,
    title: "RESTful API Architecture",
    description:
      "Crafting clean, well-documented endpoints with robust validation, authorization protocols, and efficient lifecycle handling using Node.js & PHP.",
  },
  {
    icon: Database,
    title: "Data Modeling & Optimization",
    description:
      "Designing normalized relational database schemas across MySQL and PostgreSQL with an emphasis on query performance, indexes, and referential integrity.",
  },
  {
    icon: BrainCircuit,
    title: "Automation & AI Integrations",
    description:
      "Engineering automated pipelines and smart webhook bots that link external APIs with custom server logic to eliminate manual operational friction.",
  },
];

const highlights = [
  "Production backend development experience at BPS Kabupaten Pelalawan",
  "Final-year Informatics Engineering student passionate about system infrastructure",
  "Practical experience with Python-based machine learning (K-Means Clustering)",
  "Disciplined focus on clean code, RESTful conventions, and SQL query tuning",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 01. Profile & Background"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement & Narrative */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12]"
            >
              Engineering reliable backend foundations for real-world operations.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 space-y-5 text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed"
            >
              <p>
                I am a final-year Informatics Engineering student specializing in backend architecture, API engineering, and database management. I focus on building stable, scalable server logic that applications rely upon.
              </p>
              <p>
                During my tenure at <span className="text-[var(--text-primary)] font-semibold">BPS Kabupaten Pelalawan</span>, I worked directly on internal government systems—developing production REST APIs in Node.js and PHP, structuring relational tables, and optimizing complex queries for daily administrative reliability.
              </p>
              <p>
                My work extends toward workflow automation and algorithmic data analysis, combining machine learning models like K-Means clustering with automated webhook services such as AI WhatsApp bots.
              </p>
            </motion.div>

            {/* Quick check highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Key Pillars & Education Badge */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Badge Card */}
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm">
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-primary)]">Informatics Engineering</p>
                  <p className="text-xs text-[var(--text-muted)] font-mono-code">Final-Year Undergraduate</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                Grounded in software engineering principles, algorithms, data structures, and database management systems.
              </p>
            </div>

            {/* Focus Pillars */}
            <div className="space-y-3">
              {focusAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-all duration-200 hover:border-[var(--border-strong)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        <IconComponent size={16} />
                      </div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] tracking-wide">
                        {area.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] font-normal pl-11">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}