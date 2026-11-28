import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/content";
import { getInsight, getInsights } from "@/lib/insights";
import { InsightCard } from "@/components/InsightCard";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return insights.map(insight => ({ slug: insight.slug }));
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();
  const related = (await getInsights()).filter(item => item.slug !== slug && item.topics.some(topic => insight.topics.includes(topic))).slice(0, 2);
  return (
    <>
      <section className="article-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(7, 37, 35, .92), rgba(5, 73, 71, .48)), url(" + insight.image + ")" }}><div className="container"><Link className="article-breadcrumb" href="/insights">Insights</Link><p className="eyebrow">Lumaveris insight · {insight.readingTime}</p><h1>{insight.title}</h1><p className="article-deck">{insight.excerpt}</p><div className="topic-list">{insight.topics.map(topic => <span key={topic}>{topic}</span>)}</div></div></section>
      <article className="article-body"><div className="article-body-label">Perspective <span> / </span> {insight.readingTime}</div><div className="article-prose">{insight.portableBody ? <PortableText value={insight.portableBody} /> : insight.body.map((section, index) => <section key={index}>{section.heading && <h2>{section.heading}</h2>}<p className={index === 0 ? "lead" : ""}>{section.text}</p></section>)}</div><div className="article-end"><span>Continue exploring</span><Link className="text-link" href="/insights">Browse all insights</Link></div></article>
      {related.length > 0 && <section className="related-insights"><div className="container"><p className="insight-kicker">More perspectives</p><h2>Related insights</h2><div className="insights-grid">{related.map(item => <InsightCard key={item.slug} insight={item} />)}</div></div></section>}
    </>
  );
}
