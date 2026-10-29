import { ProjectGrid } from "@/components/project-grid";
import { Shell } from "@/components/shell";
import { media, projects } from "@/lib/projects";

export default function Home() {
  const cards = projects.map((p) => {
    const m = media(p.slug);
    return { slug: p.slug, name: p.name, tagline: p.tagline, color: p.color, hero: m.hero, poster: m.heroPoster };
  });
  return (
    <Shell section="projects">
      <ProjectGrid cards={cards} />
    </Shell>
  );
}
