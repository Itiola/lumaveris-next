import Link from "next/link";
import { InsightCard } from "@/components/InsightCard";
import { getInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

const serviceLines = [
  ["Strategy & Transformation", "Turn ambition into a focused plan for meaningful, measurable change."],
  ["Data & Analytics", "Build the insight and decision-making capability that leaders can trust."],
  ["Technology", "Shape resilient, scalable technology foundations that enable your organisation."],
  ["Implementation", "Move from strategy into delivery with disciplined execution and change adoption."]
];

export default async function HomePage() {
  const allInsights = await getInsights();
  const featured = allInsights.filter(insight => insight.featured);
  const insights = (featured.length ? featured : allInsights).slice(0, 3);
  return (
    <>
      <section className="hero"><div className="container"><p className="eyebrow">Lumaveris</p><h1>Clarity for the decisions that shape what comes next.</h1><p>We help organisations turn strategy, data, and technology into lasting advantage.</p><Link className="button" href="#contact">Schedule a consultation</Link></div></section>
      <section id="service-lines" className="section"><div className="container"><p className="eyebrow">What we do</p><h2>Expertise that moves from insight to impact.</h2><div className="service-grid">{serviceLines.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="service-types" className="section wash"><div className="container split"><div><p className="eyebrow">How we work</p><h2>Support shaped around the work ahead.</h2></div><div className="body-copy"><p>From focused advisory to end-to-end implementation and managed services, we bring the right level of expertise to the challenge.</p><ul><li>Advisory</li><li>Development</li><li>Implementation</li><li>Manage, Operate and Run</li><li>Consulting as a Service</li></ul></div></div></section>
      <section id="insights" className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Insights</p><h2>Ideas for leaders building what is next.</h2></div><Link className="text-link" href="/insights">View all insights</Link></div><div className="insights-grid">{insights.map(insight => <InsightCard key={insight.slug} insight={insight} />)}</div></div></section>
      <section id="contact" className="contact-section"><div className="container contact-grid"><div><p className="eyebrow">Let&apos;s talk</p><h2>Start a conversation about the challenge ahead.</h2><p>Tell us what you are working toward, and we will be in touch.</p></div><form className="contact-form" action="mailto:info@lumaveris.com" method="post" encType="text/plain"><label>Name<input required name="name" /></label><label>Email<input required name="email" type="email" /></label><label>How can we help?<textarea required name="message" rows={5} /></label><button className="button" type="submit">Send enquiry</button></form></div></section>
    </>
  );
}
