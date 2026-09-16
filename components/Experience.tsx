"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "2025",
    role: "Backend Developer",
    type: "Internship",
    organization: "BPS Kabupaten Pelalawan",
    location: "Pelalawan, Riau, Indonesia",
    description:
      "Contributed to the development and maintenance of internal digital government systems, delivering resilient backend architecture for data operations.",
    impacts: [
      "Engineered production-ready REST API endpoints using Node.js and PHP to serve internal application workflows.",
      "Designed and modeled normalized relational database schemas across MySQL and PostgreSQL.",
      "Diagnosed query bottlenecks, refactoring SQL queries for improved data retrieval times.",
      "Collaborated closely with cross-functional teams to integrate backend endpoints with front-facing operational portals.",
    ],
    tech: ["Node.js", "PHP", "MySQL", "PostgreSQL", "REST API", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 04. Work History & Academic Foundation"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Intro Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              Experience &amp; Education
            </h2>
            <p className="text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
              Applying software engineering discipline to government data systems and collaborative production environments.
            </p>

            {/* Academic Card */}
            <div className="mt-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border-subtle)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]">
                  <GraduationCap size={16} />
                </span>
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Informatics Engineering</p>
                  <p className="text-[10px] text-[var(--text-muted)] font-mono-code">Bachelor Degree (Final Year)</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-[var(--text-secondary)] leading-relaxed">
                Core coursework in Relational Database Systems, Software Architecture, Distributed Networks, and Machine Learning.
              </p>
            </div>
          </div>

          {/* Right Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 md:p-10 shadow-sm transition-all duration-200 hover:border-[var(--border-strong)]"
              >
                {/* Top bar with role, badge, and date */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                        <Briefcase size={14} />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-0.5 text-[11px] font-mono-code text-[var(--text-muted)]">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-base text-[var(--text-secondary)] font-semibold">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono-code text-xs text-[var(--text-muted)] gap-1">
                    <span className="inline-flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                      <Calendar size={13} className="text-[var(--text-muted)]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                  {exp.description}
                </p>

                {/* Impact bullets */}
                <ul className="mt-6 space-y-3">
                  {exp.impacts.map((impact, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                      <ArrowRight size={14} className="text-[var(--text-muted)] mt-1 shrink-0 group-hover:text-[var(--text-primary)] transition-colors" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology tags */}
                <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-3 py-1 font-mono-code text-xs text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}