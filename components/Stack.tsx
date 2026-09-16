"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Cpu, Wrench, Globe, CheckCircle2, ArrowRight } from "lucide-react";

const skillDomains = [
  {
    id: "backend",
    name: "Backend & Systems",
    icon: Server,
    count: "5 Technologies",
    summary:
      "Core expertise in server runtimes, structured RESTful API engineering, and non-blocking asynchronous architectures.",
    highlight: "Primary focus: production-grade internal government operations at BPS Pelalawan.",
    skills: [
      { name: "Node.js", role: "Primary Server Runtime", tag: "Production Core" },
      { name: "Express.js", role: "Fast HTTP Framework", tag: "Active" },
      { name: "FastAPI", role: "Python Async API Spec", tag: "Microservices" },
      { name: "PHP", role: "Enterprise Administrative Logic", tag: "Production Core" },
      { name: "REST APIs", role: "Endpoint Lifecycle & AuthGuards", tag: "Architecture" },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    icon: Database,
    count: "4 Capabilities",
    summary:
      "Normalized relational schema design, transaction isolation, foreign key constraints, and SQL execution plan profiling.",
    highlight: "Hands-on experience tuning complex queries and eliminating retrieval bottlenecks.",
    skills: [
      { name: "PostgreSQL", role: "ACID Relational Architecture", tag: "Primary DB" },
      { name: "MySQL", role: "Structured Government Datastore", tag: "Production Core" },
      { name: "SQL Query Tuning", role: "EXPLAIN Plan & Index Optimization", tag: "Sub-50ms P95" },
      { name: "Schema Modeling", role: "Normalized Referential Integrity", tag: "3NF Standard" },
    ],
  },
  {
    id: "ai",
    name: "Data & AI Automation",
    icon: Cpu,
    count: "4 Integrations",
    summary:
      "Algorithmic data intelligence, unsupervised statistical learning, and conversational automation webhooks.",
    highlight: "Combining machine learning with external messaging webhooks to automate human workflows.",
    skills: [
      { name: "Python", role: "Data Scripting & Algorithms", tag: "Core ML" },
      { name: "K-Means Clustering", role: "Unsupervised Customer Segmentation", tag: "Model Verified" },
      { name: "WhatsApp Automation", role: "Event-driven Webhook Service", tag: "Automation" },
      { name: "AI Integration", role: "LLM Prompting & Structured Routing", tag: "Applied AI" },
    ],
  },
  {
    id: "tools",
    name: "DevOps & Tooling",
    icon: Wrench,
    count: "4 Developer Tools",
    summary:
      "Containerized development setups, Git collaboration workflows, and rigorous API verification suites.",
    highlight: "Disciplined testing and version control practices across engineering iterations.",
    skills: [
      { name: "Docker", role: "Containerization & Environment Isolation", tag: "Deployment" },
      { name: "Git & GitHub", role: "Branching, Pull Requests & Code Review", tag: "Workflow" },
      { name: "Postman", role: "API Spec Testing & Documentation", tag: "QA Verified" },
      { name: "VS Code / Linux", role: "Primary Engineering Workspace", tag: "Daily Driver" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend & Web",
    icon: Globe,
    count: "5 Web Standards",
    summary:
      "Responsive interfaces, modern CSS architectures, and performant web applications for client-facing portals.",
    highlight: "Deployed production web applications including Travel Bali and LuxPhone Store.",
    skills: [
      { name: "React / Next.js", role: "Component Architecture", tag: "Modern Web" },
      { name: "TypeScript", role: "Type-Safe Client Contracts", tag: "Standard" },
      { name: "Tailwind CSS", role: "Utility-First Design Tokens", tag: "Design System" },
      { name: "HTML5 / Modern CSS", role: "Semantic Accessible Layouts", tag: "Standards" },
      { name: "Responsive UI", role: "Fluid Multi-Viewport Verification", tag: "360px - 4K" },
    ],
  },
];

export default function Stack() {
  const [selectedDomainId, setSelectedDomainId] = useState("backend");
  const activeDomain = skillDomains.find((d) => d.id === selectedDomainId) || skillDomains[0];

  return (
    <section id="stack" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 04. Technical Capabilities"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
              Interactive Technology Index
            </h2>
            <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              Explore the technical capabilities, database systems, and automation tooling utilized across server architectures.
            </p>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)]">
            <span>Select a domain to inspect active capabilities</span>
          </div>
        </div>

        {/* Interactive Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Domain Selector Menu */}
          <div className="lg:col-span-5 space-y-2">
            {skillDomains.map((domain) => {
              const Icon = domain.icon;
              const isSelected = selectedDomainId === domain.id;

              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomainId(domain.id)}
                  onMouseEnter={() => setSelectedDomainId(domain.id)}
                  className={`w-full group text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? "border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-sm"
                      : "border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors ${
                        isSelected
                          ? "bg-[var(--bg-surface-elevated)] border-[var(--border-strong)] text-[var(--text-primary)]"
                          : "bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <div>
                      <p
                        className={`text-sm font-semibold tracking-tight transition-colors ${
                          isSelected
                            ? "text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {domain.name}
                      </p>
                      <p className="text-[11px] font-mono-code text-[var(--text-muted)]">
                        {domain.count}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={15}
                    className={`transition-all duration-200 ${
                      isSelected
                        ? "text-indigo-600 dark:text-indigo-400 translate-x-0 opacity-100"
                        : "text-[var(--text-muted)] -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Technology Capability Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDomain.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 shadow-sm space-y-6"
              >
                {/* Header of Active Domain */}
                <div className="pb-5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between font-mono-code text-xs text-[var(--text-muted)] mb-2">
                    <span className="uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
                      Domain Capabilities
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 size={12} />
                      Production Active
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                    {activeDomain.name}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                    {activeDomain.summary}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3 py-1 text-xs font-mono-code text-[var(--text-secondary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{activeDomain.highlight}</span>
                  </div>
                </div>

                {/* Skills Interactive List */}
                <div className="space-y-2.5">
                  {activeDomain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item flex items-center justify-between p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] transition-all duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/60 group-hover/item:bg-indigo-500 transition-colors" />
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            {skill.name}
                          </p>
                          <p className="text-[11px] font-mono-code text-[var(--text-muted)]">
                            {skill.role}
                          </p>
                        </div>
                      </div>

                      <span className="font-mono-code text-[10px] rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-2.5 py-1 text-[var(--text-secondary)] group-hover/item:border-[var(--border-strong)] transition-colors">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Panel Footer */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[11px] text-[var(--text-muted)]">
                  <span>Standard Spec Verified</span>
                  <span className="text-[var(--text-secondary)]">Fadli Yurisman • Stack</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}