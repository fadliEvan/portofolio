"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const [cursorText, setCursorText] = useState("");
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only run on desktop pointer devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const spotlight = spotlightRef.current;
    const badge = badgeRef.current;
    if (!spotlight || !badge) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let spotX = mouseX;
    let spotY = mouseY;
    let badgeX = mouseX;
    let badgeY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (spotlight.style.opacity !== "1") {
        spotlight.style.opacity = "1";
      }
      if (badge.style.opacity !== "1") {
        badge.style.opacity = "1";
      }

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (target) {
        const viewEl = target.closest('[data-cursor="view"]');
        const openEl = target.closest('[data-cursor="open"]');
        const linkEl = target.closest("a, button, [role='button']");

        if (viewEl) {
          setCursorText("VIEW");
          setIsPointer(false);
        } else if (openEl) {
          setCursorText("OPEN");
          setIsPointer(false);
        } else if (linkEl) {
          setCursorText("");
          setIsPointer(true);
        } else {
          setCursorText("");
          setIsPointer(false);
        }
      }
    };

    const onMouseLeave = () => {
      if (spotlight) spotlight.style.opacity = "0";
      if (badge) badge.style.opacity = "0";
      setCursorText("");
      setIsPointer(false);
    };

    const render = () => {
      // Lerp spotlight
      spotX += (mouseX - spotX) * 0.15;
      spotY += (mouseY - spotY) * 0.15;
      spotlight.style.transform = `translate3d(${spotX - 250}px, ${spotY - 250}px, 0)`;

      // Lerp badge
      badgeX += (mouseX - badgeX) * 0.22;
      badgeY += (mouseY - badgeY) * 0.22;
      badge.style.transform = `translate3d(${badgeX}px, ${badgeY}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden sm:block"
    >
      {/* Subtle Ambient Spotlight */}
      <div
        ref={spotlightRef}
        className="w-[500px] h-[500px] rounded-full opacity-0 pointer-events-none will-change-transform blur-[95px] transition-opacity duration-500"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(79, 70, 229, 0.02) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(0, 0, 0, 0.015) 45%, transparent 70%)",
        }}
      />

      {/* Contextual Floating Spatial Badge / Precision Ring */}
      <div
        ref={badgeRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none opacity-0 will-change-transform transition-all duration-200"
      >
        {cursorText ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] shadow-xl font-mono-code text-[9px] font-bold tracking-widest uppercase transition-transform scale-100">
            {cursorText}
          </div>
        ) : isPointer ? (
          <div className="h-8 w-8 rounded-full border border-indigo-500/50 bg-indigo-500/10 transition-transform scale-110" />
        ) : null}
      </div>
    </div>
  );
}
