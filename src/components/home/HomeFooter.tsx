import Link from "next/link";
import { sectionShell } from "./styles";

export function HomeFooter() {
  return (
    <footer
      className={`${sectionShell} grid min-h-[104px] grid-cols-[1fr_auto_auto] items-center gap-x-12 border-t border-paper/10 py-6 text-[.62rem] font-bold uppercase tracking-[.08em] text-[#8f8898] max-lg:grid-cols-[1fr_auto] max-lg:gap-y-5 max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:py-8`}
    >
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <Link
          className="text-sm font-extrabold tracking-[-.04em] text-paper transition-colors hover:text-violet-light"
          href="#main"
          aria-label="Anthony Gonzalez, back to top"
        >
          ANTHON<span className="text-violet-light">DEV</span>
        </Link>
        <span>© 2026 Anthony Gonzalez</span>
      </div>

      <p className="m-0 flex items-center gap-2 whitespace-nowrap max-lg:row-start-2 max-sm:whitespace-normal">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ee2ab] shadow-[0_0_10px_rgba(126,226,171,.8)]"
          aria-hidden="true"
        />
        Available remotely · Venezuela · Worldwide
      </p>

      <nav
        className="flex flex-wrap justify-end gap-x-5 gap-y-3 text-paper/70 max-lg:col-start-2 max-lg:row-span-2 max-lg:row-start-1 max-sm:justify-start"
        aria-label="Footer navigation"
      >
        <a
          className="transition-colors hover:text-paper"
          href="https://github.com/anthondevg"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="transition-colors hover:text-paper"
          href="https://www.linkedin.com/in/anthondev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          className="transition-colors hover:text-paper"
          href="https://www.upwork.com/freelancers/~0176de8d20e4948f58"
          target="_blank"
          rel="noreferrer"
        >
          Upwork <span aria-hidden="true">↗</span>
        </a>
        <Link
          className="text-violet-light transition-colors hover:text-paper"
          href="#main"
        >
          Back to top <span aria-hidden="true">↑</span>
        </Link>
      </nav>
    </footer>
  );
}
