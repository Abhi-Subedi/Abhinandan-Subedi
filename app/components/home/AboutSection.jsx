"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function AboutSection() {
  const [animateBars, setAnimateBars] = useState(false);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return true;
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    return !!media?.matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const id = requestAnimationFrame(() => setAnimateBars(true));
    return () => cancelAnimationFrame(id);
  }, [prefersReduced]);

  const skills = [
    { label: "React / Next.js", level: 92 },
    { label: "UI / UX", level: 88 },
    { label: "CSS Animations", level: 85 },
    { label: "Performance", level: 84 },
  ];

  return (
    <section id="about" className="bg-transparent" data-section>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="relative" data-reveal>
          <div className="absolute -left-6 top-10 h-64 w-64 rounded-[64px] bg-indigo-500/20 md:h-72 md:w-72" />
          <div
            data-card
            className="photo-3d tilt-3d-alt gradient-border relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 ring-1 ring-white/5"
          >
            <Image
              src="/about.jpeg"
              alt="About Abhinandan"
              width={900}
              height={750}
              className="h-auto w-full opacity-95"
            />
          </div>
        </div>

        <div data-reveal>
          <p className="text-sm font-medium text-zinc-300">About</p>
          <h2 className="heading-gradient mt-2 text-3xl font-semibold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            I’m Abhinandan Subedi — a web developer who enjoys building clean,
            fast, and maintainable web apps. I focus on crafting UI that looks
            great, loads quickly, and works well across devices.
          </p>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            I care about component-driven development, accessibility, and
            performance. If you need a modern Next.js site or product UI, let’s
            work together.
          </p>

          <div className="mt-8 space-y-4" data-skillbars>
            {skills.map((s) => (
              <div
                key={s.label}
                data-card
                className="skillbar-row tilt-3d-alt space-y-2 rounded-xl border border-zinc-800/60 bg-zinc-950/25 p-3 ring-1 ring-white/5"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-200">{s.label}</span>
                  <span className="text-zinc-400">{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-800/80 ring-1 ring-white/5">
                  <div
                    data-skillbar-fill
                    data-level={s.level}
                    className={
                      "skillbar-fill h-2 rounded-full bg-linear-to-r from-indigo-400/70 via-fuchsia-400/50 to-pink-400/70" +
                      (animateBars ? " is-anim" : "")
                    }
                    style={{ "--p": s.level / 100 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
