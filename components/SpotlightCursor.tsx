"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Only enable on fine pointer (mouse) devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (spotlight.style.opacity !== "1") {
        spotlight.style.opacity = "1";
      }
    };

    const render = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (spotlight) {
        spotlight.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden hidden sm:block"
    >
      <div
        ref={spotlightRef}
        className="w-[500px] h-[500px] rounded-full opacity-0 pointer-events-none will-change-transform blur-[90px] transition-opacity duration-500"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, rgba(79, 70, 229, 0.02) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(79, 70, 229, 0.05) 0%, rgba(0, 0, 0, 0.015) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
