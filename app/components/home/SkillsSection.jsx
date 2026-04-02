"use client";

import { useMemo, useState } from "react";

export default function SkillsSection({ skills, reducedMotion = false }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const prefersReduced = useMemo(() => {
    if (reducedMotion) return true;
    if (typeof window === "undefined") return true;
    if (!window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, [reducedMotion]);

  const toggle = (i) => {
    setActiveIdx((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div data-reveal>
          <p className="text-sm font-medium text-zinc-300">My Skills</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50">
            My Expertise
          </h2>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-stagger-group
        >
          {skills.map((skill, i) => {
            const open = activeIdx === i;
            return (
              <button
                key={skill.title}
                type="button"
                data-card
                onClick={() => toggle(i)}
                className={
                  "group tilt-3d cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 text-left shadow-sm transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900/45 " +
                  (!prefersReduced && open ? "ring-1 ring-indigo-500/20" : "")
                }
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20 transition-colors group-hover:bg-indigo-500/15">
                  {skill.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-50">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {skill.description}
                </p>

                <div
                  className={
                    "mt-4 overflow-hidden transition-[max-height,opacity] duration-700 " +
                    (prefersReduced
                      ? ""
                      : "ease-[cubic-bezier(0.16,1,0.3,1)] ") +
                    (open ? "max-h-72 opacity-100" : "max-h-0 opacity-60")
                  }
                  aria-hidden={!open}
                >
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {(skill.subitems || []).map((s, idx) => (
                      <li
                        key={s}
                        className={
                          "flex items-center gap-2 transition-[transform,opacity] duration-500 " +
                          (open
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0")
                        }
                        style={
                          prefersReduced
                            ? undefined
                            : { transitionDelay: `${open ? idx * 70 : 0}ms` }
                        }
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 h-1 w-10 rounded-full bg-indigo-500/20" />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
