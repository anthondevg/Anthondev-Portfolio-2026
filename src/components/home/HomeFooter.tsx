import Link from "next/link";
import { sectionShell } from "./styles";

export function HomeFooter() {
  return (
    <footer
      className={`${sectionShell} flex min-h-[128px] items-center justify-between gap-8 text-xs font-bold uppercase tracking-[.06em] text-[#9b94a3] max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:py-10`}
    >
      <Link
        className="text-base font-extrabold tracking-[-.04em] text-paper"
        href="#main"
        aria-label="Back to top"
      >
        ANTHON<span className="text-violet-light">DEV</span>
      </Link>

      <p className="m-0 max-w-[480px] leading-5">
        Full-Stack &amp; AI Engineer · San Fernando de Apure, VE · Remote worldwide
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-3 text-paper/75">
        <a
          className="hover:text-paper"
          href="https://github.com/anthondevg"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a
          className="hover:text-paper"
          href="https://www.linkedin.com/in/anthondev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a
          className="hover:text-paper"
          href="https://www.upwork.com/freelancers/~0176de8d20e4948f58"
          target="_blank"
          rel="noreferrer"
        >
          Upwork <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
