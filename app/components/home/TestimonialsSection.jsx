"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function TestimonialsSection({ testimonials }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;

  const safeIndex = useMemo(() => {
    if (count === 0) return 0;
    return ((index % count) + count) % count;
  }, [index, count]);

  useEffect(() => {
    if (count <= 1) return;
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), 3800);
    return () => clearInterval(id);
  }, [count, paused]);

  return (
    <section id="testimonials" className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div data-reveal>
          <p className="text-sm font-medium text-zinc-300">Clients Feedback</p>
          <h2 className="heading-gradient mt-2 text-3xl font-semibold tracking-tight">
            Customer testimonials
          </h2>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 ring-1 ring-white/5"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <div
              className="flex will-change-transform transition-transform duration-700 ease-out"
              style={{ transform: `translateX(${-100 * safeIndex}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 p-6 md:p-10">
                  <figure
                    data-card
                    data-cursor="hover"
                    className="tilt-3d-alt cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex gap-1 text-teal-300">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="currentColor"
                          >
                            <path d="M12 17.3 6.8 20l1-5.8L3 9.6l5.9-.9L12 3.5l3.1 5.2 5.9.9-4.8 4.6 1 5.8Z" />
                          </svg>
                        ))}
                      </div>

                      <div className="text-xs text-zinc-400">
                        {safeIndex + 1} / {count}
                      </div>
                    </div>

                    <blockquote className="mt-6 text-base leading-7 text-zinc-200 md:text-lg">
                      {t.quote}
                    </blockquote>

                    <figcaption className="mt-8 flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt="Avatar"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full border border-zinc-800"
                      />
                      <div>
                        <div className="text-sm font-semibold text-zinc-50">
                          {t.name}
                        </div>
                        <div className="text-xs text-zinc-300">{t.role}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  data-cursor="hover"
                  onClick={() => setIndex(i)}
                  className={
                    "h-2 w-2 rounded-full transition-transform duration-300 " +
                    (i === safeIndex
                      ? "bg-teal-300 scale-110"
                      : "bg-zinc-600 hover:scale-110")
                  }
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
