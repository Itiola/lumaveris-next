import { InsightsDirectory } from "@/components/InsightsDirectory";
import { topics } from "@/lib/content";
import { getInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

export const metadata = { title: "Insights" };

export default async function InsightsPage() {
  const insights = await getInsights();
  const availableTopics = Array.from(new Set(insights.flatMap(insight => insight.topics)));
  return <><section className="page-hero insights-hero"><div className="container"><p className="eyebrow">Lumaveris Insights</p><h1>Perspectives on strategy, transformation, data, and technology.</h1><p>Actionable thinking for leaders shaping what comes next.</p></div></section><section className="section"><div className="container"><InsightsDirectory insights={insights} topics={availableTopics.length ? availableTopics : topics} /></div></section></>;
}
