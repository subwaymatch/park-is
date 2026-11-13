import Link from "next/link";
import { ProjectLogo } from "@/components/project-logo";
import { Shell } from "@/components/shell";
import { projects } from "@/lib/projects";

/** The projects as a grid of their animated logos, each over its name and tagline. */
export default function Home() {
  return (
    <Shell section="projects">
      <div className="project-grid">
        {projects.map((p) => (
          <Link key={p.slug} href={`/${p.slug}`} className="project-card">
            <div className="project-card-logo" data-slug={p.slug}>
              <ProjectLogo slug={p.slug} />
            </div>
            <div className="project-card-text">
              <span className="project-card-name">{p.name}</span>
              <span className="project-card-tagline">{p.tagline}</span>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
