"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function PortfolioSection({ portfolio }) {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set((portfolio || []).map((p) => p.category).filter(Boolean)),
    );
    return ["All", ...unique];
  }, [portfolio]);

  const filtered = useMemo(() => {
    if (filter === "All") return portfolio;
    return (portfolio || []).filter((p) => p.category === filter);
  }, [portfolio, filter]);

  return (
    <section id="portfolio" className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          data-reveal
        >
          <div>
            <p className="text-sm font-medium text-zinc-300">Recent Projects</p>
            <h2 className="heading-gradient mt-2 text-3xl font-semibold tracking-tight">
              Projects
            </h2>
          </div>

          <a
            href="#"
            data-cursor="hover"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-pink-600 px-4 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-pink-700"
          >
            <span>Visit my GitHub</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M7 17 17 7M10 7h7v7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" data-reveal>
          {categories.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                type="button"
                data-cursor="hover"
                onClick={() => setFilter(c)}
                className={
                  "rounded-full border px-4 py-2 text-sm transition-transform duration-300 hover:-translate-y-0.5 " +
                  (active
                    ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-200"
                    : "border-zinc-800 bg-zinc-950/30 text-zinc-200 hover:border-zinc-700")
                }
              >
                {c}
              </button>
            );
          })}
        </div>

        <div
          key={filter}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          data-stagger-group
        >
          {filtered.map((item) => (
            <article
              key={item.title}
              data-card
              data-project-card
              data-cursor="hover"
              className="group tilt-3d-alt cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 shadow-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/45"
            >
              <div className="relative h-48 w-full bg-zinc-900">
                <Image
                  src={item.image}
                  alt={`${item.title} preview`}
                  fill
                  className="object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-indigo-500/0 via-transparent to-pink-500/0 transition-colors duration-300 group-hover:from-indigo-500/10 group-hover:to-pink-500/10" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-zinc-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.description}
                </p>
                <a
                  href={item.href || "#"}
                  data-cursor="hover"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-50"
                >
                  View project
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M7 17 17 7M10 7h7v7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
