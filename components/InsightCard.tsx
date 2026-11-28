import Link from "next/link";
import type { Insight } from "@/lib/content";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="insight-card">
      <Link className="insight-image" href={"/insights/" + insight.slug} tabIndex={-1} aria-hidden="true"><img src={insight.image} alt="" loading="lazy" /></Link>
      <div className="insight-card-content">
        <div className="insight-meta"><span>{insight.topics[0] || 'Insight'}</span><span>{insight.readingTime}</span></div>
        <h2><Link href={"/insights/" + insight.slug}>{insight.title}</Link></h2>
        <p>{insight.excerpt}</p>
        <Link className="text-link insight-read" href={"/insights/" + insight.slug}>Read insight <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
