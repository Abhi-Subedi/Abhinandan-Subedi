"use client";

import Image from "next/image";
import ParticleButton from "../ParticleButton";

export default function HeroSection() {
  return (
    <section
      className="bg-transparent md:flex md:h-[90vh] md:items-stretch"
      data-section
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:h-full md:grid-cols-2 md:items-stretch md:py-16">
        <div className="md:flex md:flex-col md:justify-center" data-reveal>
          <p className="text-sm font-medium text-zinc-300" data-hero-item>
            Hi, I’m Abhinandan
          </p>
          <h1
            className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl"
            data-hero-item
            data-hero-title
          >
            <span className="block overflow-hidden">
              <span className="block" data-hero-line>
                I am a<span className="text-indigo-400"> Web Developer </span>
              </span>
            </span>
            <span className="mt-1 block overflow-hidden">
              <span className="block" data-hero-line>
                with Creativity.
              </span>
            </span>
          </h1>
          <p
            className="mt-5 max-w-xl text-base leading-7 text-zinc-300"
            data-hero-item
          >
            I am a web devloper capable of building fast, responsive, and
            accessible websites with modern tools and best practices. I care
            about clean code, intuitive UI, and performance.
          </p>
          <ParticleButton
            href="#contact"
            data-hero-item
            data-cursor="hover"
            className="group mt-7 h-11 w-fit overflow-hidden rounded-md px-5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute -inset-10 bg-linear-to-r from-indigo-400/40 via-fuchsia-400/25 to-pink-400/40 blur-2xl" />
            </span>
            Get in Touch
          </ParticleButton>
        </div>

        <div
          data-card
          className="photo-3d tilt-3d-alt gradient-border group relative h-100 w-full overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/30 ring-1 ring-white/5 md:h-full"
          data-reveal
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-transparent to-pink-500/10" />
          <Image
            src="/header.jpeg"
            alt="Abhinandan Subedi working"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </section>
  );
}
