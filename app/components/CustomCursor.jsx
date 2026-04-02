"use client";

import { useEffect, useRef } from "react";

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function CustomCursor({ enabled = true }) {
  const rootRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  const rafRef = useRef(0);
  const visibleRef = useRef(false);
  const hoverRef = useRef(false);

  const targetRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer: coarse)")?.matches;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (isCoarse || reduced) return;

    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!root || !ring || !dot) return;

    const setVisible = (v) => {
      if (visibleRef.current === v) return;
      visibleRef.current = v;
      root.style.opacity = v ? "1" : "0";
    };

    const setHover = (v) => {
      if (hoverRef.current === v) return;
      hoverRef.current = v;
      root.dataset.hover = v ? "1" : "0";
    };

    const onMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      setVisible(true);
    };

    const hoverSelector =
      "a, button, [data-cursor='hover'], [data-card], input, textarea, select";

    const onOver = (e) => {
      if (e.target?.closest?.(hoverSelector)) setHover(true);
    };

    const onOut = (e) => {
      if (!e.relatedTarget?.closest?.(hoverSelector)) setHover(false);
    };

    const onLeaveWindow = () => setVisible(false);

    const tick = () => {
      const { x, y } = targetRef.current;

      // Dot: snappier
      dotPosRef.current.x = lerp(dotPosRef.current.x, x, 0.38);
      dotPosRef.current.y = lerp(dotPosRef.current.y, y, 0.38);

      // Ring: smoother trail
      ringPosRef.current.x = lerp(ringPosRef.current.x, x, 0.18);
      ringPosRef.current.y = lerp(ringPosRef.current.y, y, 0.18);

      dot.style.transform = `translate3d(${dotPosRef.current.x}px, ${dotPosRef.current.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%) scale(${hoverRef.current ? 1.08 : 1})`;

      rafRef.current = requestAnimationFrame(tick);
    };

    // Prime positions to avoid jump
    targetRef.current.x = window.innerWidth / 2;
    targetRef.current.y = window.innerHeight / 2;
    ringPosRef.current.x = targetRef.current.x;
    ringPosRef.current.y = targetRef.current.y;
    dotPosRef.current.x = targetRef.current.x;
    dotPosRef.current.y = targetRef.current.y;

    setVisible(false);
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("blur", onLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("blur", onLeaveWindow);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-0 top-0 z-50 hidden opacity-0 md:block"
      aria-hidden="true"
    >
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
