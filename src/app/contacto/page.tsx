import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contactos de ${site.name} — email, GitHub e LinkedIn.`,
};

export default function ContactPage() {
  return (
    <section className="section section--flush page-head">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Contacto</span>
          <h1 className="t-h1 reveal">Vamos conversar.</h1>
          <p className="t-body section__lead reveal">
            Aberto a oportunidades de backend. O GitHub é o melhor ponto de partida — é onde
            o código está.
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
  );
}