import Link from "next/link";
import { InsightCard } from "@/components/InsightCard";
import { getInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

const serviceLines = [
  ["Technology Strategy, Transformation & Architecture", "Align technology investments with business goals through strategies, roadmaps and scalable enterprise architecture."],
  ["Technology Governance, Risk & Assurance", "Establish governance, strengthen controls and manage technology risks with accountability."],
  ["Software Development", "Design and engineer secure, scalable digital solutions for enterprise needs."],
  ["Data, Analytics & AI", "Turn data into insight and apply practical AI to decisions, automation and growth."],
  ["Cloud & Infrastructure", "Modernise infrastructure and build reliable, secure technology foundations."],
  ["Cybersecurity", "Assess risks, strengthen controls and improve operational resilience."],
  ["Enterprise Platforms", "Advise on, implement, integrate and optimise business applications."],
  ["Project & Program Management", "Provide governance, planning and oversight for strategic initiatives."]
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
      <section id="sectors" className="section"><div className="container"><p className="eyebrow">Where we work</p><h2>Sectors</h2><div className="service-grid">{[["Primary", "Agriculture, mining, oil and gas, and natural resources."], ["Secondary", "Manufacturing, construction, and industrial enterprises."], ["Tertiary", "Finance, telecommunications, retail, healthcare, and professional services."], ["Public", "Government agencies and public institutions."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="insights" className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">Insights</p><h2>Ideas for leaders building what is next.</h2></div><Link className="text-link" href="/insights">View all insights</Link></div><div className="insights-grid">{insights.map(insight => <InsightCard key={insight.slug} insight={insight} />)}</div></div></section>
      <section id="contact" className="contact-section"><div className="container contact-grid"><div><p className="eyebrow">Let&apos;s talk</p><h2>Start a conversation about the challenge ahead.</h2><p>Tell us what you are working toward, and we will be in touch.</p></div><form className="contact-form" action="https://api.web3forms.com/submit" method="post"><input type="hidden" name="access_key" value="a4ceef3b-1b5a-4ab7-a5ec-034ba2ee4c72" /><input type="hidden" name="subject" value="New Contact Message - Lumaveris Website" /><label>Name<input required name="name" /></label><label>Email<input required name="email" type="email" /></label><label>How can we help?<textarea required name="message" rows={5} /></label><button className="button" type="submit">Send enquiry</button></form></div></section>
    </>
  );
}
