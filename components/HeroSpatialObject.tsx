"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

function subscribeToFinePointer(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(pointer: fine)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useFinePointer() {
  return useSyncExternalStore(
    subscribeToFinePointer,
    () => (typeof window !== "undefined" ? window.matchMedia("(pointer: fine)").matches : false),
    () => false
  );
}

export default function HeroSpatialObject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isFinePointer = useFinePointer();

  // Fine-tuned spring physics for buttery smooth, calm response
  const mouseX = useSpring(0, { stiffness: 45, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 45, damping: 25 });

  // 3D rotations with calm, expensive travel range
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-22, 22]);

  // Dynamic parallax translations for individual architectural tiers
  const topTierX = useTransform(mouseX, [-0.5, 0.5], [-24, 24]);
  const topTierY = useTransform(mouseY, [-0.5, 0.5], [-18, 18]);

  const midTierX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const midTierY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const y = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isFinePointer]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[500px] h-[480px] mx-auto flex items-center justify-center perspective-1200 cursor-default select-none"
    >
      {/* Soft Architectural Ambient Halo */}
      <div
        className="pointer-events-none absolute w-[420px] h-[420px] rounded-full blur-[110px] opacity-25 dark:opacity-15 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, rgba(79, 70, 229, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* 3D Root Spatial Canvas */}
      <motion.div
        style={{
          rotateX: isFinePointer ? rotateX : 10,
          rotateY: isFinePointer ? rotateY : -14,
          transformStyle: "preserve-3d",
        }}
        animate={
          !isFinePointer
            ? {
                rotateY: [-14, -6, -14],
                rotateX: [8, 14, 8],
              }
            : undefined
        }
        transition={
          !isFinePointer
            ? {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className="relative w-[340px] h-[360px] preserve-3d flex items-center justify-center transition-transform duration-300"
      >
        {/* ============================================================ */}
        {/* TIER 1: FOUNDATION PLINTH (Base Architectural Slab)          */}
        {/* ============================================================ */}
        <motion.div
          animate={{
            translateZ: isHovered ? -30 : -10,
            translateY: isHovered ? 65 : 55,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[300px] h-[130px] preserve-3d"
        >
          {/* Main Top Face */}
          <div
            className="w-full h-full rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-5 flex flex-col justify-between relative overflow-hidden"
            style={{
              boxShadow: "var(--spatial-shadow)",
            }}
          >
            {/* Architectural Milled Hairline Grid */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="flex items-center justify-between font-mono-code text-[9px] text-[var(--text-muted)] tracking-widest uppercase">
              <span>SYSTEM.PLINTH // 01</span>
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                FOUNDATION
              </span>
            </div>

            <div className="flex items-end justify-between font-mono-code text-[9px] text-[var(--text-muted)] pt-6 border-t border-[var(--border-subtle)]">
              <span>DATA ARCHITECTURE</span>
              <span>ACID / 100%</span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* TIER 2: CENTRAL MONOLITH CORE (Intersecting Vertical Block)  */}
        {/* ============================================================ */}
        <motion.div
          style={{
            x: isFinePointer ? midTierX : 0,
            y: isFinePointer ? midTierY : 0,
          }}
          animate={{
            translateZ: isHovered ? 40 : 20,
            translateY: isHovered ? 0 : 5,
            rotateZ: isHovered ? -1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[250px] h-[140px] preserve-3d"
        >
          <div
            className="w-full h-full rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] p-5 flex flex-col justify-between relative shadow-2xl"
            style={{
              boxShadow: "var(--spatial-shadow)",
            }}
          >
            {/* Precision Inset Channel */}
            <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-[var(--border-strong)]" />
            <div className="absolute top-0 bottom-0 left-9 w-[1px] bg-indigo-500/20" />

            <div className="flex items-center justify-between font-mono-code text-[9px] text-[var(--text-muted)] tracking-widest uppercase pl-4">
              <span>REST.ENGINE // 02</span>
              <span className="text-[var(--text-secondary)] font-semibold">
                EXECUTION CORE
              </span>
            </div>

            <div className="pl-4 space-y-1">
              <div className="h-1 w-16 bg-indigo-500/40 rounded-full" />
              <div className="h-1 w-10 bg-[var(--border-strong)] rounded-full" />
            </div>

            <div className="flex items-center justify-between font-mono-code text-[9px] text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)] pl-4">
              <span>LATENCY TOLERANCE</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                SUB-50ms
              </span>
            </div>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* TIER 3: CANTILEVERED FLOATING SLAB (High Parallax Plate)     */}
        {/* ============================================================ */}
        <motion.div
          style={{
            x: isFinePointer ? topTierX : 0,
            y: isFinePointer ? topTierY : 0,
          }}
          animate={{
            translateZ: isHovered ? 100 : 65,
            translateY: isHovered ? -55 : -35,
            rotateZ: isHovered ? 2 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute w-[210px] h-[110px] preserve-3d"
        >
          <div
            className="w-full h-full rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface)] p-4 flex flex-col justify-between relative shadow-2xl"
            style={{
              boxShadow: "var(--spatial-shadow)",
            }}
          >
            {/* Hairline Corner Markers */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-indigo-500/60" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-indigo-500/60" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-indigo-500/60" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-indigo-500/60" />

            <div className="flex items-center justify-between font-mono-code text-[9px] text-[var(--text-muted)] tracking-widest uppercase">
              <span>EVENT.PIPELINE // 03</span>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            </div>

            <div className="font-mono-code text-[10px] text-[var(--text-secondary)] font-medium">
              <span>INTELLIGENT WORKFLOWS</span>
            </div>

            <div className="flex items-center justify-between font-mono-code text-[9px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
              <span>WEBHOOKS</span>
              <span className="text-[var(--text-primary)] font-semibold">SYNCHRONIZED</span>
            </div>
          </div>
        </motion.div>

        {/* Minimal Datum Inscription Tag */}
        <motion.div
          animate={{
            translateZ: isHovered ? 120 : 80,
            translateX: isHovered ? 95 : 75,
            translateY: isHovered ? -85 : -65,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-20 pointer-events-none font-mono-code text-[9px] tracking-widest uppercase rounded-md border border-[var(--border-strong)] bg-[var(--bg-surface)] px-2 py-0.5 text-[var(--text-muted)] shadow-md"
        >
          <span>SPATIAL CORE</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
