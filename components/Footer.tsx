import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><p className="brand">Lumaveris</p><p>Actionable strategies, world-class expertise, and data-driven solutions for a changing market.</p></div>
        <div><h2>Explore</h2><Link href="/about">About</Link><Link href="/#service-lines">Service lines</Link><Link href="/insights">Insights</Link></div>
        <div><h2>Connect</h2><Link href="/#contact">Schedule a consultation</Link><a href="mailto:info@lumaveris.com">info@lumaveris.com</a></div>
      </div>
      <div className="container footer-bottom">© 2026 Lumaveris. All rights reserved.</div>
    </footer>
  );
}
