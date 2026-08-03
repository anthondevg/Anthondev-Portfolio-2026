"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work", number: "01" },
  { href: "/#stack", label: "Capabilities", number: "02" },
  { href: "/#experience", label: "Experience", number: "03" },
  { href: "/#about", label: "About", number: "04" },
  { href: "/#contact", label: "Contact", number: "05" },
];

const socials = [
  { href: "https://github.com/anthondevg", label: "GitHub" },
  { href: "https://www.linkedin.com/in/anthondev/", label: "LinkedIn" },
  {
    href: "https://www.upwork.com/freelancers/~0176de8d20e4948f58",
    label: "Upwork",
  },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("resize", close);
    window.addEventListener("keydown", closeWithEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;

    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", closeWithEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        open
          ? "bg-ink"
          : "bg-[linear-gradient(to_bottom,rgba(8,7,13,.93),transparent)]"
      }`}
    >
      <nav
        className="mx-auto flex h-[92px] w-[min(100%-48px,1250px)] items-center justify-between max-md:w-[min(100%-32px,1240px)] max-sm:h-[78px]"
        aria-label="Primary navigation"
      >
        <Link
          className="relative z-30 text-[.86rem] font-extrabold tracking-[-.04em]"
          href="/"
          onClick={() => setOpen(false)}
        >
          ANTHON<span className="text-violet-light">DEV</span>
        </Link>
        <button
          className="relative z-30 hidden min-h-11 min-w-11 border-0 bg-transparent text-paper max-md:flex max-md:items-center max-md:justify-end max-md:gap-3 max-md:text-[.67rem] max-md:font-bold max-md:uppercase max-md:tracking-[.1em]"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i aria-hidden="true" className={`flex h-[13px] w-[22px] flex-col justify-between ${open ? "[&>b:first-child]:translate-y-[6px] [&>b:first-child]:rotate-45 [&>b:last-child]:-translate-y-[6px] [&>b:last-child]:-rotate-45" : ""}`}>
            <b className="h-px w-full bg-current transition-transform" />
            <b className="h-px w-full bg-current transition-transform" />
          </i>
        </button>
        <div className="hidden items-center gap-10 text-[.72rem] font-bold uppercase tracking-[.08em] md:flex [&>a]:relative [&>a]:text-[#d9d3e1] [&>a]:after:absolute [&>a]:after:-bottom-1.5 [&>a]:after:right-0 [&>a]:after:left-0 [&>a]:after:h-px [&>a]:after:origin-right [&>a]:after:scale-x-0 [&>a]:after:bg-violet-light [&>a]:after:transition-transform [&>a:hover]:after:origin-left [&>a:hover]:after:scale-x-100">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/anthondev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div
          id="primary-menu"
          className={`fixed inset-0 z-20 overflow-x-hidden overflow-y-auto bg-[#08070d] transition-[opacity,visibility,transform] duration-500 ease-out md:hidden ${
            open
              ? "visible translate-y-0 opacity-100 pointer-events-auto"
              : "invisible -translate-y-3 opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0, transparent calc(25% - 1px), rgba(168,140,255,.08) 25%, transparent calc(25% + 1px), transparent calc(75% - 1px), rgba(168,140,255,.08) 75%, transparent calc(75% + 1px)), radial-gradient(circle at 88% 16%, rgba(112,71,255,.3), transparent 34%), radial-gradient(circle at 8% 88%, rgba(73,26,143,.22), transparent 32%)",
            }}
          />
          <div
            className="pointer-events-none absolute top-[18%] -right-32 h-80 w-80 rounded-full border border-violet-light/15"
            aria-hidden="true"
          >
            <span className="absolute inset-[17%] rounded-full border border-dashed border-violet-light/20" />
            <span className="absolute inset-[36%] rounded-full border border-violet-light/25 bg-violet/10" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-svh w-[min(100%-32px,720px)] flex-col pt-[104px] pb-7">
            <div className="mb-5 flex items-center justify-between border-b border-paper/15 pb-4 text-[.58rem] font-bold uppercase tracking-[.16em] text-[#817989]">
              <span>Portfolio index / 2026</span>
              <span className="flex items-center gap-2 text-[#a8a1b4]">
                <i className="h-1.5 w-1.5 rounded-full bg-[#7ee2ab] shadow-[0_0_10px_rgba(126,226,171,.9)]" />
                Available
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              {links.map((link, index) => (
                <Link
                  className={`group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-paper/12 py-[clamp(.72rem,2.3vh,1.15rem)] transition-[opacity,transform,color] duration-500 hover:text-violet-light focus-visible:text-violet-light ${
                    open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${100 + index * 55}ms` : "0ms" }}
                >
                  <span className="font-mono text-[.58rem] font-bold text-violet-light/75">
                    {link.number}
                  </span>
                  <span className="font-display text-[clamp(2.55rem,12vw,4.6rem)] leading-[.82] font-normal tracking-[-.055em]">
                    {link.label}
                  </span>
                  <span
                    className="translate-x-2 text-xl text-violet-light opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-[1fr_auto] items-end gap-5 border-t border-paper/15 pt-5">
              <div>
                <p className="m-0 mb-2 text-[.53rem] font-bold uppercase tracking-[.16em] text-[#6f6876]">
                  Full-Stack &amp; AI Engineer
                </p>
                <a
                  className="text-sm font-bold text-[#d7d1dd]"
                  href="mailto:anthondevx@gmail.com"
                >
                  anthondevx@gmail.com
                </a>
              </div>
              <div className="flex gap-4 text-[.6rem] font-bold uppercase tracking-[.1em] text-[#a8a1b4]">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    key={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="pointer-events-none mt-6 flex items-end justify-between text-[.5rem] font-bold uppercase tracking-[.15em] text-[#514a58]"
              aria-hidden="true"
            >
              <span>10.4806° N · 66.9036° W</span>
              <span className="font-display text-2xl tracking-[-.08em] text-paper/12">
                A/DEV
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
