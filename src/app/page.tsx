import { experience, projects, skills, site } from "@/content/site";

export default function Home() {
  const visible = projects.filter((p) => p.listed);
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ProjectsList title="Projectos" items={featured} />
      {others.length > 0 && (
        <section className="section section--muted">
          <div className="container">
            <header className="section__header">
              <span className="t-label">Outros projectos</span>
            </header>
            <div className="projects">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} compact />
              ))}
            </div>
          </div>
        </section>
      )}
      <Skills />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__eyebrow reveal">
          <span className="hero__dot" />
          {site.location}
        </p>
        <h1 className="t-display hero__title reveal">
          Construo APIs e <span className="accent-underline">modelação de dados</span> que aguentam produção.
        </h1>
        <p className="hero__lead reveal">
          Trabalho na fronteira entre o modelo de dados e o sistema que o serve. TypeScript,
          Node.js, PostgreSQL e MySQL — e o SQL difícil que fica quando o ORM já não chega.
        </p>
        <div className="hero__cta reveal">
          <a href="#projectos" className="btn btn--primary">
            Ver projectos
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="about">
          <div className="about__text">
            <span className="t-label reveal">Sobre</span>
            <h2 className="t-h1 reveal" style={{ marginTop: 12 }}>
              O domínio vem antes da tecnologia.
            </h2>
            <div className="about__prose reveal">
              <p>
                O ponto de partida é sempre o mesmo: entender o domínio antes de escolher a
                stack. Num projecto de gestão de estágios, isso significou transformar regras de
                negócio sobre aulas, estagiários e avaliações num esquema relacional de 21
                entidades. Noutro, significou decidir o que vive em SQL e o que vive no ORM.
              </p>
              <p>
                Gosto de SQL mais do que a maioria dos programadores de backend admite
                publicamente. Views, stored procedures e índices compostos são ferramentas — e
                usá-las bem evita que a aplicação precise de truques para se compensar.
              </p>
            </div>
          </div>
          <aside className="about__card reveal">
            <span className="t-label">Educação</span>
            <p className="about__edu">
              Técnico em Informática — ITEL
              <span className="about__edu-period">2023 — 2027</span>
            </p>
            <span className="t-label" style={{ display: "block", marginTop: 24 }}>
              Estudo contínuo
            </span>
            <p className="about__edu">
              Arquitectura de software, performance e infraestrutura
              <span className="about__edu-period">Em curso</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Experiência</span>
          <h2 className="t-h1 reveal">Ciclo completo, do problema ao deploy.</h2>
        </header>

        <div className="timeline">
          {experience.map((entry) => (
            <article key={entry.title} className="timeline__item reveal">
              <div className="timeline__meta">
                <span className="timeline__period">{entry.period}</span>
              </div>
              <div className="timeline__body">
                <h3 className="t-h3">{entry.title}</h3>
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
  );
}

function ProjectsList({ title, items }: { title: string; items: typeof projects }) {
  if (items.length === 0) return null;
  return (
    <section className="section" id="projectos">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">{title}</span>
          <h2 className="t-h1 reveal">O que construí e porquê.</h2>
        </header>
        <div className="projects">
          {items.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  return (
    <article className={`project reveal${compact ? " project--compact" : ""}`}>
      <div className="project__head">
        <div>
          <h3 className="t-h3">{project.title}</h3>
          <p className="project__tagline">{project.tagline}</p>
        </div>
        <span className={`chip chip--${project.status}`}>{project.status}</span>
      </div>

      <p className="t-body">{project.description}</p>

      {!compact && (
        <ul className="bullets">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

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
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Demo →
            </a>
          )}
          {!project.links.repo && !project.links.demo && (
            <span className="project__soon">Repositório privado</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section section--muted" id="stack">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Stack</span>
          <h2 className="t-h1 reveal">O que uso todos os dias.</h2>
        </header>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.category} className="skill-group reveal">
              <h3 className="skill-group__title">{group.category}</h3>
              <div className="badges">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Contacto</span>
          <h2 className="t-h1 reveal">Vamos conversar.</h2>
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
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card reveal"
          >
            <span className="t-label">GitHub</span>
            <span className="contact__value">{site.handle}</span>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card reveal"
          >
            <span className="t-label">LinkedIn</span>
            <span className="contact__value">in/adolfofigueiredo28</span>
          </a>
        </div>
      </div>
    </section>
  );
}