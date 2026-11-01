import type { Metadata } from "next";
import { timeline, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: `Projectos de ${site.name}.`,
};

export default function ProjectsPage() {
  const projects = timeline.filter((entry) => entry.kind === "project");

  return (
    <section className="section section--flush page-head">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Projectos</span>
          <h1 className="t-h1 reveal">O que construí e porquê.</h1>
          <p className="t-body section__lead reveal">
            Sistemas e ferramentas com ciclo completo, dados e deploy.
          </p>
        </header>

        <div className="projects">
          {projects.map((project) => (
            <article key={project.id} className="project reveal">
              <div className="project__head">
                <div>
                  <h3 className="t-h3">{project.title}</h3>
                  <p className="project__tagline">{project.context}</p>
                </div>
              </div>

              <p className="t-body">{project.summary}</p>

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
                <span className="project__role">{project.period}</span>
                <div className="project__links">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-arrow">
                      Código →
                    </a>
                  ) : (
                    <span className="project__soon">Repositório privado</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
