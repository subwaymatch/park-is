import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { LoopVideo } from "@/components/loop-video";
import { SiteHeader } from "@/components/site-header";
import { FIGURES, getProject, media, projects, yearText } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const image = { url: media(p.slug).figure("01"), width: 1920, height: 1080, alt: p.name };
  return {
    title: p.name,
    description: p.tagline,
    // A page's openGraph replaces the layout's, so repeat the site-wide fields.
    openGraph: { siteName: "Ye Joo Park", type: "website", locale: "en_US", title: p.name, description: p.tagline, images: [image] },
    twitter: { card: "summary_large_image", images: [image.url] },
  };
}

function Paragraphs({ items }: { items: string[] }) {
  return items.map((text) => <p key={text}>{text}</p>);
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const m = media(p.slug);
  const fig = FIGURES.map((f, i) => ({ ...f, src: m.figure(f.n), caption: p.captions[i] }));
  const img = (f: (typeof fig)[number]) => (
    <img src={f.src} alt={f.caption} width={f.width} height={f.height} loading="lazy" decoding="async" className="media-fill" />
  );

  return (
    <>
      <section className="hero">
        <LoopVideo src={m.loop} poster={m.loopPoster} label={p.name} eager />
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
                  <Paragraphs items={p.body} />
                </div>
              </div>
            </div>

            <div className="figures">
              <figure className="cols">
                <div className="col-all frame ratio-16-9">{img(fig[0])}</div>
                <figcaption className="col-rest">{fig[0].caption}</figcaption>
              </figure>

              <div className="cols">
                <span className="col-label muted">Process</span>
                <div className="col-rest prose">
                  <Paragraphs items={p.process} />
                </div>
              </div>

              <div className="cols">
                {[fig[1], fig[2]].map((f, i) => (
                  <figure key={f.n} className={i === 0 ? "col-half-start stack" : "col-half-end stack"}>
                    <div className="frame ratio-4-5">{img(f)}</div>
                    <figcaption>{f.caption}</figcaption>
                  </figure>
                ))}
              </div>

              <figure className="cols figure-aside">
                <figcaption className="col-label">{fig[3].caption}</figcaption>
                <div className="col-rest frame ratio-4-3">{img(fig[3])}</div>
              </figure>

              <figure className="cols">
                <div className="col-all frame ratio-16-9 is-video">
                  <video
                    src={m.video}
                    poster={m.videoPoster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${p.name} walkthrough`}
                    className="media-fill"
                  />
                </div>
                <figcaption className="col-rest">{p.videoCaption}</figcaption>
              </figure>

              <div className="cols">
                <div className="col-rest prose">
                  <Paragraphs items={p.outcome} />
                </div>
              </div>

              <figure className="cols">
                <div className="col-all frame ratio-16-9">{img(fig[4])}</div>
                <figcaption className="col-rest">{fig[4].caption}</figcaption>
              </figure>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
