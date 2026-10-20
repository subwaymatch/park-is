import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@/components/icons";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "About",
  description: "Ye Joo Park teaches data and business analytics at the University of Illinois and likes writing code.",
};

const external = { target: "_blank", rel: "noopener" } as const;

export default function About() {
  return (
    <Shell>
      <article className="article">
        <div className="cols">
          <h1 className="col-label title">Ye Joo Park</h1>
          <div className="col-rest prose">
            <p>
              Hi, I’m Park from Seoul, South Korea. I like{" "}
              <a href="https://github.com/subwaymatch" className="inline-link" {...external}>
                writing code
              </a>
              .
            </p>
            <p>
              I’m currently working as an Instructor of Accountancy at the University of Illinois. I teach Data/Business
              Analytics to business major/minors, accounting students, and iMBA learners using Python, R, SQL and
              Tableau. I am also serving as an Associate Director at{" "}
              <a href="https://www.centerforanalytics.giesbusiness.illinois.edu/" className="inline-link" {...external}>
                the University of Illinois-Deloitte Foundation Center for Business Analytics
              </a>
              .
            </p>
          </div>
        </div>

        <div className="cols">
          <div className="col-half-start frame ratio-portrait">
            <img src="/images/ye-joo-park.jpg" alt="Ye Joo Park" width={700} height={320} className="media-fill" />
          </div>
        </div>

        <div className="rows">
          <div className="row">
            <span className="col-label muted">Currently</span>
            <div className="col-rest stack-tight">
              <span>Instructor of Accountancy, University of Illinois</span>
              <span>Associate Director, University of Illinois-Deloitte Foundation Center for Business Analytics</span>
            </div>
          </div>
          <div className="row">
            <span className="col-label muted">Teaching</span>
            <span className="col-rest">Data/Business Analytics with Python, R, SQL and Tableau</span>
          </div>
          <div className="row">
            <span className="col-label muted">Languages</span>
            <span className="col-rest">JavaScript, TypeScript, Python, R, Java, C#, C, C++, PHP, SQL, NoSQL (Mongo, Firebase)</span>
          </div>
          <div className="row">
            <span className="col-label muted">Elsewhere</span>
            <div className="col-rest links">
              <a href="https://github.com/subwaymatch" {...external}>
                GitHub
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Shell>
  );
}
