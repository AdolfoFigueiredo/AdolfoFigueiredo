import Link from "next/link";
import { site } from "@content/site";

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
            <Link href="#contacto" className="btn btn--primary">
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

      <section className="section section--muted" id="contacto">
        <div className="container">
          <header className="section__header">
            <span className="t-label reveal">Contacto</span>
            <h2 className="t-h1 reveal">Vamos conversar.</h2>
            <p className="t-body section__lead reveal">
              Aberto a oportunidades. O GitHub é o melhor ponto de partida — é onde o
              código está.
            </p>
          </header>

          <div className="contact">
            <a href={`mailto:${site.email}`} className="contact__card reveal">
              <span className="t-label">Email</span>
              <span className="contact__value">{site.email}</span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact__card reveal">
              <span className="t-label">GitHub</span>
              <span className="contact__value">{site.handle}</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact__card reveal">
              <span className="t-label">LinkedIn</span>
              <span className="contact__value">in/adolfofigueiredo28</span>
            </a>
            <div className="contact__card reveal">
              <span className="t-label">Localização</span>
              <span className="contact__value">{site.location}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}