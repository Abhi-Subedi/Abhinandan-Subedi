"use client";

import { useMemo, useRef, useState } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

const COLORS = [
  "rgba(99, 102, 241, 0.95)",
  "rgba(217, 70, 239, 0.9)",
  "rgba(236, 72, 153, 0.9)",
  "rgba(45, 212, 191, 0.75)",
];

export default function ParticleButton({
  href,
  onClick,
  className = "",
  children,
  type = "button",
  disabled,
  ...rest
}) {
  const [bursts, setBursts] = useState([]);
  const seqRef = useRef(0);

  const Comp = href ? "a" : "button";

  const canBurst = useMemo(() => {
    if (typeof window === "undefined") return false;
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    return !media?.matches;
  }, []);

  const emit = (target, evt) => {
    if (!canBurst || !target) return;

    const rect = target.getBoundingClientRect();
    const x = "clientX" in evt ? evt.clientX - rect.left : rect.width / 2;
    const y = "clientY" in evt ? evt.clientY - rect.top : rect.height / 2;

    const id = ++seqRef.current;
    const particles = Array.from({ length: 12 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 12 + rand(-0.2, 0.2);
      const dist = rand(14, 34);
      return {
        id: `${id}-${i}`,
        x,
        y,
        dx: `${Math.cos(angle) * dist}px`,
        dy: `${Math.sin(angle) * dist}px`,
        s: `${rand(2.5, 5).toFixed(1)}px`,
        c: COLORS[Math.floor(rand(0, COLORS.length))],
      };
    });

    setBursts((prev) => [...prev, { id, particles }]);
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 650);
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    const target = e.currentTarget;
    emit(target, e);

    if (href && typeof href === "string" && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    onClick?.(e);
  };

  return (
    <Comp
      href={href}
      type={href ? undefined : type}
      onClick={handleClick}
      aria-disabled={disabled || undefined}
      className={
        "btn-spicy particle-btn relative inline-flex items-center justify-center " +
        className
      }
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <span className="btn-sheen" aria-hidden="true" />

      {bursts.map((b) => (
        <span
          key={b.id}
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {b.particles.map((p) => (
            <span
              key={p.id}
              className="btn-particle"
              style={{
                left: p.x,
                top: p.y,
                width: p.s,
                height: p.s,
                background: p.c,
                "--dx": p.dx,
                "--dy": p.dy,
              }}
            />
          ))}
        </span>
      ))}
    </Comp>
  );
}
