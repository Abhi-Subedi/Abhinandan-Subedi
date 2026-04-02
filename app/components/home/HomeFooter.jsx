"use client";

export default function HomeFooter() {
  return (
    <footer className="bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm font-semibold text-zinc-50" data-reveal>
            Abhinandan Subedi
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-300"
            data-reveal
          >
            {[
              { label: "Home", href: "#home" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "About me", href: "#about" },
              { label: "Contact", href: "#contact" },
              { label: "Testimonials", href: "#testimonials" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-zinc-300" data-reveal>
            <a
              href="#"
              className="transition-colors hover:text-zinc-50"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.3l.7-3H13V9c0-.6.4-1 1-1Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-colors hover:text-zinc-50"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M20 7.2c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.9A3.3 3.3 0 0 0 11.7 8c0 .3 0 .5.1.7A9.4 9.4 0 0 1 5 5.5a3.3 3.3 0 0 0 1 4.4c-.5 0-1-.2-1.4-.4 0 1.6 1.1 3 2.6 3.3-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.4 1.7 2.4 3.2 2.4A6.6 6.6 0 0 1 4 16.6 9.3 9.3 0 0 0 9 18c6 0 9.3-5 9.3-9.3v-.4c.6-.4 1.2-1 1.7-1.6Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-colors hover:text-zinc-50"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M17.3 6.8h.01"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-colors hover:text-zinc-50"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M6.5 9.5H4V20h2.5V9.5ZM5.2 8.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM20 20h-2.5v-5.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11.2V9.5h2.4v1.4c.3-.7 1.3-1.7 3.1-1.7 2 0 3.3 1.3 3.3 4.1V20Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-zinc-800" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-zinc-300 md:flex-row">
          <p>Made with ♥ by Abhinandan Subedi</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-50">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-50">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-50">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
