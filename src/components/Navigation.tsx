"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[linear-gradient(to_bottom,rgba(8,7,13,.93),transparent)]">
      <nav className="mx-auto flex h-[92px] w-[min(100%-48px,1250px)] items-center justify-between max-md:w-[min(100%-32px,1240px)] max-sm:h-[78px]" aria-label="Primary navigation">
        <Link className="text-[.86rem] font-extrabold tracking-[-.04em]" href="/" onClick={() => setOpen(false)}>
          ANTHON<span className="text-violet-light">DEV</span>
        </Link>
        <button
          className="hidden border-0 bg-transparent text-paper max-md:flex max-md:items-center max-md:gap-3 max-md:text-[.67rem] max-md:font-bold max-md:uppercase max-md:tracking-[.1em]"
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
        <div id="primary-menu" className={`flex items-center gap-10 text-[.72rem] font-bold uppercase tracking-[.08em] max-md:invisible max-md:fixed max-md:inset-0 max-md:z-2 max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-6 max-md:bg-ink/[.98] max-md:px-5 max-md:pt-32 max-md:pb-12 max-md:opacity-0 max-md:pointer-events-none max-md:transition-opacity [&>a]:relative [&>a]:text-[#d9d3e1] [&>a]:after:absolute [&>a]:after:-bottom-1.5 [&>a]:after:right-0 [&>a]:after:left-0 [&>a]:after:h-px [&>a]:after:origin-right [&>a]:after:scale-x-0 [&>a]:after:bg-violet-light [&>a]:after:transition-transform [&>a:hover]:after:origin-left [&>a:hover]:after:scale-x-100 max-md:[&>a]:font-display max-md:[&>a]:text-[clamp(3.5rem,14vw,6rem)] max-md:[&>a]:font-normal max-md:[&>a]:normal-case max-md:[&>a]:leading-[.95] max-md:[&>a]:tracking-[-.05em] ${open ? "max-md:visible max-md:opacity-100 max-md:pointer-events-auto" : ""}`}>
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
      </nav>
    </header>
  );
}
