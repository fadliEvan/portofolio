"use client";

import { motion } from "framer-motion";
import { Server, Database, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: Server,
    description: "Server runtimes, application frameworks, and RESTful contract design.",
    skills: [
      { name: "Node.js", highlight: "Primary Runtime" },
      { name: "Express.js", highlight: "Web Framework" },
      { name: "FastAPI", highlight: "Python Async API" },
      { name: "PHP", highlight: "Enterprise Systems" },
      { name: "REST APIs", highlight: "Standard Spec" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    description: "Relational persistence, normalized schema design, and index optimization.",
    skills: [
      { name: "PostgreSQL", highlight: "ACID Relational" },
      { name: "MySQL", highlight: "Structured Store" },
      { name: "SQL Query Tuning", highlight: "Performance" },
      { name: "Schema Modeling", highlight: "Relational Integrity" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    description: "Algorithmic data analysis and automated conversational pipelines.",
    skills: [
      { name: "Python", highlight: "Scripting & ML" },
      { name: "K-Means Clustering", highlight: "Unsupervised ML" },
      { name: "WhatsApp Automation", highlight: "Webhook Service" },
      { name: "AI Integration", highlight: "LLM Orchestration" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Developer tooling, containerization, and API verification suites.",
    skills: [
      { name: "Docker", highlight: "Containerization" },
      { name: "Git & GitHub", highlight: "Version Control" },
      { name: "Postman", highlight: "API Testing & Docs" },
      { name: "VS Code", highlight: "Primary IDE" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 03. Technical Capabilities"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
              Tech Stack &amp; Tooling
            </h2>
            <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              Curated technologies and development workflows utilized across server architectures, data stores, and automation engines.
            </p>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)]">
            <span>Engineering Discipline &amp; Scalability</span>
          </div>
        </div>

        {/* 4-Column Grid for Technical Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm flex flex-col justify-between transition-all duration-200 hover:border-[var(--border-strong)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)] group-hover:text-[var(--text-primary)] transition-colors">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono-code text-[11px] text-[var(--text-muted)]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[var(--text-primary)] tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs text-[var(--text-secondary)] font-normal leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="mt-6 space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-3 py-2 transition-colors hover:border-[var(--border-strong)]"
                      >
                        <span className="text-xs font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-code text-[var(--text-muted)]">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-mono-code text-[10px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>Production Ready</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">● Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}