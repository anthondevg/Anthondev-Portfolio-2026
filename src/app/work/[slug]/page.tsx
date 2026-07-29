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
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);

  if (!project) notFound();

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
          <span>CASE STUDY / CONTENT DRAFT</span>
        </div>

        <article className="case-content section-shell">
          <aside>
            <p>Case study note</p>
            <span>
              This structure is ready for verified project information, images,
              architecture diagrams, and results.
            </span>
          </aside>
          <div className="prose">
            <MDXRemote source={project.content} />
          </div>
        </article>

        <nav className="case-next section-shell" aria-label="Case study navigation">
          <span>Next step</span>
          <Link href="/#contact">
            Add the real project story <i aria-hidden="true">↗</i>
          </Link>
        </nav>
      </main>
    </>
  );
}
