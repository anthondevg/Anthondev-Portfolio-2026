import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navigation } from "@/components/Navigation";
import { getAllWork, getWorkBySlug } from "@/lib/work";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWork().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) notFound();

  const projects = getAllWork();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject =
    projects.length > 1 ? projects[(projectIndex + 1) % projects.length] : null;

  return (
    <>
      <Navigation />
      <main className="case-page">
        <header className="case-hero section-shell">
          <Link className="back-link" href="/#work">
            <span aria-hidden="true">←</span> All work
          </Link>
          <div className="case-kicker">
            <span>{project.role}</span>
            <span>{project.year}</span>
            <span className="placeholder-tag">{project.status}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <ul>
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </header>

        <div className={`case-cover ${project.cover}`} aria-hidden="true">
          <div />
          <span>{project.title} / Case study</span>
        </div>

        <article className="case-content section-shell">
          <aside aria-label="Project details">
            <p>Project details</p>
            <dl className="m-0 grid gap-5 text-[.72rem] leading-5">
              <div>
                <dt className="mb-1 text-[.52rem] font-bold uppercase tracking-[.11em] text-[#77707e]">
                  Role
                </dt>
                <dd className="m-0 text-[#b5aebd]">{project.role}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[.52rem] font-bold uppercase tracking-[.11em] text-[#77707e]">
                  Year
                </dt>
                <dd className="m-0 text-[#b5aebd]">{project.year}</dd>
              </div>
              <div>
                <dt className="mb-1 text-[.52rem] font-bold uppercase tracking-[.11em] text-[#77707e]">
                  Availability
                </dt>
                <dd className="m-0 text-[#b5aebd]">{project.status}</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-col items-start gap-3 text-[.68rem] font-bold text-violet-light">
              {project.links?.live ? (
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  Live product <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {project.links?.source ? (
                <a href={project.links.source} target="_blank" rel="noreferrer">
                  Source code <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </aside>
          <div className="prose">
            <MDXRemote source={project.content} />
          </div>
        </article>

        {nextProject ? (
          <nav className="case-next section-shell" aria-label="Case study navigation">
            <span>Next case study</span>
            <Link href={`/work/${nextProject.slug}`}>
              {nextProject.title} <i aria-hidden="true">→</i>
            </Link>
          </nav>
        ) : null}
      </main>
    </>
  );
}
