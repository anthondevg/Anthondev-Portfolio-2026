import { CtaButton } from "@/components/CtaButton";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { HeroSocials } from "@/components/HeroSocials";
import { HeroVisual } from "@/components/HeroVisual";
import { sectionShell } from "./styles";

export function HomeHero() {
  return (
    <section
      className={`relative grid min-h-0 grid-cols-1 items-center gap-8 overflow-visible pt-[150px] pb-8 max-sm:gap-0 max-sm:pt-[112px] lg:min-h-svh lg:grid-cols-[minmax(0,1.04fr)_minmax(390px,.96fr)] lg:pt-[148px] lg:pb-[52px] ${sectionShell}`}
      aria-labelledby="hero-title"
    >
      <HeroBackdrop />
      <div
        className="absolute -z-1 top-[8%] left-[12%] h-[31rem] w-[42rem] rounded-full bg-violet/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-3 min-w-0 max-w-full pb-8 max-sm:pb-0">
        <AvailabilityBadge />

        <p
          className="m-0 mt-7 font-display text-3xl leading-none font-bold tracking-[-.035em] text-[#e8e6eb] sm:text-4xl"
        >
          Anthony Gonzalez
        </p>

        <h1
          id="hero-title"
          className="mt-8 mb-0 w-full max-w-full break-words font-display text-[clamp(2.45rem,10.5vw,4.4rem)] leading-[.88] font-bold tracking-[-.04em] text-balance text-violet-light lg:w-max lg:max-w-[820px] lg:text-7xl lg:tracking-[-.055em]"
        >
          Full-Stack Engineer building AI products
        </h1>

        <p className="mt-8 mb-0 max-w-full break-words text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.7] text-[#c9c3d0] lg:max-w-[550px]">
          I design and build end-to-end digital products, combining modern
          full-stack engineering with practical AI systems.
        </p>

        <div className="mt-8 flex items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:gap-3">
          <CtaButton href="#work" label="View" accent="Work" />
        </div>

        <HeroSocials />
      </div>

      <HeroVisual />

      <div
        className="absolute right-0 bottom-[25px] left-0 flex justify-between text-[.5rem] font-bold tracking-[.12em] text-[#625c69] max-md:hidden"
        aria-hidden="true"
      >
        <span>PORTFOLIO / 2026</span>
        <span>10.4806° N · 66.9036° W</span>
      </div>
    </section>
  );
}

function AvailabilityBadge() {
  return (
    <p className="relative isolate m-0 flex w-max max-w-full items-center gap-3 overflow-hidden rounded-full border border-[#7ee2ab]/25 bg-[#7ee2ab]/[.055] px-4 py-2.5 text-xs font-bold tracking-[.14em] text-[#d8f8e7] shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_10px_35px_rgba(0,0,0,.18)] backdrop-blur-sm max-sm:text-[.58rem] max-sm:tracking-[.1em]">
      <span
        className="pointer-events-none absolute inset-y-0 -left-1/3 -z-1 w-1/3 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(126,226,171,.2),transparent)] animate-[availability-shimmer_4.5s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <span
        className="relative grid h-2.5 w-2.5 shrink-0 place-items-center"
        aria-hidden="true"
      >
        <span className="absolute inset-0 rounded-full bg-[#7ee2ab]/45 animate-[availability-pulse_2.2s_ease-out_infinite]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#7ee2ab] shadow-[0_0_12px_rgba(126,226,171,.95)]" />
      </span>
      Available for remote opportunities
    </p>
  );
}
