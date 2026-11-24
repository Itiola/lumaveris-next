import { insights as localInsights, type Insight } from "@/lib/content";
import { sanityClient } from "@/lib/sanity";

const insightFields = [
  '{',
  '"slug": slug.current, title, excerpt,',
  '"topics": topics[]->title,',
  '"image": coverImage.asset->url,',
  '"readingTime": coalesce(readingTime, "5 min read"),',
  '"body": body[]{',
  '_type == "block" => {',
  '"heading": select(style == "h2" => pt::text(@), null),',
  '"text": pt::text(@)',
  '}',
  '}',
  '}'
].join(" ");

const allInsightsQuery = '*[_type == "article" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) ' + insightFields;
const insightBySlugQuery = '*[_type == "article" && slug.current == $slug][0] ' + insightFields;

function usableInsight(value: Partial<Insight>): value is Insight {
  return Boolean(value.slug && value.title && value.excerpt && value.image && value.topics && value.body);
}

export async function getInsights(): Promise<Insight[]> {
  if (!sanityClient) return localInsights;
  try {
    const results = await sanityClient.fetch<Partial<Insight>[]>(allInsightsQuery);
    return results.filter(usableInsight);
  } catch {
    return localInsights;
  }
}

export async function getInsight(slug: string): Promise<Insight | undefined> {
  if (!sanityClient) return localInsights.find(insight => insight.slug === slug);
  try {
    const result = await sanityClient.fetch<Partial<Insight> | null>(insightBySlugQuery, { slug });
    return result && usableInsight(result) ? result : undefined;
  } catch {
    return localInsights.find(insight => insight.slug === slug);
  }
}
