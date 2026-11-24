import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/content";
import { getInsight } from "@/lib/insights";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return insights.map(insight => ({ slug: insight.slug }));
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();
  return (
    <>
      <section className="article-hero" style={{ backgroundImage: "linear-gradient(90deg, rgba(5, 73, 71, .88), rgba(5, 73, 71, .5)), url(" + insight.image + ")" }}><div className="container"><p className="eyebrow">Lumaveris insight · {insight.readingTime}</p><h1>{insight.title}</h1><div className="topic-list">{insight.topics.map(topic => <span key={topic}>{topic}</span>)}</div></div></section>
      <article className="article-body"><Link className="text-link" href="/insights">All insights</Link>{insight.portableBody ? <PortableText value={insight.portableBody} /> : insight.body.map((section, index) => <section key={index}>{section.heading && <h2>{section.heading}</h2>}<p className={index === 0 ? "lead" : ""}>{section.text}</p></section>)}</article>
    </>
  );
}
