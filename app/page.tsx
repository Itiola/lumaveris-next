import Link from "next/link";
import { InsightCard } from "@/components/InsightCard";
import { getInsights } from "@/lib/insights";

export const dynamic = "force-dynamic";

const serviceLines = [
  ["Technology Strategy, Transformation & Architecture", "We help organizations align technology investments with business goals and design scalable, integrated landscapes that support those goals. This includes strategies, roadmaps, transformation initiatives, and enterprise architecture that improve performance, agility, and long-term value."],
  ["Technology Governance, Risk & Assurance", "We help organizations align technology decisions with business objectives while managing risk with accountability. We establish governance frameworks, assess technology risks, strengthen controls, and provide assurance that supports resilience, compliance, and executive oversight."],
  ["Software Development", "Design and engineering of bespoke digital solutions aligned to enterprise requirements. We build scalable, secure, and maintainable systems across applications, platforms, and data ecosystems to address specific business needs."],
  ["Data, Analytics & AI", "We help organizations turn data into insight and apply practical AI where it creates measurable value. We design data solutions, reporting platforms, and analytics capabilities that support informed decisions, automation, operational efficiency, and growth."],
  ["Cloud & Infrastructure", "Cloud & Infrastructure services help organizations build and optimize reliable technology foundations. We support cloud adoption, infrastructure modernization, and operational resilience to enable secure and scalable business operations."],
  ["Cybersecurity", "Cybersecurity services help organizations protect their systems, data, and operations from cyber threats. We assess risks, strengthen security controls, improve resilience, and implement security strategies that support business objectives and regulatory requirements."],
  ["Enterprise Platforms", "Enterprise Platforms services help organizations maximize the value of their business applications and technology platforms. We provide advisory, implementation, integration, and optimization that improve operational efficiency and business performance."],
  ["Project & Program Management", "Project & Program Management services help organizations successfully deliver strategic initiatives. We provide governance, planning, and oversight to ensure projects and programs achieve their intended outcomes."]
];
const services = [
  ['Advisory', 'Senior-level strategic and technical guidance for complex decisions and transformation agendas. We bring structured thinking, external perspective, and domain depth to support executive teams in reducing uncertainty and improving decision quality.'],
  ['Development', 'Design and engineering of bespoke digital solutions aligned to enterprise requirements. We build scalable, secure, and maintainable systems across applications, platforms, and data ecosystems to address specific business needs.'],
  ['Implementation', 'We execute the implementation of enterprise-grade platforms such as ERP, CRM, and related core business systems. Our approach ensures seamless configuration, systems integration, data alignment, and enterprise-wide adoption, translating software capability into operational performance.'],
  ['Manage, Operate and Run (MOR)', 'End-to-end ownership of defined business or technology functions, delivered with accountability for performance, reliability, and continuous improvement. We ensure operational excellence, scalability, and governance across critical systems and processes.'],
  ['Consulting-as-a-Service (CaaS)', 'An on-demand engagement model providing continuous access to senior consulting and technical expertise. We integrate directly with client teams to support priority initiatives, accelerate decision-making, and drive execution without the constraints of traditional project-based consulting.']
];
const sectors = [
  ['Primary', 'We support organizations in the primary sector including agriculture, mining, oil and gas, and natural resource industries with solutions that improve operational efficiency, resource management, and data-driven decision-making across complex field operations and supply chains.'],
  ['Secondary', 'We work with manufacturing, construction, and industrial enterprises to enhance production efficiency, optimize processes, and implement digital systems that improve quality control, supply chain coordination, and overall operational performance.'],
  ['Tertiary', 'We partner with service-based organizations across finance, telecommunications, retail, healthcare, and professional services to drive customer experience improvement, digital transformation, and scalable operational systems that support growth and competitiveness.'],
  ['Public', 'We support government agencies and public institutions in improving service delivery, transparency, and operational efficiency through technology-enabled transformation, data-driven governance, and modernized digital infrastructure.']
];

export default async function HomePage() {
  const allInsights = await getInsights();
  const featured = allInsights.filter(insight => insight.featured);
  const insights = (featured.length ? featured : allInsights).slice(0, 3);
  return (
    <>
      <section className="hero" id="hero"><div className="container"><h1>Technology Consulting for Intelligent Business Transformation</h1><p>We integrate economics, strategy, and data as embedded intelligence layers to develop effective and efficient solutions for our clients.</p><Link className="button" href="#contact">Schedule a Consultation</Link></div></section>
      <section className="section" id="about"><div className="container"><h2>About Us</h2><p>At Lumaveris, we are deeply committed to solving complex problems with clarity and precision. Our consulting services are designed to deliver outcomes that matter, helping clients achieve measurable improvements in efficiency, cost, and growth. We define success by the tangible value we create and the impact our solutions have on our clients’ businesses.</p></div></section>
      <section id="service-lines" className="section"><div className="container"><h2>Capabilities</h2><div className="service-grid">{serviceLines.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="service-types" className="section wash"><div className="container"><h2>Services</h2><div className="service-grid">{services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="sectors" className="section"><div className="container"><h2>Sectors</h2><div className="service-grid">{sectors.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="insights" className="section"><div className="container"><div className="section-heading"><h2>Insights</h2><Link className="text-link" href="/insights">View all insights</Link></div><div className="insights-grid">{insights.map(insight => <InsightCard key={insight.slug} insight={insight} />)}</div></div></section>
      <section id="contact" className="contact-section"><div className="container contact-grid"><div><h2>Let’s Talk</h2><p>We’re here to help you achieve measurable impact. Fill out the form and our team will reach out promptly.</p><p>info@lumaveris.com<br />Lagos, Nigeria</p></div><form className="contact-form" action="https://api.web3forms.com/submit" method="post"><input type="hidden" name="access_key" value="a4ceef3b-1b5a-4ab7-a5ec-034ba2ee4c72" /><input type="hidden" name="subject" value="New Contact Message - Lumaveris Website" /><label>Full Name<input required name="name" /></label><label>Email Address<input required name="email" type="email" /></label><label>Message<textarea required name="message" rows={5} /></label><button className="button" type="submit">Send Message</button></form></div></section>
    </>
  );
}
