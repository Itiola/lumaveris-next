"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#service-lines", label: "Capabilities" },
  { href: "/#service-types", label: "Services" },
  { href: "/#sectors", label: "Sectors" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', close); };
  }, [open]);
  return (
    <><header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <button ref={button} type="button" className={'original-menu-button' + (open ? ' is-open' : '')} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="original-mobile-menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <Link className="brand" href="/" aria-label="Lumaveris Home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="200" height="70" aria-hidden="true" fontWeight="400"><text x="0" y="150" fontFamily="Montserrat, sans-serif" fontSize="100" fill="#008080">Luma</text><text x="250" y="150" fontFamily="Montserrat, sans-serif" fontSize="100" fill="#4F4F4F">veris</text></svg></Link>
        <div className="nav-links">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
      </nav>
    </header>
    <nav id="original-mobile-menu" className={'original-mobile-menu' + (open ? ' is-open' : '')} aria-label="Mobile navigation" inert={!open}><ul>{links.map(link => <li key={link.href}><Link href={link.href} onClick={() => setOpen(false)}>{link.label}</Link></li>)}</ul></nav></>
  );
}
