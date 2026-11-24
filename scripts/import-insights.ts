import { getCliClient } from 'sanity/cli';
import { createReadStream } from 'node:fs';
import { insights, topics } from '../lib/content';

const client = getCliClient({ apiVersion: '2026-11-22' });
const existing = await client.fetch<Array<{_id: string; _type: string; title?: string; name?: string}>>('*[_type in ["article", "author", "topic"]]{_id,_type,title,name}');
if (existing.length) {
  console.log('Import stopped: existing content found. No changes were made.', JSON.stringify(existing));
  process.exit(1);
}
const topicId = (name: string) => 'lumaveris-topic-' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
const authorId = 'lumaveris-author';
const transaction = client.transaction();
for (const title of topics) transaction.createIfNotExists({ _id: topicId(title), _type: 'topic', title, slug: { _type: 'slug', current: topicId(title).replace('lumaveris-topic-', '') } });
transaction.createIfNotExists({ _id: authorId, _type: 'author', name: 'Lumaveris' });
for (const [index, article] of insights.entries()) {
  const asset = await client.assets.upload('image', createReadStream(process.cwd() + '/public' + article.image));
  const blocks = article.body.flatMap((section, i) => {
    const block = (style: string, text: string, suffix: string) => ({ _type: 'block', _key: `block-${i}-${suffix}`, style, markDefs: [], children: [{ _type: 'span', _key: `span-${i}-${suffix}`, marks: [], text }] });
    return section.heading ? [block('h2', section.heading, 'heading'), block('normal', section.text, 'text')] : [block('normal', section.text, 'text')];
  });
  transaction.createIfNotExists({ _id: 'lumaveris-article-' + article.slug, _type: 'article', title: article.title, slug: { _type: 'slug', current: article.slug }, excerpt: article.excerpt, coverImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }, author: { _type: 'reference', _ref: authorId }, topics: article.topics.map((title, i) => ({ _type: 'reference', _ref: topicId(title), _key: `topic-${i}` })), publishedAt: new Date(Date.now() - index * 1000).toISOString(), readingTime: article.readingTime, featured: true, body: blocks });
}
await transaction.commit();
console.log('Imported 4 topics, 1 author, and 3 published articles.');
