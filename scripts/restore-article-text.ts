import { getCliClient } from 'sanity/cli';
const client = getCliClient({ apiVersion: '2026-11-22' });
const block = (key: string, text: string, style = 'normal') => ({ _key: key, _type: 'block', style, markDefs: [], children: [{ _key: key + '-span', _type: 'span', marks: [], text }] });
const articles = await client.fetch<Array<{_id:string; _rev:string; _updatedAt:string; body:any[]}>>('*[_id in ["lumaveris-article-future-proof-your-business", "lumaveris-article-data-in-strategic-consulting", "lumaveris-article-it-governance-ceo-guide"]]{_id,_rev,_updatedAt,body}');
if (articles.length !== 3 || articles.some(a => a._updatedAt !== '2026-11-24T21:46:56Z')) throw new Error('Articles changed since import; no updates applied.');
const tx = client.transaction();
for (const article of articles) {
  const body = [...article.body];
  if (article._id.endsWith('future-proof-your-business')) {
    body.splice(1, 0, block('restored-intro', 'Business transformation is not a single technology programme. It is the ongoing ability to spot changes early, make sound choices, and turn those choices into meaningful action.'));
    const updates: Record<string,string> = { 'block-1-text': 'Review strategic priorities against market signals, customer needs, and operational evidence. A useful strategy is specific enough to guide action and flexible enough to adapt when circumstances change.', 'block-3-text': 'Modern platforms should make it easier to integrate, evolve, and scale. Prioritise architecture choices that create options rather than unnecessary dependency.', 'block-4-text': 'New tools create value only when teams can use them confidently. Make learning, adoption, and accountability part of the delivery plan from the beginning.' };
    for (const entry of body) if (updates[entry._key]) entry.children[0].text = updates[entry._key];
    body.push(block('restored-review-heading', 'Create a rhythm of review', 'h2'), block('restored-review-text', 'Small, regular review cycles help organisations learn from delivery, refine priorities, and redirect investment before problems become expensive.'));
  } else if (article._id.endsWith('data-in-strategic-consulting')) body.splice(1, 0, block('restored-intro', 'Strategic consulting benefits from evidence that reveals where an organisation is today and which choices are most likely to improve tomorrow’s outcomes.'));
  else body.splice(1, 0, block('restored-intro', 'Technology leadership is about creating enough clarity that people can act with confidence, risks are visible early, and change remains connected to organisational goals.'));
  tx.patch(article._id, p => p.ifRevisionId(article._rev).set({ body }));
}
await tx.commit();
console.log('Restored missing passages in all three articles.');
