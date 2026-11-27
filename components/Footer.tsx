import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><p className="brand">Lumaveris</p><p>We deliver actionable strategies, world-class expertise, and data-driven solutions to help you thrive in a rapidly changing market.</p></div>
        <div><h2>Company</h2><Link href="/#service-lines">Capabilities</Link><Link href="/#service-types">Services</Link><Link href="/#sectors">Sectors</Link><Link href="/insights">Insights</Link><Link href="/#contact">Contact</Link></div>
        <div><h2>Services</h2><Link href="/#service-types">Advisory</Link><Link href="/#service-types">Development</Link><Link href="/#service-types">Implementation</Link><Link href="/#service-types">Manage, Operate and Run (MOR)</Link><Link href="/#service-types">Consulting-as-a-Service (CaaS)</Link></div>
      </div>
      <div className="container footer-bottom">© 2026 Lumaveris. All rights reserved.</div>
      <a className="footer-return" href="#top">Back to top ↑</a>
    </footer>
  );
}
