"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Cpu,
  Sliders,
  Send,
  CheckCircle2,
  Database,
  Terminal,
  ShieldAlert,
  Layers,
} from "lucide-react";

const methodologyPhases = [
  {
    id: "think",
    phase: "01",
    tag: "THINK",
    title: "Architectural Blueprinting & Schema Modeling",
    icon: Compass,
    summary:
      "Every resilient system starts with disciplined modeling. I normalize relational schemas, map foreign constraints, and define explicit RESTful contracts before writing implementation logic.",
    deliverables: [
      "Relational Entity Diagrams (MySQL / PostgreSQL)",
      "Strict RESTful API Contract & Auth Spec",
      "Index & Partitioning Strategies for High Read Volumes",
    ],
    visualType: "blueprint",
    meta: {
      status: "Schema Normalized",
      integrity: "3NF Compliant",
      coverage: "100% Endpoints Defined",
    },
  },
  {
    id: "build",
    phase: "02",
    tag: "BUILD",
    title: "Modular Server Logic & Clean Integration",
    icon: Cpu,
    summary:
      "Implementation focuses on modularity and testability. I construct clean controllers in Node.js and PHP with bulletproof input validation, auth middleware, and resilient webhook handlers.",
    deliverables: [
      "Layered Controller-Service-Repository Pattern",
      "Asynchronous Webhook Receivers & Event Handlers",
      "Transactional Isolation Protocols for Critical Writes",
    ],
    visualType: "build",
    meta: {
      status: "Build Verified",
      runtime: "Node.js • PHP • Python",
      concurrency: "Non-blocking I/O",
    },
  },
  {
    id: "refine",
    phase: "03",
    tag: "REFINE",
    title: "Query Optimization & Security Hardening",
    icon: Sliders,
    summary:
      "A working system must also be performant under load. I inspect SQL execution plans (EXPLAIN), tune slow joins, eliminate N+1 queries, and harden endpoints against injection attacks.",
    deliverables: [
      "SQL Query Execution Plan (EXPLAIN) Profiling",
      "Composite Index Tuning for Sub-50ms Lookups",
      "Input Sanitization & Parameterized Query Enforcement",
    ],
    visualType: "refine",
    meta: {
      status: "Latency Optimized",
      latency: "Sub-50ms P95",
      testedAt: "BPS Pelalawan Systems",
    },
  },
  {
    id: "ship",
    phase: "04",
    tag: "SHIP",
    title: "Production Deployment & Operational Reliability",
    icon: Send,
    summary:
      "Shipping with confidence. I verify production endpoints, configure error tracking, and ensure smooth data exchange across front-facing operational portals and external APIs.",
    deliverables: [
      "Containerized Environments & Dependency Isolation",
      "Operational Health Checks & Transaction Auditing",
      "Cross-Department Portal Integration & Hand-off",
    ],
    visualType: "ship",
    meta: {
      status: "Production Ready",
      uptime: "99.9% Reliable",
      delivery: "Automated Workflows",
    },
  },
];

export default function SpatialFeature() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = methodologyPhases[activePhaseIndex];

  return (
    <section id="methodology" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 02. Engineering Methodology"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
              How I Architect Systems
            </h2>
            <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              A disciplined, four-phase engineering approach transforming complex administrative requirements into resilient, high-speed software.
            </p>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>Methodology: Think → Build → Refine → Ship</span>
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {methodologyPhases.map((phase, idx) => {
            const Icon = phase.icon;
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`group text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                  isActive
                    ? "border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-md"
                    : "border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)]"
                }`}
              >
                <div className="flex items-center justify-between font-mono-code text-xs mb-2">
                  <span
                    className={
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 font-bold"
                        : "text-[var(--text-muted)]"
                    }
                  >
                    {phase.phase}
                  </span>
                  <Icon
                    size={15}
                    className={
                      isActive
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                    }
                  />
                </div>
                <p className="text-sm font-bold tracking-tight text-[var(--text-primary)]">
                  {phase.tag}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] mt-0.5 line-clamp-1">
                  {phase.title}
                </p>

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="methodology-pill"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Spatial Stage */}
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono-code text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
                    <span>STAGE {activePhase.phase}</span>
                    <span>•</span>
                    <span>{activePhase.tag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                    {activePhase.title}
                  </h3>
                </div>

                <p className="text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                  {activePhase.summary}
                </p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                    Key Deliverables &amp; Outcomes
                  </p>
                  {activePhase.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-[var(--text-secondary)] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Spatial Representation Frame */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-6 shadow-inner perspective-1000">
                  {/* Visual Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)] font-mono-code text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <Layers size={14} className="text-indigo-500" />
                      <span className="text-[var(--text-secondary)] font-semibold uppercase tracking-wide">
                        Spatial Stage: {activePhase.tag}
                      </span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
                      ● {activePhase.meta.status}
                    </span>
                  </div>

                  {/* Stage-Specific Spatial Interactive Render */}
                  <div className="min-h-[220px] flex flex-col justify-center space-y-4">
                    {activePhase.visualType === "blueprint" && (
                      <div className="space-y-3 font-mono-code text-xs">
                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between">
                          <span className="text-[var(--text-primary)] font-semibold flex items-center gap-2">
                            <Database size={14} className="text-indigo-500" />
                            Entity: operational_records
                          </span>
                          <span className="text-[10px] text-emerald-500 font-medium">PRIMARY KEY (id)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--text-secondary)]">
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">INDEX</p>
                            <p className="font-semibold text-[var(--text-primary)]">idx_entity_date</p>
                          </div>
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">RELATION</p>
                            <p className="font-semibold text-[var(--text-primary)]">1:N Foreign Keys</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePhase.visualType === "build" && (
                      <div className="space-y-3 font-mono-code text-xs">
                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between">
                          <span className="text-[var(--text-primary)] font-semibold flex items-center gap-2">
                            <Terminal size={14} className="text-amber-500" />
                            Route: /api/v1/internal/ops
                          </span>
                          <span className="text-[10px] text-emerald-500 font-medium">authGuard: PASS</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--text-secondary)]">
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">RUNTIME</p>
                            <p className="font-semibold text-[var(--text-primary)]">Node.js / Express</p>
                          </div>
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">RESPONSE</p>
                            <p className="font-semibold text-[var(--text-primary)]">JSON Envelope</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePhase.visualType === "refine" && (
                      <div className="space-y-3 font-mono-code text-xs">
                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between">
                          <span className="text-[var(--text-primary)] font-semibold flex items-center gap-2">
                            <Sliders size={14} className="text-emerald-500" />
                            EXPLAIN Query Execution Plan
                          </span>
                          <span className="text-[10px] text-emerald-500 font-medium">Type: Range (Indexed)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--text-secondary)]">
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">EXECUTION TIME</p>
                            <p className="font-semibold text-emerald-500">14.2ms (-72%)</p>
                          </div>
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">ROW SCAN</p>
                            <p className="font-semibold text-[var(--text-primary)]">Filtered 100%</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activePhase.visualType === "ship" && (
                      <div className="space-y-3 font-mono-code text-xs">
                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between">
                          <span className="text-[var(--text-primary)] font-semibold flex items-center gap-2">
                            <ShieldAlert size={14} className="text-emerald-500" />
                            Production Status: Live &amp; Monitored
                          </span>
                          <span className="text-[10px] text-emerald-500 font-medium">Health: 100%</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[var(--text-secondary)]">
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">APPLICATION</p>
                            <p className="font-semibold text-[var(--text-primary)]">BPS Pelalawan Internal</p>
                          </div>
                          <div className="p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)]">
                            <p className="text-[var(--text-muted)] text-[10px]">DATA SYNC</p>
                            <p className="font-semibold text-emerald-500">Automated Webhooks</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Footer */}
                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[10px] text-[var(--text-muted)]">
                    <span>Validation State</span>
                    <span className="text-[var(--text-primary)] font-medium">
                      Phase {activePhase.phase} Verified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
