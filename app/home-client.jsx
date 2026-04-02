"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import HomeHeader from "./components/home/HomeHeader";
import HeroSection from "./components/home/HeroSection";
import SkillsSection from "./components/home/SkillsSection";
import AboutSection from "./components/home/AboutSection";
import PortfolioSection from "./components/home/PortfolioSection";
import ServicesSection from "./components/home/ServicesSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ContactSection from "./components/home/ContactSection";
import HomeFooter from "./components/home/HomeFooter";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return reduced;
}

export default function HomeClient() {
  const reducedMotion = usePrefersReducedMotion();

  const rootRef = useRef(null);
  const tiltActiveRef = useRef(null);
  const tiltRafRef = useRef(0);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "About me", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const skills = useMemo(
    () => [
      {
        title: "Frontend Development",
        description:
          "Responsive interfaces with React/Next.js, Tailwind, and accessible UI patterns.",
        subitems: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "Responsive UI",
          "Accessibility",
        ],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M12 21s7-3.5 7-10V6l-7-3-7 3v5c0 6.5 7 10 7 10Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 11.5 11 13l3.5-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        title: "Backend & APIs",
        description:
          "REST integrations, auth flows, data fetching, and clean API-driven architecture.",
        subitems: [
          "REST APIs",
          "Auth",
          "Data fetching",
          "Integrations",
          "Deployment",
        ],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M7 8a5 5 0 0 1 10 0v2a3 3 0 0 0 3 3v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M9 8a3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "UI Engineering",
        description:
          "Design systems, component libraries, and polished interactions that feel fast.",
        subitems: [
          "Design systems",
          "Component libraries",
          "Micro-interactions",
          "Animations",
          "Consistency",
        ],
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
        title: "Performance & SEO",
        description:
          "Core Web Vitals, image optimization, and best practices for production-ready apps.",
        subitems: [
          "Core Web Vitals",
          "Image optimization",
          "SEO basics",
          "Caching",
          "Best practices",
        ],
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M9 18 3 12l6-6M15 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
    [],
  );

  const portfolio = useMemo(
    () => [
      {
        title: "Portfolio Website",
        description:
          "A fast, modern personal site built with Next.js and Tailwind.",
        image: "/portfolio/project-1.svg",
        category: "Web",
        href: "#",
      },
      {
        title: "Admin Dashboard",
        description:
          "Analytics dashboard UI with charts, tables, and reusable components.",
        image: "/portfolio/project-2.svg",
        category: "UI",
        href: "#",
      },
      {
        title: "Booking Platform",
        description:
          "A clean landing + listing experience with search-ready structure.",
        image: "/portfolio/project-3.svg",
        category: "App",
        href: "#",
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
        name: "Dianne Russell",
        role: "Starbucks",
        avatar: "/avatars/avatar-1.svg",
      },
      {
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
        name: "Kristin Watson",
        role: "Louis Vuitton",
        avatar: "/avatars/avatar-2.svg",
      },
      {
        quote:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
        name: "Kathryn Murphy",
        role: "McDonald's",
        avatar: "/avatars/avatar-3.svg",
      },
    ],
    [],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealEls = Array.from(root.querySelectorAll("[data-reveal]"));
    const staggerGroups = Array.from(
      root.querySelectorAll("[data-stagger-group]"),
    );

    const markInView = (el) => {
      el.classList.add("is-inview");
      if (el.hasAttribute("data-stagger-group")) {
        const children = Array.from(el.children);
        children.forEach((child, idx) => {
          child.style.setProperty("--d", `${idx * 80}ms`);
        });
      }
    };

    if (reducedMotion) {
      [...revealEls, ...staggerGroups].forEach(markInView);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      [...revealEls, ...staggerGroups].forEach(markInView);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          markInView(entry.target);
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    [...revealEls, ...staggerGroups].forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) return;

    const clearCard = (card) => {
      if (!card) return;
      card.removeAttribute("data-tilt");
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
      card.style.removeProperty("--ty");
      card.style.removeProperty("--tz");
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
      card.style.removeProperty("--px");
      card.style.removeProperty("--py");
    };

    const onMove = (e) => {
      // Global direction for background layers ("3D bed")
      const gx = e.clientX / Math.max(1, window.innerWidth);
      const gy = e.clientY / Math.max(1, window.innerHeight);
      const gpx = gx - 0.5;
      const gpy = gy - 0.5;
      root.style.setProperty("--gx", gx.toFixed(4));
      root.style.setProperty("--gy", gy.toFixed(4));
      root.style.setProperty("--gpx", gpx.toFixed(4));
      root.style.setProperty("--gpy", gpy.toFixed(4));

      const next = e.target?.closest?.("[data-card]");
      if (!next) {
        clearCard(tiltActiveRef.current);
        tiltActiveRef.current = null;
        return;
      }

      if (tiltActiveRef.current && tiltActiveRef.current !== next) {
        clearCard(tiltActiveRef.current);
      }
      tiltActiveRef.current = next;

      if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
      tiltRafRef.current = requestAnimationFrame(() => {
        const card = tiltActiveRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = (e.clientY - rect.top) / rect.height;

        const mx = nx * 100;
        const my = ny * 100;
        const px = nx - 0.5;
        const py = ny - 0.5;

        const rotateY = px * 22;
        const rotateX = -py * 14;

        card.setAttribute("data-tilt", "js");
        card.style.setProperty("--mx", `${mx.toFixed(2)}%`);
        card.style.setProperty("--my", `${my.toFixed(2)}%`);
        card.style.setProperty("--px", `${px.toFixed(4)}`);
        card.style.setProperty("--py", `${py.toFixed(4)}`);
        card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
        card.style.setProperty("--ty", "-6px");
        if (card.classList.contains("tilt-3d-alt")) {
          card.style.setProperty("--tz", "16px");
        }
      });
    };

    const onLeaveRoot = () => {
      if (tiltRafRef.current) cancelAnimationFrame(tiltRafRef.current);
      tiltRafRef.current = 0;
      clearCard(tiltActiveRef.current);
      tiltActiveRef.current = null;
      root.style.setProperty("--gx", "0.5");
      root.style.setProperty("--gy", "0.5");
      root.style.setProperty("--gpx", "0");
      root.style.setProperty("--gpy", "0");
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeaveRoot);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeaveRoot);
      onLeaveRoot();
    };
  }, [reducedMotion]);

  return (
    <div ref={rootRef} id="home" className="flex flex-col flex-1">
      <CustomCursor enabled={!reducedMotion} />
      <div className="relative flex flex-col flex-1 page-enter">
        <AnimatedBackground reducedMotion={reducedMotion} />

        <div className="relative z-10 flex flex-col flex-1">
          <HomeHeader navLinks={navLinks} />

          <main className="flex-1">
            <HeroSection />
            <SkillsSection skills={skills} reducedMotion={reducedMotion} />
            <AboutSection />
            <PortfolioSection portfolio={portfolio} />
            <ServicesSection />
            <TestimonialsSection testimonials={testimonials} />
            <ContactSection />
          </main>

          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
