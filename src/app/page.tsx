import Link from "next/link";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero hero--full">
        <div className="hero__grid" aria-hidden="true" />
        <div className="container">
          <p className="hero__eyebrow reveal">{site.greeting}</p>
          <h1 className="t-display hero__name reveal">{site.name}</h1>
          <p className="hero__role reveal">{site.tagline}</p>
          <p className="hero__intro reveal">{site.intro}</p>
          <div className="hero__cta reveal">
            <Link href="/contacto" className="btn btn--primary">
              Entre em contacto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/experiencia" className="btn btn--ghost">
              Ver Experiência
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}