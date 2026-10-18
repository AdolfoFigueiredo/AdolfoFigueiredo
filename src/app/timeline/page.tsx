import type { Metadata } from "next";
import { projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Timeline",
  description: `Linha do tempo de ${site.name}.`,
};

export default function TimelinePage() {
  const visible = projects.filter((p) => p.listed);

  return (
    <section className="section section--flush page-head">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Timeline</span>
          <h1 className="t-h1 reveal">Percurso.</h1>
          <p className="t-body section__lead reveal">
            Formação, projectos e marcos.
          </p>
        </header>

        <ol className="track">
          <li className="track__item reveal">
            <span className="track__marker" />
            <span className="track__date">2026 — 2027</span>
            <h2 className="t-h3">Técnico em Informática — ITEL</h2>
            <p className="t-body">
              Fundamentals de informática, redes e desenvolvimento de software. Aprendendo a
              construir e a documentar.
            </p>
          </li>

          <li className="track__item reveal">
            <span className="track__marker" />
            <span className="track__date">2026 · Out</span>
            <h2 className="t-h3">Prumo — Gestão de Estágios</h2>
            <p className="t-body">
              Projecto em equipa em contexto académico. Participei do ciclo completo: problema,
              modelação de dados, implementação full-stack e deploy. Duas semanas.
            </p>
          </li>

          {visible.map((p) => (
            <li key={p.slug} className="track__item reveal">
              <span className="track__marker" />
              <span className="track__date">{p.period}</span>
              <h2 className="t-h3">{p.title}</h2>
              <p className="t-body">{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}