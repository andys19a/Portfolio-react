import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link className="nav-logo" href="/">
          <span className="nav-logo-text">André Alm</span>
        </Link>
      </nav>
    </header>
  );
}
