import Link from "next/link";
import { sectionShell } from "./styles";

export function HomeFooter() {
  return (
    <footer
      className={`${sectionShell} flex min-h-[110px] items-center justify-between gap-8 text-[.55rem] font-bold uppercase tracking-[.08em] text-[#726b79] max-sm:flex-col max-sm:items-start max-sm:py-10`}
    >
      <Link
        className="text-[.86rem] font-extrabold tracking-[-.04em]"
        href="#main"
        aria-label="Back to top"
      >
        ANTHON<span className="text-violet-light">DEV</span>
      </Link>

      <p>AI Engineer · Caracas, VE · Remote worldwide</p>

      <div className="flex gap-6">
        <a
          className="hover:text-paper"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="hover:text-paper"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
