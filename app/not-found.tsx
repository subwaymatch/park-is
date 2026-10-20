import Link from "next/link";
import { Shell } from "@/components/shell";

export default function NotFound() {
  return (
    <Shell>
      <article className="article">
        <div className="cols">
          <h1 className="col-label title">Not found</h1>
          <div className="col-rest prose">
            <p>
              There’s no page at this address. <Link href="/" className="inline-link">See all projects</Link>.
            </p>
          </div>
        </div>
      </article>
    </Shell>
  );
}
