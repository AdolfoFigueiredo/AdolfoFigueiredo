import Link from "next/link";
import { site } from "@/content/site";

const LINKS = [
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/timeline", label: "Timeline" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} Adolfo Figueiredo · Luanda, Angola
        </p>

        <nav className="footer__nav" aria-label="Footer">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="footer__note">
          GitHub{" "}
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            {site.handle}
          </a>
        </p>
      </div>
    </footer>
  );
}