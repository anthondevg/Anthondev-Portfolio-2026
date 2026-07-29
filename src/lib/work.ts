import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type WorkFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  role: string;
  year: string;
  stack: string[];
  cover: string;
  featured: boolean;
  status: string;
  links?: {
    live?: string;
    source?: string;
  };
  metrics?: string[];
};

export type WorkItem = WorkFrontmatter & {
  content: string;
};

const workDirectory = path.join(process.cwd(), "src", "content", "work");

export function getAllWork(): WorkItem[] {
  if (!fs.existsSync(workDirectory)) return [];

  return fs
    .readdirSync(workDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(workDirectory, file), "utf8");
      const { data, content } = matter(source);
      return { ...(data as WorkFrontmatter), content };
    })
    .filter((project) => project.featured)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getWorkBySlug(slug: string): WorkItem | null {
  const project = getAllWork().find((item) => item.slug === slug);
  return project ?? null;
}
