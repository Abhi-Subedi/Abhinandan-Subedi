"use client";

import { useMemo } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default function ParticlesField({ reducedMotion = false, count = 28 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.round(rand(2, 5));
      return {
        id: index,
        left: `${rand(0, 100).toFixed(2)}%`,
        top: `${rand(0, 100).toFixed(2)}%`,
        size,
        dx: `${rand(-70, 70).toFixed(1)}px`,
        dy: `${rand(-70, 70).toFixed(1)}px`,
        o1: rand(0.08, 0.26).toFixed(2),
        o2: rand(0.08, 0.3).toFixed(2),
        s1: rand(0.85, 1.2).toFixed(2),
        s2: rand(0.85, 1.35).toFixed(2),
        dur: `${rand(9, 18).toFixed(2)}s`,
        delay: `${rand(0, 2.2).toFixed(2)}s`,
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          data-particle
          className={
            "absolute rounded-full bg-zinc-50/20 will-change-transform " +
            (reducedMotion ? "" : "particle-float")
          }
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--dx": p.dx,
            "--dy": p.dy,
            "--o1": p.o1,
            "--o2": p.o2,
            "--s1": p.s1,
            "--s2": p.s2,
            "--dur": p.dur,
            "--delay": p.delay,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
