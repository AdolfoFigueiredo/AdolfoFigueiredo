import { site } from "@content/site";
import { skills } from "@content/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim",
  description: `${site.name} — developer backend. Abordagem ao domínio, modelação de dados e SQL.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section section--flush page-head">
        <div className="container">
          <header className="section__header">
            <span className="t-label reveal">Sobre mim</span>
            <h1 className="t-h1 reveal">O domínio vem antes da tecnologia.</h1>
            <p className="t-body section__lead reveal">
              Desenvolvedor backend e system architecture.
            </p>
          </header>

          <div className="about">
            <div className="about__text">
              <div className="about__prose reveal">
                <p>
                  A minha paixão por jogos e a curiosidade de saber como as coisas funcionam por debaixo dos panos, 
                  me levou ao caminho que sigo hoje. <br />
                  
                  Sou Técnico de Informática e Atuo fortemente como desenvolvedor de Software, 
                  
                  trabalho na fronteira entre o modelo de dados e o
                  sistema que o serve. NodeJS, NextJS, Java, PostgreSQL e MySQL - estás são algumas das ferramentas que me ajudam no dia-a-dia.  
                </p>
                <p>
                  O ponto de partida é sempre o mesmo: entender o domínio antes de escolher a
                  stack. Isso significa traduzir regras de negócio complexas em entidades e
                  relações bem definidas.
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
              <span className="t-label" style={{ display: "block", marginTop: 24 }}>
                Base
              </span>
              <p className="about__edu">{site.location}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--muted">
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

      <section className="section">
        <div className="container">
          <div className="cta reveal">
            <span className="t-label">Contacto</span>
            <h2 className="t-h2">Vamos conversar.</h2>
            <p className="t-body section__lead">
              Se tens um problema complexo, uma arquitectura para desenhar ou um SQL que não
              deixa de doer — o próximo passo é conversar.
            </p>
            <div className="cta__actions">
              <a href={`mailto:${site.email}`} className="btn btn--primary">
                Entre em contacto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
