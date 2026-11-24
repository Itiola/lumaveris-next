import Link from "next/link";
import type { Insight } from "@/lib/content";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="insight-card">
      <img src={insight.image} alt="" />
      <div className="insight-card-content">
        <div className="topic-list">{insight.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
        <h2><Link href={"/insights/" + insight.slug}>{insight.title}</Link></h2>
        <p>{insight.excerpt}</p>
        <Link className="text-link" href={"/insights/" + insight.slug}>Read insight</Link>
      </div>
    </article>
  );
}
