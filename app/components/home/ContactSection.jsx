"use client";

import { useState } from "react";
import ParticleButton from "../ParticleButton";

export default function ContactSection() {
  const email = "your@email.com";
  const phone = "+977 98XXXXXXXX";
  const socials = [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ];

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    window.setTimeout(() => setSubmitting(false), 1300);
  };

  return (
    <section id="contact" className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div
            className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-white/5"
            data-reveal
          >
            <p className="text-sm font-medium text-zinc-300">Get In Touch</p>
            <h2 className="heading-gradient mt-2 text-3xl font-semibold tracking-tight">
              Contact me
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Tell me about your project — I’ll reply soon.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="text-zinc-400">Email</span>
                <span className="font-medium text-zinc-100">{email}</span>
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="text-zinc-400">Phone</span>
                <span className="font-medium text-zinc-100">{phone}</span>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-200">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 text-sm text-zinc-200 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            className="rounded-2xl bg-zinc-900/40 p-6 shadow-sm ring-1 ring-zinc-800"
            data-reveal
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  First name
                </span>
              </label>
              <label className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Last name
                </span>
              </label>
              <label className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Email
                </span>
              </label>
              <label className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Phone number
                </span>
              </label>
            </div>

            <label className="relative mt-5 block">
              <select
                defaultValue=""
                className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-3 text-sm text-zinc-50 outline-none transition-colors focus:border-indigo-500/60"
              >
                <option value="">Select one...</option>
                <option>Website</option>
                <option>Web App</option>
                <option>Landing Page</option>
              </select>
              <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400">
                Choose a topic
              </span>
            </label>

            <label className="relative mt-5 block">
              <textarea
                rows={5}
                placeholder=" "
                className="peer w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pb-3 pt-8 text-sm text-zinc-50 outline-none transition-colors focus:border-indigo-500/60"
              />
              <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                Message
              </span>
            </label>

            <label className="mt-5 flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-600 bg-zinc-950"
              />
              I accept the terms
            </label>

            <ParticleButton
              type="submit"
              data-cursor="hover"
              disabled={submitting}
              className="mt-6 h-11 w-full gap-2 rounded-md px-5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </ParticleButton>
          </form>
        </div>
      </div>
    </section>
  );
}
