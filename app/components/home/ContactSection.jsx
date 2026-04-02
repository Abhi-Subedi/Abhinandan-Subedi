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
  const [status, setStatus] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const setField = (key) => (e) => {
    const value = e?.target?.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = () => {
    const next = {};
    const firstName = values.firstName.trim();
    if (!firstName) next.firstName = "Please enter your first name.";

    const emailValue = values.email.trim();
    const emailOk = /^\S+@\S+\.[^\s]+$/.test(emailValue);
    if (!emailValue) next.email = "Please enter your email.";
    else if (!emailOk) next.email = "Please enter a valid email.";

    const messageValue = values.message.trim();
    if (!messageValue) next.message = "Please write a message.";

    if (!values.consent) next.consent = "Please accept to proceed.";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    setStatus("");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);

    const fullName = [values.firstName.trim(), values.lastName.trim()]
      .filter(Boolean)
      .join(" ");
    const subjectTopic = values.topic ? values.topic : "Portfolio inquiry";
    const subject = encodeURIComponent(`[${subjectTopic}] Message from ${fullName}`);

    const bodyLines = [
      `Name: ${fullName}`,
      `Email: ${values.email.trim()}`,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
      values.topic ? `Topic: ${values.topic}` : null,
      "",
      values.message.trim(),
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));

    try {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus("Opening your email app with a drafted message…");
    } catch {
      setStatus("Could not open your email app. Please email me directly.");
    }

    window.setTimeout(() => {
      setSubmitting(false);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        consent: false,
      });
    }, 600);
  };

  return (
    <section id="contact" className="bg-transparent" data-section>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div
            className="tilt-3d-alt gradient-border rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 ring-1 ring-white/5"
            data-reveal
            data-card
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
            className="tilt-3d-alt gradient-border rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm ring-1 ring-white/5"
            data-reveal
            data-card
            onSubmit={onSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={setField("firstName")}
                  placeholder=" "
                  autoComplete="given-name"
                  aria-invalid={errors.firstName ? "true" : undefined}
                  aria-describedby={errors.firstName ? "contact-firstName-error" : undefined}
                  className={
                    "peer h-12 w-full rounded-xl border bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60 " +
                    (errors.firstName ? "border-rose-500/60" : "border-zinc-700")
                  }
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  First name
                </span>
                {errors.firstName ? (
                  <span
                    id="contact-firstName-error"
                    className="mt-1 block text-xs text-rose-200"
                  >
                    {errors.firstName}
                  </span>
                ) : null}
              </label>
              <label className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={setField("lastName")}
                  placeholder=" "
                  autoComplete="family-name"
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Last name
                </span>
              </label>
              <label className="relative">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={setField("email")}
                  placeholder=" "
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={
                    "peer h-12 w-full rounded-xl border bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60 " +
                    (errors.email ? "border-rose-500/60" : "border-zinc-700")
                  }
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Email
                </span>
                {errors.email ? (
                  <span
                    id="contact-email-error"
                    className="mt-1 block text-xs text-rose-200"
                  >
                    {errors.email}
                  </span>
                ) : null}
              </label>
              <label className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={setField("phone")}
                  placeholder=" "
                  autoComplete="tel"
                  inputMode="tel"
                  className="peer h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-5 text-sm text-zinc-50 outline-none ring-0 transition-colors focus:border-indigo-500/60"
                />
                <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                  Phone number
                </span>
              </label>
            </div>

            <label className="relative mt-5 block">
              <select
                name="topic"
                value={values.topic}
                onChange={setField("topic")}
                className="h-12 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 pt-3 text-sm text-zinc-50 outline-none transition-colors focus:border-indigo-500/60"
              >
                <option value="">Select one...</option>
                <option value="Website">Website</option>
                <option value="Web App">Web App</option>
                <option value="Landing Page">Landing Page</option>
              </select>
              <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400">
                Choose a topic
              </span>
            </label>

            <label className="relative mt-5 block">
              <textarea
                rows={5}
                name="message"
                value={values.message}
                onChange={setField("message")}
                placeholder=" "
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={
                  "peer w-full resize-none rounded-xl border bg-zinc-950/60 px-4 pb-3 pt-8 text-sm text-zinc-50 outline-none transition-colors focus:border-indigo-500/60 " +
                  (errors.message ? "border-rose-500/60" : "border-zinc-700")
                }
              />
              <span className="pointer-events-none absolute left-4 top-3 text-xs text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-3 peer-focus:text-xs peer-focus:text-indigo-200">
                Message
              </span>
              {errors.message ? (
                <span
                  id="contact-message-error"
                  className="mt-1 block text-xs text-rose-200"
                >
                  {errors.message}
                </span>
              ) : null}
            </label>

            <label className="mt-5 flex items-center gap-2 text-sm text-zinc-300">
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={setField("consent")}
                className="h-4 w-4 rounded border-zinc-600 bg-zinc-950"
              />
              I accept the terms
            </label>
            {errors.consent ? (
              <p className="mt-2 text-xs text-rose-200">{errors.consent}</p>
            ) : null}

            {status ? (
              <p className="mt-4 text-sm text-zinc-300" aria-live="polite">
                {status}
              </p>
            ) : null}

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
                "Send message"
              )}
            </ParticleButton>
          </form>
        </div>
      </div>
    </section>
  );
}
