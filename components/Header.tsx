"use client";

import Link from "next/link";
import { useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#service-lines", label: "Capabilities" },
  { href: "/#service-types", label: "Services" },
  { href: "/#sectors", label: "Sectors" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" }
];

export function Header() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Lumaveris Home"><svg viewBox="0 0 600 200" width="184" height="62" aria-hidden="true"><text x="0" y="150" fontFamily="Montserrat, sans-serif" fontSize="100" fill="#008080">Luma</text><text x="250" y="150" fontFamily="Montserrat, sans-serif" fontSize="100" fill="#4F4F4F">veris</text></svg></Link>
        <div className="nav-links">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
        <details className="mobile-menu" ref={mobileMenu}><summary aria-label="Toggle navigation"><span aria-hidden="true">☰</span></summary><div>{links.map(link => <Link key={link.href} href={link.href} onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }}>{link.label}</Link>)}</div></details>
      </nav>
    </header>
  );
}
