"use client";

import Link from "next/link";
import { useState, type PointerEvent } from "react";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { Reveal } from "@/components/Reveal";
import type { WorkItem } from "@/lib/work";
import {
  eyebrow,
  headingCopy,
  sectionHeading,
  sectionShell,
} from "./styles";

const principles = [
  {
    number: "01",
    title: "Useful intelligence",
    copy: "AI should reduce friction, sharpen decisions, and make the product feel more capable—not more complicated.",
  },
  {
    number: "02",
    title: "Product-minded engineering",
    copy: "I connect technical choices to user needs, business context, and the small details that build trust.",
  },
  {
    number: "03",
    title: "Craft in every layer",
    copy: "From system architecture to motion and copy, quality lives in the relationship between the parts.",
  },
];

const capabilities = [
  {
    label: "Intelligent products",
    items: ["LLM applications", "AI agents", "RAG systems", "Evaluation"],
  },
  {
    label: "Product engineering",
    items: ["TypeScript", "React / Next.js", "Node.js", "APIs"],
  },
  {
    label: "Systems & delivery",
    items: ["Python", "PostgreSQL", "Cloud platforms", "Observability"],
  },
];

const experience = [
  {
    company: "Mission.dev",
    location: "Montreal · Remote",
    period: "Nov 2024 — Jun 2026",
    role: "AI & Full Stack Senior Engineer",
    client: "Sears",
    outcomes: ["+15% AI accuracy", "−20% API tokens", "+30% page speed"],
    summary:
      "Advanced Sears’ Next.js product experience—from scalable state systems and App Router migration to AI quality, efficiency, and interaction analytics.",
  },
  {
    company: "Roraima Devs",
    location: "Remote",
    period: "Feb 2024 — Aug 2024",
    role: "Full Stack Senior Engineer",
    outcomes: ["Real-time bidding", "PKCS12 security", "Team mentorship"],
    summary:
      "Built the real-time foundation for a dynamic auction platform, pairing microservices and secure integrations with enterprise-grade certificate authentication.",
  },
  {
    company: "Akaven",
    location: "Remote",
    period: "Sep 2023 — Feb 2024",
    role: "Full Stack Senior Engineer",
    outcomes: ["Conversational AI", "Microservices", "Secure APIs"],
    summary:
      "Delivered conversational AI interfaces and the scalable services behind them, with deliberate frontend architecture and secure API foundations.",
  },
  {
    company: "Altimetrik",
    location: "Remote",
    period: "Sep 2021 — Oct 2022",
    role: "Senior Full Stack Developer",
    outcomes: ["Low-latency UI", "Design systems", "Scrum leadership"],
    summary:
      "Shipped low-latency financial interfaces and reusable enterprise design-system components while strengthening team delivery and onboarding.",
  },
];

const contactLinks = [
  {
    label: "Email",
    title: "Start a conversation",
    detail:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "anthondevx@gmail.com",
    href: `mailto:${
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "anthondevx@gmail.com"
    }`,
  },
  {
    label: "LinkedIn",
    title: "Connect on LinkedIn",
    detail: "linkedin.com/in/anthondev",
    href: "https://www.linkedin.com/in/anthondev/",
  },
  {
    label: "Upwork",
    title: "Work with me on Upwork",
    detail: "Freelance profile",
    href: "https://www.upwork.com/freelancers/~0176de8d20e4948f58",
  },
];

type WorkSectionProps = {
  projects: WorkItem[];
};

type SectionHeadingProps = {
  label: string;
  title: string;
  copy: string;
};

function updateProjectGlow(event: PointerEvent<HTMLElement>) {
  const bounds = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--project-glow-x",
    `${event.clientX - bounds.left}px`,
  );
  event.currentTarget.style.setProperty(
    "--project-glow-y",
    `${event.clientY - bounds.top}px`,
  );
}

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.47.09.64-.2.64-.45v-1.68c-2.62.57-3.17-1.11-3.17-1.11-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.43.96 1.43.96.84 1.43 2.2 1.02 2.73.78.08-.6.33-1.02.6-1.25-2.1-.24-4.3-1.05-4.3-4.67 0-1.03.37-1.88.97-2.54-.1-.24-.42-1.2.1-2.5 0 0 .79-.25 2.61.97A9.1 9.1 0 0 1 12 6.75c.8 0 1.6.1 2.36.32 1.82-1.22 2.61-.97 2.61-.97.52 1.3.2 2.26.1 2.5.6.66.97 1.51.97 2.54 0 3.63-2.2 4.42-4.3 4.65.34.3.64.87.64 1.75v2.6c0 .25.17.54.64.45A9.5 9.5 0 0 0 12 2.5Z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FocusMarquee() {
  const focusAreas = [
    "AI SYSTEMS",
    "PRODUCT ENGINEERING",
    "CREATIVE TECHNOLOGY",
    "AI SYSTEMS",
    "PRODUCT ENGINEERING",
  ];

  return (
    <section
      className="overflow-hidden border-y border-paper/15 bg-[#0c0a11] py-4"
      aria-label="Areas of focus"
    >
      <div className="flex w-max will-change-transform [animation:marquee_28s_linear_infinite] motion-reduce:translate-x-0 motion-reduce:animate-none">
        {[false, true].map((isDuplicate) => (
          <div
            className="flex shrink-0 items-center gap-9 px-6 text-[.68rem] font-bold tracking-[.18em]"
            aria-hidden={isDuplicate || undefined}
            key={isDuplicate ? "duplicate" : "primary"}
          >
            {focusAreas.map((area, index) => (
              <span className="contents" key={`${area}-${index}`}>
                {index > 0 && (
                  <i className="h-1.5 w-1.5 rounded-full bg-violet-light" />
                )}
                <span>{area}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkSection({ projects }: WorkSectionProps) {
  return (
    <section
      id="work"
      className={`${sectionShell} py-[clamp(3rem,6vw,5rem)]`}
    >
      <Reveal className="mb-8">
        <h2 className={eyebrow}>Selected work</h2>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

export function ProfileSection() {
  return (
    <section
      id="profile"
      className="relative isolate overflow-hidden border-t border-paper/15"
    >
      <div
        className="pointer-events-none absolute top-[-18rem] left-[36%] -z-1 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(112,71,255,.18),transparent_66%)]"
        aria-hidden="true"
      />

      <Reveal
        className={`${sectionShell} grid grid-cols-[minmax(170px,.42fr)_minmax(0,1.58fr)] gap-[clamp(3rem,7vw,7rem)] py-[clamp(7rem,12vw,11rem)] max-md:grid-cols-1 max-md:gap-10`}
      >
        <div>
          <p className={eyebrow}>About me</p>
          <p className="mt-5 mb-0 max-w-[18ch] text-[.68rem] leading-5 font-bold uppercase tracking-[.11em] text-[#827a8d]">
            Venezuela
            <span className="block text-violet-light">Working remotely</span>
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="m-0 max-w-[900px] font-display text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[1.02] font-normal tracking-[-.035em] text-paper">
            I&apos;m Anthony Gonzalez, a Full-Stack &amp; AI Engineer from
            Venezuela.
          </h2>

          <div className="mt-[clamp(3.5rem,7vw,6rem)] grid grid-cols-2 border-y border-paper/15 max-sm:grid-cols-1">
            <div className="border-r border-paper/15 py-7 pr-[clamp(1.5rem,4vw,4rem)] max-sm:border-r-0 max-sm:border-b max-sm:pr-0">
              <p className="m-0 text-[.62rem] font-bold uppercase tracking-[.13em] text-[#918999]">
                What I build
              </p>
              <p className="mt-5 mb-0 max-w-[38ch] text-[clamp(1rem,1.45vw,1.25rem)] leading-8 text-[#d4cedc]">
                I build end-to-end digital products, from intuitive interfaces
                to reliable backend systems and practical AI experiences.
              </p>
            </div>

            <div className="py-7 pl-[clamp(1.5rem,4vw,4rem)] max-sm:pl-0">
              <p className="m-0 text-[.62rem] font-bold uppercase tracking-[.13em] text-[#918999]">
                How I work
              </p>
              <p className="mt-5 mb-0 max-w-[44ch] text-[.92rem] leading-7 text-muted">
                I like working close to the problem, not just the specification,
                so I can understand the business logic, make thoughtful technical
                decisions, and help shape solutions that are useful, clear, and
                built to last.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className={`${sectionShell} relative isolate overflow-hidden border-t border-paper/15 py-[clamp(7rem,12vw,11rem)]`}
    >
      <Reveal className="grid grid-cols-[minmax(240px,.58fr)_minmax(0,1.42fr)] items-start gap-[clamp(3rem,7vw,7rem)] max-md:grid-cols-1">
        <div className="max-w-[350px]">
          <p className={eyebrow}>Profile / approach</p>
          <h2 className="mt-8 mb-5 font-cta text-[clamp(2.7rem,4.8vw,4.8rem)] leading-[.92] font-normal tracking-[-.04em]">
            Engineering with judgment.
          </h2>
          <p className="m-0 max-w-[34ch] text-[.9rem] leading-7 text-muted">
            I turn product problems into dependable systems, using AI where it
            creates real value and conventional software where it is the better
            tool.
          </p>
        </div>

        <div
          className="min-w-0 overflow-hidden"
          aria-label="Abstract generative ASCII artwork"
        >
          <pre className="m-0 font-mono text-[clamp(.22rem,.65vw,.62rem)] leading-[1.02] tracking-[-.035em] text-violet-light">{String.raw`    %%%%%%#**
       %*==*#@@#-=-=**#%
          #+=--+=-==:..:*                             @%##
           %#######*++::::=+                         %##**#                               @@
             @@@%#########%#+::#                   %##*=-=*                              @@@@
                @@@%%###%%%%%%%*==-:*            ###*=++==                           %@@@@
             @@@@@@@@@@@%%%%%%%@%*:--:.:-:+#\*\*++*+=*+====+                       %@@@@@
                    @@@@@    *%%#+=++-::-:.........-+++*#                  #%%@@@@@@
                  @##%         @@%@#+==++--:=:.........-+   @        ###%%@@@@@@
                        %#+      @@@@%*+++++=:..:..:-:...:::-= *+%%#%@@@@@@@
                            %#+== @@@@@@%+++++++-::.::.:-=+###%%@@@@@@@@@
                               *##++%@@@@@@#==-----::-%@@@@@@@@@@@@@@%%%%@@
                                  @@@@@@@@@+.......:-#%@@@@@@@@%%##**##%%%@@
                                 %@@@+::::-===-::..-%%*-:-+*##%%@#==+*##%%%@@
                      %#%%@%%%%%%%@@@%-:::::-==-===+=--%@@@@%#%%@%-:=+*##%%@@
                        @@@@@@@@@@@@@@#***+=::==++****%#====++*%@%+++*##%%%@@
                                 @@%%@@@%%%##*##%#\*\*%@%%@@@%*+---:::=*#%%%@@
                              @@@#*+--+@@@@@@@@##@%%@@@@@@@@@@@@@#*=:..:+#%
                            @@%%%###  @@@@@@@#====%@@@@@@@@@@@       @@%+-----+
                          @@@@        %%@@%+==*%%%@@@@@     @               @@%=:--
                      @@@@              *++#@@@%##%@@                            %%#-:*
                  @%%                                                                 %+*-=
                                                                                            @%@`}</pre>
          <p className="mt-4 ml-[32%] flex items-center gap-3 text-[.58rem] font-bold uppercase tracking-[.15em] text-[#a99bb8] max-sm:ml-[12%]">
            <span className="h-px w-8 bg-violet-light/55" aria-hidden="true" />
            Ideas need lift. Systems need direction.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-[clamp(5rem,8vw,7rem)] grid grid-cols-3 border-y border-paper/15 max-sm:grid-cols-1">
        {principles.map((principle) => (
          <Reveal
            className="relative min-h-[310px] border-r border-paper/15 px-[clamp(1.5rem,3vw,3rem)] pt-7 pb-9 first:pl-0 last:border-r-0 last:pr-0 max-sm:min-h-[250px] max-sm:border-r-0 max-sm:border-b max-sm:px-0 max-sm:py-7 before:absolute before:top-7 before:left-[clamp(1.5rem,3vw,3rem)] before:h-px before:w-10 before:bg-violet-light/55 first:before:left-0 max-sm:before:left-0"
            key={principle.number}
          >
            <span className="font-display text-sm italic text-[#92869e]">
              {principle.number}
            </span>
            <h3 className="mt-11 mb-4 max-w-[15rem] font-display text-[clamp(1.8rem,2.4vw,2.35rem)] leading-[.98] font-normal tracking-[-.03em]">
              {principle.title}
            </h3>
            <p className="m-0 max-w-[24ch] text-[.8rem] leading-6 text-[#c0b8cb]">
              {principle.copy}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`${sectionShell} relative isolate overflow-hidden border-t border-paper/15 py-[clamp(7rem,12vw,11rem)]`}
    >
      <div
        className="pointer-events-none absolute top-[11rem] right-[-15rem] -z-1 h-[36rem] w-[36rem] rounded-full border border-violet-light/10 bg-[radial-gradient(circle,rgba(112,71,255,.17),transparent_63%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[16rem] right-[4%] -z-1 h-[23rem] w-[23rem] rounded-full border border-dashed border-paper/10 [animation:orbit_30s_linear_infinite] motion-reduce:animate-none"
        aria-hidden="true"
      />
      <SectionHeading
        label="Experience"
        title="Building the signal behind the interface."
        copy="Senior engineering work across intelligent systems, scalable product platforms, and the technical foundations that let teams move with confidence."
      />

      <ExperienceTimeline>
        <ol className="m-0 list-none border-t border-paper/15 p-0 max-md:pl-10">
          {experience.map((entry, index) => (
          <Reveal
            className="group relative grid grid-cols-[minmax(8rem,.42fr)_minmax(0,1fr)] gap-x-8 border-b border-paper/15 py-[clamp(2rem,3.5vw,3.25rem)] max-md:grid-cols-1 max-md:gap-y-5"
            key={`${entry.company}-${entry.period}`}
          >
            <div className="flex items-start gap-3">
              <span className="relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-violet-light/55 bg-ink text-[.53rem] font-bold text-violet-light max-md:-ml-10">
                0{index + 1}
              </span>
              <div className="space-y-1 pt-1">
                <p className="m-0 text-[.58rem] font-bold uppercase tracking-[.13em] text-[#c4bacd]">
                  {entry.company}
                </p>
                <p className="m-0 text-[.55rem] font-bold uppercase tracking-[.12em] text-[#817788]">
                  {entry.location}
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
                <div>
                  <p className="m-0 text-[.58rem] font-bold uppercase tracking-[.13em] text-[#958b9e]">
                    {entry.period}
                  </p>
                  <h3 className="mt-3 mb-0 max-w-[43rem] font-display text-[clamp(1.9rem,3vw,3.15rem)] leading-[.95] font-normal tracking-[-.035em] text-paper transition-colors duration-500 group-hover:text-violet-light">
                    {entry.role}
                  </h3>
                </div>
                {entry.client && (
                  <p className="m-0 border border-paper/15 px-3 py-2 text-[.55rem] font-bold uppercase tracking-[.12em] text-[#c7bed0]">
                    Client · {entry.client}
                  </p>
                )}
              </div>

              <p className="mt-6 mb-0 max-w-[47rem] text-[.87rem] leading-7 text-muted">
                {entry.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2" aria-label={`${entry.company} outcomes`}>
                {entry.outcomes.map((outcome) => (
                  <span
                    className="border border-violet-light/30 px-2.5 py-1.5 text-[.54rem] font-bold uppercase tracking-[.1em] text-[#d6c9ff]"
                    key={outcome}
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          ))}
        </ol>
      </ExperienceTimeline>

      <Reveal className="mt-8 flex items-center justify-between gap-6 text-[.57rem] font-bold uppercase tracking-[.14em] text-[#8b8295] max-sm:items-start max-sm:flex-col">
        <span>Four teams · Global product delivery</span>
        <span className="flex items-center gap-3 text-[#c7bed0]">
          <i className="h-1.5 w-1.5 rounded-full bg-[#7ee2ab] shadow-[0_0_10px_rgba(126,226,171,.9)]" />
          Currently available
        </span>
      </Reveal>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      id="stack"
      className={`${sectionShell} bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:80px_80px] py-[clamp(7rem,12vw,11rem)]`}
    >
      <SectionHeading
        label="Capabilities"
        title="From model to interface."
        copy="A product-focused toolkit for taking intelligent systems from prototype to production."
      />

      <div className="grid grid-cols-3 border-y border-paper/15 max-sm:grid-cols-1">
        {capabilities.map((group, index) => (
          <Reveal
            className="min-h-[360px] border-r border-paper/15 p-8 first:pl-0 last:border-r-0 max-sm:min-h-[250px] max-sm:border-r-0 max-sm:border-b max-sm:px-0 max-sm:py-6"
            key={group.label}
          >
            <span className="font-display text-sm italic text-[#6f6878]">
              0{index + 1}
            </span>
            <h3 className="mt-[4.5rem] mb-3 max-w-[250px] font-display text-[2.2rem] leading-[1.05] font-normal max-sm:mt-8">
              {group.label}
            </h3>
            <ul className="mt-8 mb-0 list-none p-0">
              {group.items.map((item) => (
                <li className="py-2 text-[.76rem] text-muted" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = contactLinks[0].detail;

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        copyWithFallback(email);
      }
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      try {
        copyWithFallback(email);
        setEmailCopied(true);
        window.setTimeout(() => setEmailCopied(false), 2200);
      } catch {
        setEmailCopied(false);
      }
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-paper/15 bg-[radial-gradient(circle_at_18%_24%,rgba(112,71,255,.26),transparent_31%),linear-gradient(145deg,#150b1d,#0b0912_62%)]"
    >
      <div
        className={`${sectionShell} grid grid-cols-[minmax(0,.9fr)_minmax(440px,1.1fr)] items-center gap-[clamp(4rem,8vw,8rem)] py-[clamp(5rem,9vw,8rem)] max-lg:grid-cols-1 max-lg:gap-14`}
      >
        <Reveal className="max-w-[600px]">
          <p className={eyebrow}>Contact / availability</p>
          <h2 className="mt-8 mb-6 font-cta text-[clamp(3.6rem,6.7vw,6.8rem)] leading-[.88] font-normal tracking-[-.055em] max-sm:text-[clamp(3.2rem,15vw,4.6rem)]">
            Have a product
            <span className="block text-violet-light">worth building?</span>
          </h2>
          <p className="m-0 max-w-[46ch] text-[.92rem] leading-7 text-muted">
            I&apos;m available for remote product engineering work across
            full-stack systems, AI experiences, and ambitious digital products.
          </p>

          <p className="mt-8 mb-0 flex w-max max-w-full items-center gap-3 border border-[#7ee2ab]/20 bg-[#7ee2ab]/[.045] px-4 py-3 text-[.62rem] font-bold uppercase tracking-[.12em] text-[#c9f3dc]">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-[#7ee2ab] shadow-[0_0_12px_rgba(126,226,171,.9)]"
              aria-hidden="true"
            />
            Available for remote opportunities
          </p>
        </Reveal>

        <Reveal className="overflow-hidden rounded-md border border-paper/15 bg-[#100d16]/80 shadow-[0_24px_70px_rgba(0,0,0,.22)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-6 border-b border-paper/15 px-6 py-4 text-[.56rem] font-bold uppercase tracking-[.13em] text-[#827a8d] max-sm:px-5">
            <span>Choose a channel</span>
            <button
              className="-my-1 border border-paper/15 px-2.5 py-2 text-[#c9c1d4] transition-colors hover:border-violet-light/60 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-light"
              type="button"
              onClick={copyEmail}
              aria-live="polite"
            >
              {emailCopied ? "Email copied" : "Copy email"}
            </button>
          </div>
          {contactLinks.map((contact, index) => (
            <ContactLink {...contact} index={index} key={contact.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function copyWithFallback(value: string) {
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  const didCopy = document.execCommand("copy");
  input.remove();

  if (!didCopy) {
    throw new Error("Clipboard copy failed");
  }
}

function SectionHeading({ label, title, copy }: SectionHeadingProps) {
  return (
    <Reveal className={sectionHeading}>
      <p className={eyebrow}>{label}</p>
      <div className="max-w-[720px]">
        <h2 className="-mt-1 mb-5 max-w-[720px] font-cta text-[clamp(2.6rem,4.8vw,4.8rem)] leading-[.92] font-normal tracking-[-.04em] max-sm:text-[clamp(2.5rem,11vw,3.4rem)]">
          {title}
        </h2>
        <p className={headingCopy}>{copy}</p>
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: WorkItem;
  index: number;
}) {
  return (
    <Reveal>
      <article
        className="group relative isolate flex min-h-[238px] flex-col overflow-hidden rounded-md border border-transparent p-5 transition-[background,box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,.2),0_0_38px_rgba(112,71,255,.1)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light"
        onPointerMove={updateProjectGlow}
        style={{
          background:
            "linear-gradient(#15141a, #15141a) padding-box, radial-gradient(110px circle at var(--project-glow-x, 78%) var(--project-glow-y, 0%), rgba(158, 119, 255, .9), rgba(93, 55, 181, .42) 34%, transparent 70%) border-box, rgba(240, 236, 245, .11)",
        }}
      >
        <span className="pointer-events-none absolute top-0 right-[18%] bottom-0 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent transition-colors duration-500 group-hover:via-violet-light/35" aria-hidden="true" />
        <span className="pointer-events-none absolute top-[43%] right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-colors duration-500 group-hover:via-violet-light/25" aria-hidden="true" />

        <div className="relative z-10 flex items-center justify-between gap-4 text-[.52rem] font-bold uppercase tracking-[.14em] text-[#928a9d]">
          <span>Case / 0{index + 1}</span>
          <div className="flex items-center gap-2">
            <span className="border border-violet-light/40 px-2 py-1 text-[.46rem] text-[#baa5f7]">
              {project.status}
            </span>
            {project.links?.source ? (
              <a
                className="grid h-7 w-7 place-items-center rounded-full border border-paper/15 text-[#a8a1b4] transition-colors duration-300 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light"
                href={project.links.source}
                target="_blank"
                rel="noreferrer"
                aria-label={`View the ${project.title} repository`}
              >
                <GitHubMark />
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative z-10 mt-6 flex flex-1 flex-col">
          <div className="flex items-center gap-3 text-[.59rem] font-bold uppercase tracking-[.11em] text-[#928a9d]">
            <span>{project.role}</span>
          </div>

          <div className="mt-3 mb-2">
            <div className="flex min-w-0 items-center gap-1.5">
            <Link
              className="font-display text-[clamp(2rem,3.2vw,3.15rem)] leading-[.95] font-normal tracking-[-.045em] transition-colors duration-300 hover:text-violet-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light"
              href={`/work/${project.slug}`}
            >
              {project.title}
            </Link>
            {project.links?.live ? (
              <a
                className="grid h-5 w-5 shrink-0 place-items-center text-[0px] text-violet-light transition-[color,transform] duration-300 hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-light"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                <ExternalArrowIcon />
              </a>
            ) : null}
            </div>
          </div>
          <p className="m-0 max-w-[510px] pr-10 text-[.8rem] leading-6 text-muted">
            {project.summary}
          </p>

          <ul
            className="mt-auto mb-0 flex list-none flex-wrap gap-1.5 pt-6 pr-10 p-0"
            aria-label="Technologies"
          >
            {project.stack.map((item) => (
              <li
                className="border border-paper/15 px-2 py-1 text-[.48rem] font-bold uppercase tracking-[.08em] text-[#a8a1b4]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>

        </div>
      </article>
    </Reveal>
  );
}

function ContactLink({
  label,
  title,
  detail,
  href,
  index,
}: {
  label: string;
  title: string;
  detail: string;
  href: string;
  index: number;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="group relative isolate grid min-h-[116px] grid-cols-[5.5rem_minmax(0,1fr)_2.75rem] items-center gap-x-5 overflow-hidden border-b border-paper/15 px-6 py-5 transition-colors duration-500 last:border-b-0 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(90deg,rgba(112,71,255,.14),transparent_72%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-violet-light max-sm:min-h-[108px] max-sm:grid-cols-[minmax(0,1fr)_2.5rem] max-sm:gap-x-4 max-sm:px-5"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span className="flex items-center gap-3 text-[.56rem] font-bold uppercase tracking-[.12em] text-[#9d94a8] max-sm:col-start-1 max-sm:self-end">
        <span
          className="font-display text-xs font-normal italic tracking-normal text-violet-light/80"
          aria-hidden="true"
        >
          0{index + 1}
        </span>
        {label}
      </span>
      <span className="min-w-0 max-sm:col-start-1 max-sm:row-start-2 max-sm:mt-2">
        <strong className="block font-display text-[clamp(1.55rem,2.5vw,2.25rem)] leading-none font-normal tracking-[-.035em] text-paper transition-colors group-hover:text-white">
          {title}
        </strong>
        <span className="mt-2 block truncate text-[.66rem] tracking-[.015em] text-[#8d8498] max-sm:whitespace-normal max-sm:break-words">
          {detail}
        </span>
      </span>
      <i className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 not-italic transition-[background-color,color,border-color,transform] duration-300 group-hover:rotate-45 group-hover:border-paper group-hover:bg-paper group-hover:text-ink max-sm:col-start-2 max-sm:row-span-2 max-sm:row-start-1 max-sm:h-10 max-sm:w-10">
        <ExternalArrowIcon />
      </i>
    </a>
  );
}
