import Link from "next/link";
import { LoopVideo } from "@/components/loop-video";
import { Shell } from "@/components/shell";
import { media, projects } from "@/lib/projects";

export default function Home() {
  return (
    <Shell section="projects">
      <div className="project-grid">
        {projects.map((p, i) => {
          const m = media(p.slug);
          return (
            <Link key={p.slug} href={`/${p.slug}`} className="project-card">
              <div className="frame ratio-16-10 is-bare">
                <LoopVideo src={m.hero} poster={m.heroPoster} label={p.name} eager={i < 2} />
              </div>
              <div className="project-card-text">
                <span className="project-card-name">{p.name}</span>
                <span className="project-card-tagline">{p.tagline}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}
