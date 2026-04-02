"use client";

import ParticlesField from "./ParticlesField";

export default function AnimatedBackground({ reducedMotion = false }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-950 to-zinc-900" />

      <div
        className={
          "mouse-bed absolute inset-0 " + (reducedMotion ? "" : "mouse-bed-on")
        }
      />

      <div
        className={
          "absolute -left-24 top-20 h-72 w-72 rounded-full bg-linear-to-tr from-indigo-500/25 via-fuchsia-500/10 to-pink-500/25 blur-3xl " +
          (reducedMotion ? "" : "orb-float-a")
        }
      />
      <div
        className={
          "absolute -right-20 top-48 h-80 w-80 rounded-full bg-linear-to-tr from-teal-400/10 via-indigo-500/15 to-pink-500/15 blur-3xl " +
          (reducedMotion ? "" : "orb-float-b")
        }
      />
      <div
        className={
          "absolute -bottom-30 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-linear-to-tr from-indigo-500/15 via-transparent to-pink-500/15 blur-3xl " +
          (reducedMotion ? "" : "orb-float-c")
        }
      />

      <ParticlesField reducedMotion={reducedMotion} />
    </div>
  );
}
