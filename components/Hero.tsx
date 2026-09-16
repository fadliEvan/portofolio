"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Database, Bot, ArrowUpRight, ShieldCheck, FileText } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolio } from "@/data/portofolio";

const inspectorTabs = [
  {
    id: "api",
    label: "REST API Spec",
    icon: Terminal,
    status: "200 OK • 18ms",
    code: `// Production REST API Endpoint
router.get("/v1/analytics/records", authGuard, async (req, res) => {
  const result = await db.query(
    "SELECT id, metrics, timestamp FROM operational_logs ORDER BY id DESC LIMIT 50"
  );
  return res.status(200).json({ status: "success", data: result.rows });
});`,
  },
  {
    id: "db",
    label: "Schema Architecture",
    icon: Database,
    status: "ACID Normalized",
    code: `-- Relational Schema & Indexing
CREATE TABLE internal_records (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  entity_code VARCHAR(64) NOT NULL,
  data_payload JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_entity_timestamp (entity_code, created_at)
);`,
  },
  {
    id: "bot",
    label: "AI Webhook Pipeline",
    icon: Bot,
    status: "Event Stream Active",
    code: `// AI Conversation & Automation Pipeline
async function handleIncomingWebhook(event) {
  const { from, text } = event.payload;
  const aiResponse = await aiService.complete({
    prompt: text,
    context: "Structured workflow orchestration & customer routing"
  });
  await whatsappClient.sendText(from, aiResponse.text);
}`,
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpec = inspectorTabs[activeTab];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      <div className="relative mx-auto max-w-6xl w-full px-6 flex-1 flex flex-col justify-center">
        {/* Top Eyebrow & Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[var(--text-secondary)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="tracking-widest uppercase text-[10px] text-[var(--text-muted)]">
              Base Location
            </span>
            <span className="text-[var(--text-primary)] font-medium">
              Indonesia (WIB / GMT+7)
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono-code text-xs text-[var(--text-muted)]">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Database size={12} className="text-[var(--text-secondary)]" />
              REST APIs &amp; Relational Databases
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={12} className="text-emerald-500" />
              Production Verified
            </span>
          </div>
        </motion.div>

        {/* Main Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)] mb-6">
                <Sparkles size={12} className="text-amber-500" />
                <span className="tracking-wide">Backend &amp; Systems Developer</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.03]">
                <span className="block text-[var(--text-muted)] font-normal text-2xl sm:text-3xl md:text-4xl mb-2">
                  Hello, I&apos;m
                </span>
                {portfolio.name}.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl"
            >
              I architect high-performance <span className="text-[var(--text-primary)] font-semibold">REST APIs</span>, robust database infrastructures, and <span className="text-[var(--text-primary)] font-semibold">AI-driven automation workflows</span>. Experienced in engineering government data systems at BPS Pelalawan with an uncompromising focus on reliability, scalability, and clean code.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-[var(--text-primary)] px-6 py-3 text-xs font-semibold text-[var(--bg-canvas)] transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm"
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
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-5 py-3 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              </a>

              <a
                href="/CVFadliYurisman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-5 py-3 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              >
                <FileText size={14} />
                <span>Resume PDF</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive System Architecture Inspector */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-xl shadow-black/[0.04] dark:shadow-black/60 relative overflow-hidden"
            >
              {/* Window Controls & Title */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] font-mono-code text-[11px] text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  <span className="ml-2 font-medium text-[var(--text-secondary)]">
                    engine.core.ts
                  </span>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  {currentSpec.status}
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center gap-1 pt-3 pb-2 border-b border-[var(--border-subtle)] overflow-x-auto">
                {inspectorTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-code transition-all duration-150 whitespace-nowrap ${
                        isActive
                          ? "bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold border border-[var(--border-subtle)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      <Icon size={12} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Snippet Content */}
              <div className="pt-4 min-h-[160px]">
                <pre className="font-mono-code text-xs text-[var(--text-secondary)] overflow-x-auto leading-relaxed">
                  <code>{currentSpec.code}</code>
                </pre>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[10px] text-[var(--text-muted)]">
                <span>Architecture Verified</span>
                <span className="text-[var(--text-secondary)]">Node • PHP • Python</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Editorial Metric Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono-code"
        >
          <div>
            <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
              BPS Pelalawan
            </p>
            <p className="text-[11px] text-[var(--text-muted)] mt-1 uppercase tracking-wider">
              Government Internship
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