import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { Embed } from "@/components/embeds";
import { LoopVideo } from "@/components/loop-video";
import { ProjectLogo } from "@/components/project-logo";
import { RichText } from "@/components/rich-text";
import { SiteHeader } from "@/components/site-header";
import { type Block, type Figure, getProject, media, projects, SHAPES, yearText } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const image = { url: media(p.slug).image(p.ogImage), width: 1920, height: 1080, alt: p.name };
  return {
    title: p.name,
    description: p.tagline,
    // A page's openGraph replaces the layout's, so repeat the site-wide fields.
    openGraph: { siteName: "Ye Joo Park", type: "website", locale: "en_US", title: p.name, description: p.tagline, images: [image] },
    twitter: { card: "summary_large_image", images: [image.url] },
  };
}

function Paragraphs({ items }: { items: string[] }) {
  return items.map((text) => (
    <p key={text}>
      <RichText text={text} />
    </p>
  ));
}

/**
 * The media of a figure in its frame. Phones sit on the surface colour already, so they get no hairline; a matted
 * figure is set on it here, in a screen of its own shape.
 */
function Frame({ slug, f, className = "" }: { slug: string; f: Figure; className?: string }) {
  const shape = SHAPES[f.shape];
  if (f.mat) {
    return (
      <div className={["frame is-bare is-matted", className].filter(Boolean).join(" ")}>
        <div className={["frame-screen", shape.ratio, f.kind === "video" ? "is-video" : ""].filter(Boolean).join(" ")}>
          <Media slug={slug} f={f} />
        </div>
      </div>
    );
  }
  const classes = ["frame", shape.ratio, f.shape === "phone" ? "is-bare" : "", f.kind === "video" ? "is-video" : "", className];
  return (
    <div className={classes.filter(Boolean).join(" ")}>
      <Media slug={slug} f={f} />
    </div>
  );
}

function Media({ slug, f }: { slug: string; f: Figure }) {
  const m = media(slug);
  const shape = SHAPES[f.shape];
  return (
    <>
      {f.kind === "loop" && <LoopVideo src={m.clip(f.file)} poster={m.image(f.file)} label={f.caption} />}
      {f.kind === "video" && (
        <video
          src={m.clip(f.file)}
          poster={m.image(f.file)}
          controls
          playsInline
          preload="none"
          aria-label={f.caption}
          className="media-fill"
        />
      )}
      {f.kind === "still" && (
        <img
          src={m.image(f.file)}
          alt={f.caption}
          width={shape.width}
          height={shape.height}
          loading="lazy"
          decoding="async"
          className="media-fill"
        />
      )}
    </>
  );
}

function Section({ slug, block }: { slug: string; block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="cols">
          {block.label && <h2 className="col-label section-label">{block.label}</h2>}
          <div className="col-rest prose">
            <Paragraphs items={block.paragraphs} />
          </div>
        </div>
      );
    case "full":
      return (
        <figure className="cols">
          <Frame slug={slug} f={block.figure} className="col-all" />
          <figcaption className="col-rest">{block.figure.caption}</figcaption>
        </figure>
      );
    case "pair":
      return (
        <div className="cols">
          {block.figures.map((f, i) => (
            <figure key={f.file} className={i === 0 ? "col-half-start stack" : "col-half-end stack"}>
              <Frame slug={slug} f={f} />
              <figcaption>{f.caption}</figcaption>
            </figure>
          ))}
        </div>
      );
    case "aside":
      return (
        <figure className="cols figure-aside">
          <figcaption className="col-label">{block.figure.caption}</figcaption>
          <Frame slug={slug} f={block.figure} className="col-rest" />
        </figure>
      );
    case "embed":
      return (
        <figure className="cols">
          <div className={block.bleed ? "col-all bleed" : "col-all"}>
            <Embed slug={slug} name={block.name} />
          </div>
          {block.caption && <figcaption className="col-rest">{block.caption}</figcaption>}
        </figure>
      );
    case "logo":
      return (
        <figure className="cols">
          <div className="col-all frame is-bare">
            <ProjectLogo slug={slug} />
          </div>
          <figcaption className="col-rest">{block.caption}</figcaption>
        </figure>
      );
  }
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const m = media(p.slug);

  return (
    <>
      <section className="hero">
        <LoopVideo src={m.hero} poster={m.heroPoster} label={p.name} eager />
        <div className="hero-bar">
          <SiteHeader inverted={p.heroTone === "dark"} />
        </div>
      </section>
      <div className="wrap">
        <main className="container">
          <article className="article">
            <div className="cols">
              <div className="col-label">
                <h1 className="title">{p.name}</h1>
                <span className="muted">{yearText(p)}</span>
              </div>
              <p className="col-rest tagline">{p.tagline}</p>
            </div>

            <div className="rows">
              <div className="row">
                <span className="col-label muted">Links</span>
                <div className="col-rest links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener">
                      {l.label}
                      <ArrowUpRightIcon />
                    </a>
                  ))}
                </div>
              </div>
              <div className="row">
                <span className="col-label muted">About</span>
                <div className="col-rest prose">
                  <Paragraphs items={p.summary} />
                </div>
              </div>
              {p.facts.map(([label, value]) => (
                <div key={label} className="row">
                  <span className="col-label muted">{label}</span>
                  <span className="col-rest">
                    <RichText text={value} />
                  </span>
                </div>
              ))}
            </div>

            <div className="figures">
              {p.sections.map((block, i) => (
                <Section key={i} slug={p.slug} block={block} />
              ))}
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
