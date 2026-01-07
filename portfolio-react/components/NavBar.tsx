"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hem" },
  { href: "/about", label: "Om mig" },
  { href: "/projects", label: "Projekt" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link className="nav-logo" href="/">
          André Alm portfolio
        </Link>

        <div className="nav-links">
          {links.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
