import type { Metadata } from "next";
import { Shell } from "@/components/shell";

export const metadata: Metadata = {
  title: "About",
  description: "Hi, I’m Park from Seoul, South Korea.",
};

export default function About() {
  return (
    <Shell>
      <article className="article">
        <div className="cols">
          <h1 className="col-all title">Hi, I’m Park from Seoul, South Korea.</h1>
        </div>

        <div className="cols">
          <img
            src="/images/ye-joo-park.webp"
            alt="Ye Joo Park in a navy shirt, arms crossed"
            width={1100}
            height={1378}
            className="col-half-start portrait"
          />
        </div>
      </article>
    </Shell>
  );
}
