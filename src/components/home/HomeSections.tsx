import Link from "next/link";
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

const projectArt = [
  "bg-[#24124b] bg-[linear-gradient(140deg,transparent,rgba(55,24,123,.6))]",
  "bg-[#25121f] bg-[radial-gradient(circle_at_20%_20%,#874063,transparent_35%),linear-gradient(145deg,#21101d,#321323)]",
  "bg-[#11101a] bg-[linear-gradient(125deg,rgba(90,72,130,.55),transparent)]",
];

const contactLinks = [
  {
    label: "Email",
    value: "robwert1997@gmail.com",
    href: "mailto:robwert1997@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/anthondev",
    href: "https://www.linkedin.com/in/anthondev/",
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
      className={`${sectionShell} py-[clamp(7rem,12vw,11rem)]`}
    >
      <SectionHeading
        label="Selected work"
        title="Building ideas into useful systems."
        copy="A curated set of product stories. Real project information can replace the clearly marked draft content below."
      />

      <div className="grid gap-px border-y border-paper/15 bg-paper/15">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className={`${sectionShell} relative isolate overflow-hidden border-t border-paper/15 py-[clamp(7rem,12vw,11rem)]`}
    >
      <Reveal className="grid grid-cols-[.72fr_1.28fr] gap-8 max-md:grid-cols-1">
        <p className={eyebrow}>Profile / approach</p>
        <div className="min-w-0 overflow-hidden" aria-label="Abstract generative ASCII artwork">
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

      <div className="relative mt-[clamp(5rem,10vw,9rem)] ml-[calc(36%+1rem)] grid grid-cols-3 border-y border-paper/15 max-md:ml-0 max-sm:grid-cols-1">
        {principles.map((principle, index) => (
          <Reveal
            className={`relative min-h-[290px] border-r border-paper/15 pt-6 pr-6 pb-8 last:border-r-0 max-sm:min-h-[250px] max-sm:border-r-0 max-sm:border-b max-sm:py-7 before:absolute before:top-6 before:left-0 before:h-px before:w-10 before:bg-violet-light/55 ${
              index ? "pl-6 max-sm:pl-0" : ""
            }`}
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
  return (
    <section
      id="contact"
      className="border-t border-paper/15 bg-[radial-gradient(circle_at_80%_20%,rgba(112,71,255,.28),transparent_33%),linear-gradient(145deg,#180c21,#0b0912_60%)]"
    >
      <div
        className={`${sectionShell} pt-[clamp(7rem,12vw,11rem)] pb-[clamp(5rem,8vw,8rem)]`}
      >
        <Reveal>
          <p className={eyebrow}>Have an interesting problem?</p>
          <h2 className="mt-8">
            Let&apos;s build something{" "}
            <em className="block font-normal text-violet-light">
              worth remembering.
            </em>
          </h2>
        </Reveal>

        <Reveal className="mt-[clamp(4.5rem,9vw,8rem)] border-t border-paper/15">
          {contactLinks.map((contact) => (
            <ContactLink {...contact} key={contact.label} />
          ))}
          <div className="grid grid-cols-[.55fr_1.4fr_auto] items-center gap-8 border-b border-paper/15 py-6 text-[#7c7483] max-sm:grid-cols-[1fr_auto] max-sm:gap-2">
            <span className="text-[.57rem] font-bold uppercase tracking-[.11em] text-[#80778b] max-sm:col-span-full">
              Résumé
            </span>
            <strong className="font-display text-[clamp(1.5rem,3vw,2.7rem)] font-normal">
              Add PDF to enable
            </strong>
            <i className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 not-italic">
              —
            </i>
          </div>
        </Reveal>
      </div>
    </section>
  );
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
  const artwork = projectArt[index] ?? projectArt[0];

  return (
    <Reveal>
      <Link
        className="group relative grid min-h-[430px] grid-cols-[minmax(330px,.9fr)_minmax(0,1.1fr)] bg-ink transition-[background-color,box-shadow] duration-500 hover:bg-[#0d0b13] hover:shadow-[inset_0_0_0_1px_rgba(168,140,255,.22)] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-light max-md:grid-cols-[.86fr_1.14fr] max-sm:grid-cols-1"
        href={`/work/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
      >
        <div
          className={`relative isolate min-h-[430px] overflow-hidden p-6 before:absolute before:-z-2 before:top-[16%] before:left-[17%] before:aspect-square before:w-[66%] before:rounded-full before:border before:border-white/15 before:bg-[linear-gradient(145deg,rgba(255,255,255,.24),transparent_55%)] before:transition-transform before:duration-700 after:absolute after:-z-1 after:top-[36%] after:left-[37%] after:aspect-square after:w-[27%] after:rounded-full after:bg-ink/60 after:backdrop-blur after:transition-transform after:duration-700 group-hover:before:rotate-8 group-hover:before:scale-105 group-hover:after:scale-90 max-sm:min-h-[320px] ${artwork}`}
        >
          <span className="font-display text-lg italic">0{index + 1}</span>
          <span
            className="pointer-events-none absolute top-1/2 right-6 left-6 h-px bg-white/10 transition-opacity duration-500 group-hover:opacity-70"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-6 bottom-6 left-1/2 w-px bg-white/10 transition-opacity duration-500 group-hover:opacity-70"
            aria-hidden="true"
          />
          <div
            className="absolute top-[12%] left-[12%] aspect-square w-[76%] rounded-full border border-dashed border-white/15 [animation:orbit_36s_linear_infinite]"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-[12%] right-6 border border-white/15 px-1.5 py-1 font-sans text-[.44rem] font-bold tracking-[.16em] text-white/55 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-y-1 group-hover:opacity-100"
            aria-hidden="true"
          >
            ORBIT / 0{index + 1}
          </span>
          <p className="absolute bottom-6 left-6 m-0 text-[.51rem] font-bold tracking-[.14em] text-white/60">
            CASE / {project.year}
          </p>
        </div>

        <div className="relative flex flex-col justify-center p-[clamp(2rem,5vw,4.2rem)] max-sm:min-h-[380px] max-sm:px-5 max-sm:pt-8 max-sm:pb-20">
          <div className="flex items-center gap-3 text-[.59rem] font-bold uppercase tracking-[.11em] text-[#928a9d]">
            <span>{project.role}</span>
            <span className="w-max border border-violet-light/40 px-2 py-1 text-[.48rem] font-bold uppercase tracking-[.11em] text-[#baa5f7]">
              {project.status}
            </span>
          </div>

          <h3 className="mt-8 mb-4 max-w-[620px] font-display text-[clamp(2.5rem,5vw,5.4rem)] leading-[.92] font-normal tracking-[-.05em] max-sm:text-[clamp(3rem,14vw,4.7rem)]">
            {project.title}
          </h3>
          <p className="m-0 max-w-[540px] text-[.86rem] leading-7 text-muted">
            {project.summary}
          </p>

          <ul
            className="mt-8 mb-0 flex list-none flex-wrap gap-2 p-0"
            aria-label="Technologies"
          >
            {project.stack.map((item) => (
              <li
                className="border border-paper/15 px-2.5 py-1.5 text-[.53rem] font-bold uppercase tracking-[.08em] text-[#97909f]"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>

          <span className="absolute right-8 bottom-8 flex items-center gap-3 text-[.52rem] font-bold tracking-[.14em] text-[#8f879c] transition-colors duration-300 group-hover:text-paper max-sm:right-5 max-sm:bottom-5">
            <span className="hidden sm:block">READ CASE</span>
            <span
              className="grid h-11 w-11 place-items-center rounded-full border border-paper/15 text-base transition-[background-color,border-color,transform] duration-500 group-hover:rotate-45 group-hover:border-violet-light/70 group-hover:bg-violet-light group-hover:text-ink"
              aria-hidden="true"
            >
              ↗
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="group grid grid-cols-[.55fr_1.4fr_auto] items-center gap-8 border-b border-paper/15 py-6 max-sm:grid-cols-[1fr_auto] max-sm:gap-2"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span className="text-[.57rem] font-bold uppercase tracking-[.11em] text-[#80778b] max-sm:col-span-full">
        {label}
      </span>
      <strong className="font-display text-[clamp(1.5rem,3vw,2.7rem)] font-normal">
        {value}
      </strong>
      <i className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 not-italic transition group-hover:bg-paper group-hover:text-ink">
        ↗
      </i>
    </a>
  );
}
