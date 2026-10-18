import type { Metadata } from "next";
import { experience, projects, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experiência",
  description: `Experiência e projectos de ${site.name}.`,
};

export default function ExperiencePage() {
  const visible = projects.filter((p) => p.listed);

  return (
    <>
      <section className="section section--flush page-head">
        <div className="container">
          <header className="section__header">
            <span className="t-label reveal">Experiência</span>
            <h1 className="t-h1 reveal">Ciclo completo, do problema ao deploy.</h1>
            <p className="t-body section__lead reveal">
              Trabalhei no ciclo completo de cada projecto: levantamento do problema, modelação
              de dados, implementação e deploy.
            </p>
          </header>

          <div className="timeline">
            {experience.map((entry) => (
              <article key={entry.title} className="timeline__item reveal">
                <div className="timeline__meta">
                  <span className="timeline__period">{entry.period}</span>
                </div>
                <div className="timeline__body">
                  <h2 className="t-h3">{entry.title}</h2>
                  <p className="timeline__company">{entry.company}</p>
                  <p className="timeline__context">{entry.context}</p>
                  <p className="t-body" style={{ marginTop: 16 }}>
                    {entry.summary}
                  </p>
                  <ul className="bullets">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="badges" style={{ marginTop: 20 }}>
                    {entry.stack.map((s) => (
                      <span key={s} className="badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="projectos">
        <div className="container">
          <header className="section__header">
            <span className="t-label reveal">Projectos</span>
            <h2 className="t-h1 reveal">O que construí e porquê.</h2>
          </header>
          <div className="projects">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project reveal">
      <div className="project__head">
        <div>
          <h3 className="t-h3">{project.title}</h3>
          <p className="project__tagline">{project.tagline}</p>
        </div>
        <span className={`chip chip--${project.status}`}>{project.status}</span>
      </div>

      <p className="t-body">{project.description}</p>

      <ul className="bullets">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="badges">
        {project.stack.map((s) => (
          <span key={s} className="badge">
            {s}
          </span>
        ))}
      </div>

      <div className="project__foot">
        <span className="project__role">
          {project.role === "solo" ? "Projecto solo" : "Trabalho em equipa"} · {project.period}
        </span>
        <div className="project__links">
          {project.links.repo && (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Código →
            </a>
          )}
          {!project.links.repo && <span className="project__soon">Repositório privado</span>}
        </div>
      </div>
    </article>
  );
}