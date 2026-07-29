import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { HeroVisual } from "@/components/HeroVisual";
import { Navigation } from "@/components/Navigation";
import { Reveal } from "@/components/Reveal";
import { getAllWork } from "@/lib/work";

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

export default function Home() {
  const projects = getAllWork();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              Available for new opportunities
            </p>
            <h1 id="hero-title" className="hero-title">
              Anthony Gonzalez
            </h1>
            <p className="hero-role">AI Engineer</p>
            <p className="hero-lede">
              I design and build intelligent products where thoughtful
              engineering meets creative direction.
            </p>
            <div className="hero-actions">
              <CtaButton href="#work" label="View" accent="Work" />
              <Link className="hidden" href="#work">
                Explore selected work
                <span aria-hidden="true">↘</span>
              </Link>
              <Link className="text-link" href="#contact">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <HeroVisual />
          <div className="hero-index" aria-hidden="true">
            <span>PORTFOLIO / 2026</span>
            <span>10.4806° N · 66.9036° W</span>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of focus">
          <div className="marquee-track">
            <span>AI SYSTEMS</span>
            <i />
            <span>PRODUCT ENGINEERING</span>
            <i />
            <span>CREATIVE TECHNOLOGY</span>
            <i />
            <span>AI SYSTEMS</span>
            <i />
            <span>PRODUCT ENGINEERING</span>
          </div>
        </section>

        <section id="work" className="section-shell work-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Selected work</p>
            <div>
              <h2>Building ideas into useful systems.</h2>
              <p>
                A curated set of product stories. Real project information can
                replace the clearly marked draft content below.
              </p>
            </div>
          </Reveal>

          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.slug}>
                <Link
                  className="project-card"
                  href={`/work/${project.slug}`}
                  aria-label={`Read case study: ${project.title}`}
                >
                  <div className={`project-art project-art-${index + 1}`}>
                    <span className="project-number">0{index + 1}</span>
                    <div className="project-orbit" aria-hidden="true" />
                    <p>CASE / {project.year}</p>
                  </div>
                  <div className="project-content">
                    <div className="project-meta">
                      <span>{project.role}</span>
                      <span className="placeholder-tag">{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <ul aria-label="Technologies">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell about-section">
          <Reveal className="about-intro">
            <p className="eyebrow">Profile / approach</p>
            <p className="display-copy">
              I care about the point where{" "}
              <em>ambitious technology</em> becomes clear, human, and genuinely
              valuable.
            </p>
          </Reveal>
          <div className="principles">
            {principles.map((principle) => (
              <Reveal className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell experience-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Experience</p>
            <div>
              <h2>Selected chapters.</h2>
              <p>
                Employment history is ready to be populated with verified
                roles and outcomes.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="experience-placeholder">
              <span>YOUR EXPERIENCE</span>
              <div>
                <h3>Add your latest role</h3>
                <p>
                  Company, dates, responsibilities, and measurable impact will
                  live here.
                </p>
              </div>
              <span>DETAILS PENDING</span>
            </div>
          </Reveal>
        </section>

        <section id="stack" className="section-shell stack-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <div>
              <h2>From model to interface.</h2>
              <p>
                A product-focused toolkit for taking intelligent systems from
                prototype to production.
              </p>
            </div>
          </Reveal>
          <div className="capability-grid">
            {capabilities.map((group, index) => (
              <Reveal className="capability" key={group.label}>
                <span>0{index + 1}</span>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner">
            <Reveal>
              <p className="eyebrow">Have an interesting problem?</p>
              <h2>
                Let&apos;s build something
                <em> worth remembering.</em>
              </h2>
            </Reveal>
            <Reveal className="contact-actions">
              <a
                className="contact-link"
                href="mailto:your.email@example.com"
                data-placeholder="true"
              >
                <span>Email</span>
                <strong>Add your email</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                data-placeholder="true"
              >
                <span>LinkedIn</span>
                <strong>Add your profile</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <div className="contact-link contact-link-disabled">
                <span>Résumé</span>
                <strong>Add PDF to enable</strong>
                <i aria-hidden="true">—</i>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer section-shell">
        <Link className="brand" href="#main" aria-label="Back to top">
          ANTHON<span>DEV</span>
        </Link>
        <p>AI Engineer · Caracas, VE · Remote worldwide</p>
        <div>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
