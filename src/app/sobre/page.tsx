import { site, skills } from "@/content/site";
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
          </header>

          <div className="about">
            <div className="about__text">
              <div className="about__prose reveal">
                <p>
                  Sou developer backend e trabalho na fronteira entre o modelo de dados e o
                  sistema que o serve. TypeScript, Node.js, PostgreSQL e MySQL — e o SQL
                  difícil que fica quando o ORM já não chega.
                </p>
                <p>
                  O ponto de partida é sempre o mesmo: entender o domínio antes de escolher a
                  stack. Num projecto de gestão de estágios, isso significou transformar regras
                  de negócio sobre aulas, estagiários e avaliações num esquema relacional de 21
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
    </>
  );
}