"use client";

function ServiceCard({ title, description, icon, accentClass, index }) {
  return (
    <div
      data-card
      data-cursor="hover"
      className="group tilt-3d-alt cursor-pointer rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-white/5 transition-colors duration-300 hover:border-zinc-700 hover:bg-zinc-900/45"
    >
      <div className="flex items-center justify-between">
        <div
          className={
            "flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition duration-500 group-hover:rotate-6 group-hover:scale-110 " +
            accentClass
          }
        >
          {icon}
        </div>
        <span className="text-xs font-medium text-zinc-400">0{index + 1}</span>
      </div>

      <h3 className="mt-5 text-base font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{description}</p>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
        Learn more
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M7 17 17 7M10 7h7v7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Landing Pages",
      description:
        "High-converting, lightning-fast landing pages with premium motion and clean UX.",
      accentClass:
        "bg-indigo-500/10 text-indigo-300 ring-indigo-500/20 group-hover:bg-indigo-500/15",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 9h8M8 12h5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Web Apps",
      description:
        "Modern Next.js apps with smooth navigation, scalable components, and best practices.",
      accentClass:
        "bg-teal-500/10 text-teal-200 ring-teal-500/20 group-hover:bg-teal-500/15",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M8 7h8M9.5 11h5M11 15h2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9A2.5 2.5 0 0 1 6.5 5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "UI Engineering",
      description:
        "Reusable design systems, component libraries, and micro-interactions that feel premium.",
      accentClass:
        "bg-pink-500/10 text-pink-200 ring-pink-500/20 group-hover:bg-pink-500/15",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M7 7h10M7 12h10M7 17h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11A2.5 2.5 0 0 1 16.5 20h-9A2.5 2.5 0 0 1 5 17.5v-11Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Optimization",
      description:
        "Performance, SEO, and polish—so your site loads fast and feels high quality.",
      accentClass:
        "bg-amber-500/10 text-amber-200 ring-amber-500/20 group-hover:bg-amber-500/15",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.2 6.2 9 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3 12h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.2 17.8 9 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 21v-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.8 17.8 15 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M21 12h-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.8 6.2 15 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div data-reveal>
          <p className="text-sm font-medium text-zinc-300">Services</p>
          <h2 className="heading-gradient mt-2 text-3xl font-semibold tracking-tight">
            What I do
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            Clean UI, smooth motion, and production-ready code—built to convert.
          </p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-stagger-group
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
