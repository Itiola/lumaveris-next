import { InsightsDirectory } from "@/components/InsightsDirectory";
import { topics } from "@/lib/content";
import { getInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

export const metadata = { title: "Insights" };

export default async function InsightsPage() {
  const insights = await getInsights();
  const availableTopics = Array.from(new Set(insights.flatMap(insight => insight.topics)));
  return <><section className="page-hero insights-hero"><div className="container"><h1>Insights</h1><p>Actionable perspectives on technology, strategy, and transformation — built to help leaders stay ahead.</p><a className="button" href="#insights">Explore Insights</a></div></section><section id="insights" className="section"><div className="container"><InsightsDirectory insights={insights} topics={availableTopics.length ? availableTopics : topics} /></div></section></>;
}
