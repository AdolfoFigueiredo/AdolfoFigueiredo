import type { Metadata } from "next";
import { timeline, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experiência",
  description: `Experiência de ${site.name}.`,
};

export default function ExperiencePage() {
  const entries = timeline.filter((entry) => entry.kind !== "project");

  return (
    <>
      <section className="section section--flush page-head">
        <div className="container">
          <header className="section__header">
            <span className="t-label reveal">Experiência</span>
            <h1 className="t-h1 reveal">O ciclo completo, do problema ao deploy.</h1>
            <p className="t-body section__lead reveal">
              Startup, contexto editorial e formação — o que construí e onde.
            </p>
          </header>

          <ol className="track">
            {entries.map((entry, index) => (
              <li
                key={entry.id}
                className={`track__item reveal${index === 0 ? " track__item--latest" : ""}`}
              >
                <span className="track__marker" />
                <span className="track__date">{entry.period}</span>
                <h2 className="t-h3">{entry.title}</h2>
                <p className="t-body">{entry.context}</p>
                <p className="t-body">{entry.summary}</p>
                <ul className="bullets">
                  {entry.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="badges">
                  {entry.stack.map((s) => (
                    <span key={s} className="badge">
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
