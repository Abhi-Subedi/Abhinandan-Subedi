"use client";

export default function HomeHeader({ navLinks }) {
  return (
    <header
      data-header
      className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/35 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3" data-hero-item>
          <span className="text-md font-semibold tracking-tight text-zinc-50">
            Abhinandan Subedi
          </span>
        </div>

        <nav
          className="hidden items-center gap-8 text-sm text-zinc-300 md:flex"
          data-hero-item
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              className="transition-colors hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-hero-item
          data-cursor="hover"
          className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-500/30 bg-indigo-500/10 px-4 text-sm font-medium text-indigo-200 transition-colors hover:border-indigo-400/40 hover:bg-indigo-500/15"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
