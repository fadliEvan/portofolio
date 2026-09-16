"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Terminal,
  Bot,
  Database,
  BarChart3,
  ExternalLink,
  Code2,
  CheckCircle,
} from "lucide-react";
import { featuredProjects, clientProjects } from "@/data/projects";

const projectIcons = {
  "01": Terminal,
  "02": Bot,
  "03": Database,
  "04": BarChart3,
};

const projectCodeSnippets: Record<string, string> = {
  "01": `// REST API Controller - BPS Pelalawan Internal Service
router.get("/v1/analytics/records", authGuard, async (req, res) => {
  const result = await db.query(
    "SELECT id, metrics, timestamp FROM logs ORDER BY id DESC LIMIT 50"
  );
  return res.status(200).json({ status: "success", data: result.rows });
});`,
  "02": `// WhatsApp Automation Webhook Dispatcher
async function handleIncomingMessage(event) {
  const { from, text } = event.payload;
  const response = await aiService.complete({
    prompt: text,
    systemPrompt: "Assist user with operational queries & workflow routing"
  });
  await whatsappClient.sendText(from, response.text);
}`,
  "03": `// Financial Bookkeeping Ledger Entry
function recordLedgerTransaction($pdo, $debitAcc, $creditAcc, $amount) {
  $pdo->beginTransaction();
  $stmt = $pdo->prepare("INSERT INTO transactions VALUES (?, ?, ?, NOW())");
  $stmt->execute([$debitAcc, $creditAcc, $amount]);
  $pdo->commit();
}`,
  "04": `# Unsupervised K-Means Pipeline & Clustering
kmeans = KMeans(n_clusters=4, init='k-means++', random_state=42)
cluster_labels = kmeans.fit_predict(scaled_features)
score = silhouette_score(scaled_features, cluster_labels)
print(f"Optimal Silhouette Score: {score:.4f}")`,
};

export default function Projects() {
  const [activeCodeTab, setActiveCodeTab] = useState<Record<string, boolean>>({});

  const toggleCodeView = (id: string) => {
    setActiveCodeTab((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const heroProject = featuredProjects[0];
  const bentoProjects = featuredProjects.slice(1);

  return (
    <section id="projects" className="relative py-28 sm:py-32 scroll-mt-24 border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-[0.25em]">
            {"// 03. Selected Works"}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
        </div>

        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
              Spatial Project Showcase
            </h2>
            <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] font-normal leading-relaxed">
              Architectural backends, verified production REST APIs, automation pipelines, and machine learning models crafted with precision.
            </p>
          </div>

          <div className="font-mono-code text-xs text-[var(--text-muted)] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500 inline-block" />
            <span>4 Key Engineering Systems</span>
          </div>
        </div>

        {/* 1. DOMINANT LEAD FEATURED PROJECT (SPATIAL HERO CARD) */}
        {heroProject && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            data-cursor="view"
            className="group relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 md:p-12 shadow-sm transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Editorial Specs & Content */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono-code text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-md">
                    PRIMARY ARCHITECTURE • 01
                  </span>
                  <span className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                    {heroProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {heroProject.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                  {heroProject.description}
                </p>

                {heroProject.details && (
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed">
                    {heroProject.details}
                  </p>
                )}

                {heroProject.metrics && (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-3.5 py-1.5 text-xs text-[var(--text-secondary)] font-mono-code">
                    <CheckCircle size={13} className="text-emerald-500" />
                    <span>{heroProject.metrics}</span>
                  </div>
                )}

                {/* Stack Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {heroProject.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-3 py-1 font-mono-code text-xs text-[var(--text-secondary)] group-hover:border-[var(--border-strong)] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Spatial Code Spec Window */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-5 shadow-inner transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)] font-mono-code text-[11px] text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="text-[var(--text-secondary)] font-medium">
                        api-controller.internal.ts
                      </span>
                    </div>
                    <span>Node.js / Express</span>
                  </div>

                  <pre className="font-mono-code text-xs text-[var(--text-secondary)] overflow-x-auto leading-relaxed p-1">
                    <code>{projectCodeSnippets["01"]}</code>
                  </pre>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-code text-[10px] text-[var(--text-muted)]">
                    <span>Relational MySQL Engine</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      ● Production Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. SECONDARY ASYMMETRICAL SPATIAL GRID (Projects 02, 03, 04) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoProjects.map((project, idx) => {
            const Icon = projectIcons[project.id as keyof typeof projectIcons] || Terminal;
            const isCodeOpen = activeCodeTab[project.id];
            const snippet = projectCodeSnippets[project.id];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                data-cursor="view"
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-7 shadow-sm transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono-code text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                        <Icon size={14} />
                      </span>
                      <span className="font-semibold text-[var(--text-secondary)]">
                        /{project.id}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleCodeView(project.id)}
                      className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors px-2 py-1 rounded bg-[var(--bg-surface-subtle)]"
                      title="Inspect code"
                    >
                      <Code2 size={12} />
                      <span>{isCodeOpen ? "Overview" : "Inspect Code"}</span>
                    </button>
                  </div>

                  <p className="mt-5 text-[11px] font-mono-code uppercase tracking-wider text-[var(--text-muted)]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {isCodeOpen ? (
                    <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-canvas)] p-3">
                      <pre className="font-mono-code text-[11px] text-[var(--text-secondary)] overflow-x-auto leading-relaxed">
                        <code>{snippet}</code>
                      </pre>
                    </div>
                  ) : (
                    <>
                      <p className="mt-3 text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                        {project.description}
                      </p>

                      {project.details && (
                        <p className="mt-3 text-xs text-[var(--text-muted)] font-normal leading-relaxed">
                          {project.details}
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-4">
                  {project.metrics && (
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--text-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[var(--text-secondary)]">{project.metrics}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2 py-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* 3. ADDITIONAL CLIENT DEPLOYMENTS & LIVE WEB CATALOG */}
        <div className="mt-24 pt-12 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono-code text-xs uppercase tracking-widest text-[var(--text-muted)]">
                {"// Live Catalog"}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                Additional Deployments &amp; Web Applications
              </h3>
            </div>
            <span className="font-mono-code text-xs text-[var(--text-muted)]">
              Interactive Web Works
            </span>
          </div>

          <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
            {clientProjects.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-3 -mx-3 rounded-xl transition-all duration-200 hover:bg-[var(--bg-surface-subtle)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <span className="text-base font-semibold text-[var(--text-primary)] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                    {item.name}
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-mono-code">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-6 mt-2 sm:mt-0">
                  <span className="text-xs font-mono-code text-[var(--text-secondary)]">
                    {item.stack}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] px-2.5 py-1 text-[11px] font-mono-code text-[var(--text-secondary)] group-hover:border-[var(--border-strong)] transition-colors">
                    <ExternalLink size={11} />
                    {item.year}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}