import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#service-lines", label: "Service Lines" },
  { href: "/#service-types", label: "Service Types" },
  { href: "/#sectors", label: "Sectors" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/">Lumaveris</Link>
        <div className="nav-links">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
        <details className="mobile-menu"><summary>Menu</summary><div>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div></details>
      </nav>
    </header>
  );
}
