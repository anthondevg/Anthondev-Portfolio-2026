import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { HeroSocials } from "@/components/HeroSocials";
import { HeroVisual } from "@/components/HeroVisual";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { getAllWork } from "@/lib/work";

const sectionShell = "mx-auto w-[min(100%-48px,1240px)] max-md:w-[min(100%-32px,1240px)]";
const eyebrow = "m-0 text-[.68rem] font-bold uppercase tracking-[.14em] text-[#c0b8cb]";
const heading = "mb-[clamp(3.5rem,7vw,6.5rem)] grid grid-cols-[.72fr_1.28fr] gap-8 max-md:grid-cols-1 max-md:gap-7";
const headingTitle = "-mt-1 mb-5 font-display text-[clamp(3rem,6.2vw,6.2rem)] leading-[.94] font-normal tracking-[-.055em] max-sm:text-[clamp(3.1rem,15vw,5rem)]";
const headingCopy = "m-0 max-w-[580px] text-[.92rem] leading-7 text-muted";

const principles = [
  { number: "01", title: "Useful intelligence", copy: "AI should reduce friction, sharpen decisions, and make the product feel more capable—not more complicated." },
  { number: "02", title: "Product-minded engineering", copy: "I connect technical choices to user needs, business context, and the small details that build trust." },
  { number: "03", title: "Craft in every layer", copy: "From system architecture to motion and copy, quality lives in the relationship between the parts." },
];

const capabilities = [
  { label: "Intelligent products", items: ["LLM applications", "AI agents", "RAG systems", "Evaluation"] },
  { label: "Product engineering", items: ["TypeScript", "React / Next.js", "Node.js", "APIs"] },
  { label: "Systems & delivery", items: ["Python", "PostgreSQL", "Cloud platforms", "Observability"] },
];

const projectArt = [
  "bg-[#24124b] bg-[linear-gradient(140deg,transparent,rgba(55,24,123,.6))]",
  "bg-[#25121f] bg-[radial-gradient(circle_at_20%_20%,#874063,transparent_35%),linear-gradient(145deg,#21101d,#321323)]",
  "bg-[#11101a] bg-[linear-gradient(125deg,rgba(90,72,130,.55),transparent)]",
];

export default function Home() {
  const projects = getAllWork();

  return (
    <>
      <a className="fixed top-4 left-4 z-[100] -translate-y-[200%] bg-paper px-4 py-3 text-ink transition-transform focus:translate-y-0" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <section className={`relative grid min-h-svh grid-cols-[minmax(0,1.04fr)_minmax(390px,.96fr)] items-center gap-8 overflow-visible pt-[148px] pb-[52px] max-md:min-h-0 max-md:grid-cols-1 max-md:pt-[150px] max-sm:pt-[125px] max-sm:pb-8 ${sectionShell}`} aria-labelledby="hero-title">
          <HeroBackdrop />
          <div className="absolute -z-1 top-[8%] left-[12%] h-[31rem] w-[42rem] rounded-full bg-violet/10 blur-[150px]" aria-hidden="true" />
          <div className="relative z-3 pb-8">
            <p className={`${eyebrow} relative isolate flex w-max max-w-full items-center gap-3 overflow-hidden rounded-full border border-[#7ee2ab]/25 bg-[#7ee2ab]/[.055] px-4 py-2.5 text-[#d8f8e7] shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_10px_35px_rgba(0,0,0,.18)] backdrop-blur-sm max-sm:text-[.58rem] max-sm:tracking-[.1em]`}>
              <span
                className="pointer-events-none absolute inset-y-0 -left-1/3 -z-1 w-1/3 skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(126,226,171,.2),transparent)] [animation:availability-shimmer_4.5s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              <span className="relative grid h-2.5 w-2.5 shrink-0 place-items-center" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-[#7ee2ab]/45 [animation:availability-pulse_2.2s_ease-out_infinite]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7ee2ab] shadow-[0_0_12px_rgba(126,226,171,.95)]" />
              </span>
              Available for remote opportunities
            </p>
            <h1 id="hero-title" className="m-0 mt-7 text-4xl font-display leading-none font-bold tracking-[-.035em] text-[#e8e6eb]">Anthony Gonzalez</h1>
            <p className="mt-4 mb-0 w-max max-w-[780px] font-display text-[88px] leading-[.88] font-bold tracking-[-.055em] text-violet-light max-md:text-[clamp(3.8rem,11vw,5.5rem)] max-sm:w-full max-sm:text-[clamp(2.9rem,14vw,4.2rem)]">
              AI Full Stack Engineer
            </p>
            <p className="mt-8 mb-0 max-w-[550px] text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.7] text-[#c9c3d0] max-sm:max-w-[90%]">I design and build intelligent products where thoughtful engineering meets creative direction.</p>
            <div className="mt-8 flex items-center gap-8 max-sm:flex-col max-sm:items-stretch max-sm:gap-3">
              <CtaButton href="#work" label="View" accent="Work" />
              <Link
                className="group relative inline-block overflow-hidden p-px text-[#f4efff] shadow-[0_12px_30px_rgba(0,0,0,.18)] transition-transform duration-300 hover:-translate-y-0.5 max-sm:w-full"
                href="#contact"
                style={{ background: "linear-gradient(135deg, rgba(196,174,255,.9), rgba(112,71,255,.4), rgba(255,132,183,.48))" }}
              >
                <span className="relative flex min-h-[2.85rem] items-center justify-between gap-5 overflow-hidden bg-[#0c0c0d] px-4 py-2 font-cta text-[.94rem] leading-none tracking-[-.02em] max-sm:w-full">
                  <span className="absolute inset-x-0 bottom-0 h-full translate-y-full bg-[#4e2aa1] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 h-full translate-y-full bg-[#9a4267] transition-transform delay-75 duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" aria-hidden="true" />
                  <span className="relative z-10">Start a conversation</span>
                  <span className="relative z-10 text-[1.2em] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
                </span>
              </Link>
            </div>
            <HeroSocials />
          </div>
          <HeroVisual />
          <div className="absolute right-0 bottom-[25px] left-0 flex justify-between text-[.5rem] font-bold tracking-[.12em] text-[#625c69] max-md:hidden" aria-hidden="true"><span>PORTFOLIO / 2026</span><span>10.4806° N · 66.9036° W</span></div>
        </section>

        <section className="overflow-hidden border-y border-paper/15 bg-[#0c0a11] py-4" aria-label="Areas of focus"><div className="flex w-max items-center gap-9 text-[.68rem] font-bold tracking-[.18em] [animation:marquee_28s_linear_infinite]"><span>AI SYSTEMS</span><i className="h-1.5 w-1.5 rounded-full bg-violet-light" /><span>PRODUCT ENGINEERING</span><i className="h-1.5 w-1.5 rounded-full bg-violet-light" /><span>CREATIVE TECHNOLOGY</span><i className="h-1.5 w-1.5 rounded-full bg-violet-light" /><span>AI SYSTEMS</span><i className="h-1.5 w-1.5 rounded-full bg-violet-light" /><span>PRODUCT ENGINEERING</span></div></section>

        <section id="work" className={`${sectionShell} py-[clamp(7rem,12vw,11rem)]`}>
          <Reveal className={heading}><p className={eyebrow}>Selected work</p><div className="max-w-[690px]"><h2 className={headingTitle}>Building ideas into useful systems.</h2><p className={headingCopy}>A curated set of product stories. Real project information can replace the clearly marked draft content below.</p></div></Reveal>
          <div className="grid gap-px border-y border-paper/15 bg-paper/15">
            {projects.map((project, index) => (<Reveal key={project.slug}><Link className="group grid min-h-[430px] grid-cols-[minmax(330px,.9fr)_minmax(0,1.1fr)] bg-ink transition hover:bg-[#0d0b13] max-md:grid-cols-[.86fr_1.14fr] max-sm:grid-cols-1" href={`/work/${project.slug}`} aria-label={`Read case study: ${project.title}`}>
              <div className={`relative isolate min-h-[430px] overflow-hidden p-6 before:absolute before:-z-2 before:top-[16%] before:left-[17%] before:w-[66%] before:aspect-square before:rounded-full before:border before:border-white/15 before:bg-[linear-gradient(145deg,rgba(255,255,255,.24),transparent_55%)] before:transition-transform before:duration-500 after:absolute after:-z-1 after:top-[36%] after:left-[37%] after:w-[27%] after:aspect-square after:rounded-full after:bg-ink/60 after:backdrop-blur after:transition-transform after:duration-500 group-hover:before:rotate-8 group-hover:before:scale-105 group-hover:after:scale-90 max-sm:min-h-[320px] ${projectArt[index] ?? projectArt[0]}`}><span className="font-display text-lg italic">0{index + 1}</span><div className="absolute top-[12%] left-[12%] w-[76%] aspect-square rounded-full border border-dashed border-white/15 [animation:orbit_36s_linear_infinite]" aria-hidden="true" /><p className="absolute bottom-6 left-6 m-0 text-[.51rem] font-bold tracking-[.14em] text-white/60">CASE / {project.year}</p></div>
              <div className="relative flex flex-col justify-center p-[clamp(2rem,5vw,4.2rem)] max-sm:min-h-[380px] max-sm:px-5 max-sm:pt-8 max-sm:pb-20"><div className="flex items-center gap-3 text-[.59rem] font-bold uppercase tracking-[.11em] text-[#928a9d]"><span>{project.role}</span><span className="w-max border border-violet-light/40 px-2 py-1 text-[.48rem] font-bold uppercase tracking-[.11em] text-[#baa5f7]">{project.status}</span></div><h3 className="mt-8 mb-4 max-w-[620px] font-display text-[clamp(2.5rem,5vw,5.4rem)] leading-[.92] font-normal tracking-[-.05em] max-sm:text-[clamp(3rem,14vw,4.7rem)]">{project.title}</h3><p className="m-0 max-w-[540px] text-[.86rem] leading-7 text-muted">{project.summary}</p><ul className="mt-8 mb-0 flex list-none flex-wrap gap-2 p-0" aria-label="Technologies">{project.stack.map((item) => <li className="border border-paper/15 px-2.5 py-1.5 text-[.53rem] font-bold uppercase tracking-[.08em] text-[#97909f]" key={item}>{item}</li>)}</ul><span className="absolute right-8 bottom-8 grid h-11 w-11 place-items-center rounded-full border border-paper/15 transition group-hover:rotate-45 max-sm:right-5 max-sm:bottom-5" aria-hidden="true">↗</span></div>
            </Link></Reveal>))}
          </div>
        </section>

        <section id="about" className={`${sectionShell} border-t border-paper/15 py-[clamp(7rem,12vw,11rem)]`}><Reveal className="grid grid-cols-[.72fr_1.28fr] gap-8 max-md:grid-cols-1"><p className={eyebrow}>Profile / approach</p><p className="-mt-2 m-0 max-w-[890px] font-display text-[clamp(3.1rem,6.8vw,7.2rem)] leading-[.98] font-normal tracking-[-.055em] max-sm:text-[clamp(3.2rem,15vw,5rem)]">I care about the point where <em className="font-normal text-violet-light">ambitious technology</em> becomes clear, human, and genuinely valuable.</p></Reveal><div className="mt-[clamp(5rem,10vw,9rem)] ml-[calc(36%+1rem)] grid grid-cols-3 border-t border-paper/15 max-md:ml-0 max-sm:grid-cols-1">{principles.map((principle, index) => <Reveal className={`min-h-[275px] border-r border-paper/15 pt-6 pr-6 pb-6 last:border-r-0 max-sm:min-h-[250px] max-sm:border-r-0 max-sm:border-b max-sm:py-6 ${index ? "pl-6 max-sm:pl-0" : ""}`} key={principle.number}><span className="font-display text-sm italic text-[#6f6878]">{principle.number}</span><h3 className="mt-12 mb-3 font-display text-[1.8rem] font-normal">{principle.title}</h3><p className="m-0 text-[.77rem] leading-6 text-muted">{principle.copy}</p></Reveal>)}</div></section>

        <section id="experience" className={`${sectionShell} border-t border-paper/15 py-[clamp(7rem,12vw,11rem)]`}><Reveal className={heading}><p className={eyebrow}>Experience</p><div className="max-w-[690px]"><h2 className={headingTitle}>Selected chapters.</h2><p className={headingCopy}>Employment history is ready to be populated with verified roles and outcomes.</p></div></Reveal><Reveal><div className="grid min-h-[170px] grid-cols-[.7fr_1.5fr_.6fr] items-center gap-8 border-y border-paper/15 py-8 max-sm:grid-cols-1 max-sm:gap-5"><span className="text-[.54rem] font-bold tracking-[.13em] text-[#766e7e]">YOUR EXPERIENCE</span><div><h3 className="mt-0 mb-2 font-display text-4xl font-normal">Add your latest role</h3><p className="m-0 max-w-[490px] text-[.78rem] leading-6 text-muted">Company, dates, responsibilities, and measurable impact will live here.</p></div><span className="justify-self-end text-[.54rem] font-bold tracking-[.13em] text-[#766e7e] max-sm:justify-self-start">DETAILS PENDING</span></div></Reveal></section>

        <section id="stack" className={`${sectionShell} py-[clamp(7rem,12vw,11rem)] bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:80px_80px]`}><Reveal className={heading}><p className={eyebrow}>Capabilities</p><div className="max-w-[690px]"><h2 className={headingTitle}>From model to interface.</h2><p className={headingCopy}>A product-focused toolkit for taking intelligent systems from prototype to production.</p></div></Reveal><div className="grid grid-cols-3 border-y border-paper/15 max-sm:grid-cols-1">{capabilities.map((group, index) => <Reveal className="min-h-[360px] border-r border-paper/15 p-8 first:pl-0 last:border-r-0 max-sm:min-h-[250px] max-sm:border-r-0 max-sm:border-b max-sm:px-0 max-sm:py-6" key={group.label}><span className="font-display text-sm italic text-[#6f6878]">0{index + 1}</span><h3 className="mt-[4.5rem] mb-3 max-w-[250px] font-display text-[2.2rem] leading-[1.05] font-normal max-sm:mt-8">{group.label}</h3><ul className="mt-8 mb-0 list-none p-0">{group.items.map((item) => <li className="py-2 text-[.76rem] text-muted" key={item}>{item}</li>)}</ul></Reveal>)}</div></section>

        <section id="contact" className="border-t border-paper/15 bg-[radial-gradient(circle_at_80%_20%,rgba(112,71,255,.28),transparent_33%),linear-gradient(145deg,#180c21,#0b0912_60%)]"><div className={`${sectionShell} pt-[clamp(7rem,12vw,11rem)] pb-[clamp(5rem,8vw,8rem)]`}><Reveal><p className={eyebrow}>Have an interesting problem?</p><h2 className="mt-8 mb-0 max-w-[1070px] font-display text-[clamp(4rem,9.5vw,10rem)] leading-[.82] font-normal tracking-[-.07em] max-sm:text-[clamp(4rem,18vw,6.8rem)]">Let&apos;s build something <em className="block font-normal text-violet-light">worth remembering.</em></h2></Reveal><Reveal className="mt-[clamp(4.5rem,9vw,8rem)] border-t border-paper/15">{[["Email", "robwert1997@gmail.com", "mailto:robwert1997@gmail.com"], ["LinkedIn", "linkedin.com/in/anthondev", "https://www.linkedin.com/in/anthondev/"]].map(([label, value, href]) => <a className="group grid grid-cols-[.55fr_1.4fr_auto] items-center gap-8 border-b border-paper/15 py-6 max-sm:grid-cols-[1fr_auto] max-sm:gap-2" href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}><span className="text-[.57rem] font-bold uppercase tracking-[.11em] text-[#80778b] max-sm:col-span-full">{label}</span><strong className="font-display text-[clamp(1.5rem,3vw,2.7rem)] font-normal">{value}</strong><i className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 not-italic transition group-hover:bg-paper group-hover:text-ink">↗</i></a>)}<div className="grid grid-cols-[.55fr_1.4fr_auto] items-center gap-8 border-b border-paper/15 py-6 text-[#7c7483] max-sm:grid-cols-[1fr_auto] max-sm:gap-2"><span className="text-[.57rem] font-bold uppercase tracking-[.11em] text-[#80778b] max-sm:col-span-full">Résumé</span><strong className="font-display text-[clamp(1.5rem,3vw,2.7rem)] font-normal">Add PDF to enable</strong><i className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 not-italic">—</i></div></Reveal></div></section>
      </main>
      <footer className={`${sectionShell} flex min-h-[110px] items-center justify-between gap-8 text-[.55rem] font-bold uppercase tracking-[.08em] text-[#726b79] max-sm:flex-col max-sm:items-start max-sm:py-10`}><Link className="text-[.86rem] font-extrabold tracking-[-.04em]" href="#main" aria-label="Back to top">ANTHON<span className="text-violet-light">DEV</span></Link><p>AI Engineer · Caracas, VE · Remote worldwide</p><div className="flex gap-6"><a className="hover:text-paper" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a className="hover:text-paper" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></footer>
    </>
  );
}
