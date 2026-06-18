/* =========================================================
   i18n — Translations dictionary
   Languages: en (default), pt, es, it
   ========================================================= */

const I18N = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.architecture": "Architecture",
    "nav.contact": "Contact",

    // Hero
    "hero.status": "Available for new opportunities",
    "hero.role": "Software Engineer",
    "hero.role.sep1": "Backend Development",
    "hero.role.sep2": "Software Architecture",
    "hero.role.sep3": "Database Design",
    "hero.intro":
      "I design and build resilient backend systems, scalable architectures, and well-modeled databases. Focused on writing software that is maintainable, observable, and built to last.",
    "hero.cta.primary": "View Projects",
    "hero.cta.secondary": "Get in Touch",

    // About
    "about.eyebrow": "01 — About",
    "about.title": "Engineering with intent.",
    "about.summary.title": "Professional Summary",
    "about.summary.p1":
      "Software engineer with a strong focus on backend systems, software architecture, and database design. I enjoy turning ambiguous problems into clear, maintainable solutions — from domain modeling and API design to infrastructure and observability.",
    "about.summary.p2":
      "My work centers on building systems that are reliable under load, easy to reason about, and simple to evolve. I care deeply about clean abstractions, thoughtful trade-offs, and shipping software that teams can confidently own.",
    "about.summary.h1": "Backend-first engineering with a systems mindset",
    "about.summary.h2": "Domain-driven design and clean architecture",
    "about.summary.h3": "Relational and NoSQL database modeling",
    "about.summary.h4": "Scalable, observable, production-grade systems",
    "about.edu.title": "Education",
    "about.edu.period1": "2021 — 2025",
    "about.edu.badge1": "Degree",
    "about.edu.degree": "Bachelor's in Computer Science",
    "about.edu.degree.desc":
      "Focus on distributed systems, algorithms, and database theory.",
    "about.edu.period2": "Continuous",
    "about.edu.badge2": "Self-directed",
    "about.edu.continuous": "Advanced Backend & Architecture",
    "about.edu.continuous.desc":
      "Ongoing study of system design, performance engineering, and infrastructure.",
    "about.lang.title": "Languages",
    "about.lang.pt": "Portuguese",
    "about.lang.pt.level": "Native",
    "about.lang.en": "English",
    "about.lang.en.level": "Fluent",
    "about.lang.es": "Spanish",
    "about.lang.es.level": "Conversational",
    "about.lang.it": "Italian",
    "about.lang.it.level": "Basic",

    // Skills
    "skills.eyebrow": "02 — Technical Skills",
    "skills.title": "Tools of the trade.",
    "skills.languages": "Languages",
    "skills.backend": "Backend & APIs",
    "skills.databases": "Databases",
    "skills.architecture": "Architecture",
    "skills.infra": "Infrastructure",
    "skills.tools": "Tools & Practices",

    // Projects
    "projects.eyebrow": "03 — Featured Projects",
    "projects.title": "Selected work.",
    "projects.p1.tag": "Backend · Architecture",
    "projects.p1.desc":
      "A modern library management platform designed around a clean domain model. Built to handle complex cataloging, lending rules, and multi-tenant operations with a focus on data integrity and long-term maintainability.",
    "projects.p1.tech.title": "Technical Highlights",
    "projects.p1.tech.1": "Domain-driven design with bounded contexts",
    "projects.p1.tech.2": "Event-sourced audit trail for lending operations",
    "projects.p1.tech.3": "Idempotent APIs and optimistic concurrency control",
    "projects.p1.tech.4": "Comprehensive test coverage with contract testing",
    "projects.p1.arch.title": "Architecture Highlights",
    "projects.p1.arch.1": "Hexagonal architecture isolating business rules",
    "projects.p1.arch.2": "Async event bus for cross-service communication",
    "projects.p1.arch.3": "Read/write model separation (CQRS)",
    "projects.p1.arch.4":
      "Containerized deployment with reproducible environments",
    "projects.p2.tag": "Identity · Platform",
    "projects.p2.desc":
      "An identity and authentication platform powering secure access across multiple products. Designed as a centralized identity layer with OAuth2/OIDC support, MFA, and fine-grained authorization.",
    "projects.p2.tech.title": "Technical Highlights",
    "projects.p2.tech.1": "OAuth 2.0 and OpenID Connect implementation",
    "projects.p2.tech.2": "Multi-factor authentication (TOTP, WebAuthn)",
    "projects.p2.tech.3": "Short-lived JWTs with secure refresh token rotation",
    "projects.p2.tech.4": "Rate limiting, anomaly detection, and audit logging",

    // Architecture
    "arch.eyebrow": "04 — Architecture",
    "arch.title": "How I think about systems.",
    "arch.mono.title": "Monorepo Architecture",
    "arch.mono.desc":
      "A single source of truth for services, shared libraries, and infrastructure code. Enables atomic changes, consistent tooling, and fast iteration across teams.",
    "arch.mono.1": "Workspaces with isolated dependency graphs",
    "arch.mono.2": "Shared contracts and generated clients",
    "arch.mono.3": "Affected-only CI for fast feedback loops",
    "arch.auth.title": "Authentication Flow",
    "arch.auth.desc":
      "Secure, stateless authentication with short-lived access tokens, rotating refresh tokens, and strong session controls. Designed for both human users and service-to-service calls.",
    "arch.auth.1": "PKCE-based OAuth2 flows",
    "arch.auth.2": "Device-bound sessions and MFA enforcement",
    "arch.auth.3": "Centralized revocation and audit trail",
    "arch.db.title": "Database Design",
    "arch.db.desc":
      "Carefully normalized schemas where it matters, pragmatic denormalization for read paths. Strong typing, migrations as code, and indexes driven by real query patterns.",
    "arch.db.1": "Versioned migrations with rollback safety",
    "arch.db.2": "Soft deletes, audit columns, and tenant isolation",
    "arch.db.3": "Read replicas and caching layers for scale",
    "arch.infra.title": "Infrastructure Overview",
    "arch.infra.desc":
      "Infrastructure as code, immutable deployments, and observability baked in from day one. Systems designed to fail gracefully and recover automatically.",
    "arch.infra.1": "Declarative provisioning with Terraform",
    "arch.infra.2": "Structured logs, metrics, and distributed tracing",
    "arch.infra.3": "Blue/green and canary release strategies",

    // Contact
    "contact.eyebrow": "05 — Contact",
    "contact.title": "Let's build something solid.",
    "contact.intro":
      "Open to conversations about backend engineering, architecture roles, and interesting technical problems. The best way to reach me is below.",
    "contact.email.label": "Email",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",

    // Footer
    "footer.copy": "Designed by Adolfo Figueiredo © 2026",
    "footer.meta": "Built with HTML & CSS — no frameworks, no noise.",
  },

  pt: {
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.architecture": "Arquitetura",
    "nav.contact": "Contato",

    "hero.status": "Disponível para novas oportunidades",
    "hero.role": "Engenheiro de Software",
    "hero.role.sep1": "Desenvolvimento Backend",
    "hero.role.sep2": "Arquitetura de Software",
    "hero.role.sep3": "Design de Banco de Dados",
    "hero.intro":
      "Projetou e construo sistemas backend resilientes, arquiteturas escaláveis e bancos de dados bem modelados. Focado em escrever software sustentável, observável e feito para durar.",
    "hero.cta.primary": "Ver Projetos",
    "hero.cta.secondary": "Entrar em Contato",

    "about.eyebrow": "01 — Sobre",
    "about.title": "Engenharia com propósito.",
    "about.summary.title": "Resumo Profissional",
    "about.summary.p1":
      "Engenheiro de software com forte foco em sistemas backend, arquitetura de software e design de banco de dados. Gosto de transformar problemas ambíguos em soluções claras e sustentáveis — da modelagem de domínio e design de APIs até infraestrutura e observabilidade.",
    "about.summary.p2":
      "Meu trabalho se concentra em construir sistemas confiáveis sob carga, fáceis de entender e simples de evoluir. Me importo profundamente com abstrações limpas, trade-offs bem pensados e entregar software que times possam assumir com confiança.",
    "about.summary.h1": "Engenharia backend-first com mentalidade de sistemas",
    "about.summary.h2": "Domain-driven design e arquitetura limpa",
    "about.summary.h3": "Modelagem de bancos relacionais e NoSQL",
    "about.summary.h4": "Sistemas escaláveis, observáveis e de produção",
    "about.edu.title": "Formação",
    "about.edu.period1": "2021 — 2025",
    "about.edu.badge1": "Graduação",
    "about.edu.degree": "Bacharelado em Ciência da Computação",
    "about.edu.degree.desc":
      "Foco em sistemas distribuídos, algoritmos e teoria de banco de dados.",
    "about.edu.period2": "Contínuo",
    "about.edu.badge2": "Autodidata",
    "about.edu.continuous": "Backend & Arquitetura Avançada",
    "about.edu.continuous.desc":
      "Estudo contínuo de design de sistemas, engenharia de performance e infraestrutura.",
    "about.lang.title": "Idiomas",
    "about.lang.pt": "Português",
    "about.lang.pt.level": "Nativo",
    "about.lang.en": "Inglês",
    "about.lang.en.level": "Fluente",
    "about.lang.es": "Espanhol",
    "about.lang.es.level": "Conversação",
    "about.lang.it": "Italiano",
    "about.lang.it.level": "Básico",

    "skills.eyebrow": "02 — Habilidades Técnicas",
    "skills.title": "Ferramentas do ofício.",
    "skills.languages": "Linguagens",
    "skills.backend": "Backend & APIs",
    "skills.databases": "Bancos de Dados",
    "skills.architecture": "Arquitetura",
    "skills.infra": "Infraestrutura",
    "skills.tools": "Ferramentas & Práticas",

    "projects.eyebrow": "03 — Projetos em Destaque",
    "projects.title": "Trabalhos selecionados.",
    "projects.p1.tag": "Backend · Arquitetura",
    "projects.p1.desc":
      "Uma plataforma moderna de gestão de bibliotecas projetada em torno de um modelo de domínio limpo. Construída para lidar com catalogação complexa, regras de empréstimo e operações multi-tenant com foco em integridade de dados e manutenção de longo prazo.",
    "projects.p1.tech.title": "Destaques Técnicos",
    "projects.p1.tech.1": "Domain-driven design com contextos delimitados",
    "projects.p1.tech.2":
      "Trilha de auditoria event-sourced para operações de empréstimo",
    "projects.p1.tech.3":
      "APIs idempotentes e controle de concorrência otimista",
    "projects.p1.tech.4": "Cobertura de testes abrangente com contract testing",
    "projects.p1.arch.title": "Destaques de Arquitetura",
    "projects.p1.arch.1": "Arquitetura hexagonal isolando regras de negócio",
    "projects.p1.arch.2":
      "Barramento de eventos assíncrono para comunicação entre serviços",
    "projects.p1.arch.3": "Separação de modelos de leitura/escrita (CQRS)",
    "projects.p1.arch.4": "Deploy containerizado com ambientes reproduzíveis",
    "projects.p2.tag": "Identidade · Plataforma",
    "projects.p2.desc":
      "Uma plataforma de identidade e autenticação que fornece acesso seguro a múltiplos produtos. Projetada como uma camada centralizada de identidade com suporte a OAuth2/OIDC, MFA e autorização granular.",
    "projects.p2.tech.title": "Destaques Técnicos",
    "projects.p2.tech.1": "Implementação de OAuth 2.0 e OpenID Connect",
    "projects.p2.tech.2": "Autenticação multi-fator (TOTP, WebAuthn)",
    "projects.p2.tech.3":
      "JWTs de curta duração com rotação segura de refresh tokens",
    "projects.p2.tech.4":
      "Rate limiting, detecção de anomalias e logs de auditoria",

    "arch.eyebrow": "04 — Arquitetura",
    "arch.title": "Como penso sobre sistemas.",
    "arch.mono.title": "Arquitetura Monorepo",
    "arch.mono.desc":
      "Uma única fonte de verdade para serviços, bibliotecas compartilhadas e código de infraestrutura. Permite mudanças atômicas, ferramentas consistentes e iteração rápida entre times.",
    "arch.mono.1": "Workspaces com grafos de dependência isolados",
    "arch.mono.2": "Contratos compartilhados e clientes gerados",
    "arch.mono.3": "CI apenas para afetados, com feedback rápido",
    "arch.auth.title": "Fluxo de Autenticação",
    "arch.auth.desc":
      "Autenticação segura e stateless com tokens de acesso de curta duração, rotação de refresh tokens e controles de sessão fortes. Projetado para usuários humanos e chamadas serviço-a-serviço.",
    "arch.auth.1": "Fluxos OAuth2 baseados em PKCE",
    "arch.auth.2": "Sessões vinculadas ao dispositivo e MFA obrigatório",
    "arch.auth.3": "Revogação centralizada e trilha de auditoria",
    "arch.db.title": "Design de Banco de Dados",
    "arch.db.desc":
      "Schemas cuidadosamente normalizados onde importa, desnormalização pragmática para caminhos de leitura. Tipagem forte, migrations como código e índices guiados por padrões reais de consulta.",
    "arch.db.1": "Migrations versionadas com segurança de rollback",
    "arch.db.2": "Soft deletes, colunas de auditoria e isolamento de tenants",
    "arch.db.3": "Réplicas de leitura e camadas de cache para escala",
    "arch.infra.title": "Visão Geral da Infraestrutura",
    "arch.infra.desc":
      "Infraestrutura como código, deploys imutáveis e observabilidade desde o primeiro dia. Sistemas projetados para falhar graciosamente e se recuperar automaticamente.",
    "arch.infra.1": "Provisionamento declarativo com Terraform",
    "arch.infra.2": "Logs estruturados, métricas e rastreamento distribuído",
    "arch.infra.3": "Estratégias de release blue/green e canary",

    "contact.eyebrow": "05 — Contato",
    "contact.title": "Vamos construir algo sólido.",
    "contact.intro":
      "Aberto a conversas sobre engenharia backend, cargos de arquitetura e problemas técnicos interessantes. A melhor forma de me encontrar está abaixo.",
    "contact.email.label": "Email",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",

    "footer.copy": "Desenhado por Adolfo Figueiredo © 2026",
    "footer.meta": "Construído com HTML e CSS — sem frameworks, sem ruído.",
  },

  es: {
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.architecture": "Arquitectura",
    "nav.contact": "Contacto",

    "hero.status": "Disponible para nuevas oportunidades",
    "hero.role": "Ingeniero de Software",
    "hero.role.sep1": "Desarrollo Backend",
    "hero.role.sep2": "Arquitectura de Software",
    "hero.role.sep3": "Diseño de Bases de Datos",
    "hero.intro":
      "Diseño y construyo sistemas backend resilientes, arquitecturas escalables y bases de datos bien modeladas. Enfocado en escribir software mantenible, observable y hecho para durar.",
    "hero.cta.primary": "Ver Proyectos",
    "hero.cta.secondary": "Contactar",

    "about.eyebrow": "01 — Acerca de",
    "about.title": "Ingeniería con propósito.",
    "about.summary.title": "Resumen Profesional",
    "about.summary.p1":
      "Ingeniero de software con fuerte enfoque en sistemas backend, arquitectura de software y diseño de bases de datos. Disfruto transformar problemas ambiguos en soluciones claras y mantenibles — desde modelado de dominio y diseño de APIs hasta infraestructura y observabilidad.",
    "about.summary.p2":
      "Mi trabajo se centra en construir sistemas confiables bajo carga, fáciles de entender y simples de evolucionar. Me importan profundamente las abstracciones limpias, los trade-offs bien pensados y entregar software que los equipos puedan asumir con confianza.",
    "about.summary.h1": "Ingeniería backend-first con mentalidad de sistemas",
    "about.summary.h2": "Domain-driven design y arquitectura limpia",
    "about.summary.h3": "Modelado de bases de datos relacionales y NoSQL",
    "about.summary.h4": "Sistemas escalables, observables y de producción",
    "about.edu.title": "Educación",
    "about.edu.period1": "2021 — 2025",
    "about.edu.badge1": "Título",
    "about.edu.degree": "Licenciatura en Ciencias de la Computación",
    "about.edu.degree.desc":
      "Enfoque en sistemas distribuidos, algoritmos y teoría de bases de datos.",
    "about.edu.period2": "Continuo",
    "about.edu.badge2": "Autodidacta",
    "about.edu.continuous": "Backend y Arquitectura Avanzada",
    "about.edu.continuous.desc":
      "Estudio continuo de diseño de sistemas, ingeniería de rendimiento e infraestructura.",
    "about.lang.title": "Idiomas",
    "about.lang.pt": "Portugués",
    "about.lang.pt.level": "Nativo",
    "about.lang.en": "Inglés",
    "about.lang.en.level": "Fluido",
    "about.lang.es": "Español",
    "about.lang.es.level": "Conversacional",
    "about.lang.it": "Italiano",
    "about.lang.it.level": "Básico",

    "skills.eyebrow": "02 — Habilidades Técnicas",
    "skills.title": "Herramientas del oficio.",
    "skills.languages": "Lenguajes",
    "skills.backend": "Backend & APIs",
    "skills.databases": "Bases de Datos",
    "skills.architecture": "Arquitectura",
    "skills.infra": "Infraestructura",
    "skills.tools": "Herramientas y Prácticas",

    "projects.eyebrow": "03 — Proyectos Destacados",
    "projects.title": "Trabajos seleccionados.",
    "projects.p1.tag": "Backend · Arquitectura",
    "projects.p1.desc":
      "Una plataforma moderna de gestión de bibliotecas diseñada en torno a un modelo de dominio limpio. Construida para manejar catalogación compleja, reglas de préstamo y operaciones multi-tenant con foco en integridad de datos y mantenibilidad a largo plazo.",
    "projects.p1.tech.title": "Aspectos Técnicos",
    "projects.p1.tech.1": "Domain-driven design con contextos delimitados",
    "projects.p1.tech.2":
      "Pista de auditoría event-sourced para operaciones de préstamo",
    "projects.p1.tech.3":
      "APIs idempotentes y control de concurrencia optimista",
    "projects.p1.tech.4": "Cobertura de pruebas integral con contract testing",
    "projects.p1.arch.title": "Aspectos de Arquitectura",
    "projects.p1.arch.1": "Arquitectura hexagonal aislando reglas de negocio",
    "projects.p1.arch.2":
      "Bus de eventos asíncrono para comunicación entre servicios",
    "projects.p1.arch.3": "Separación de modelos de lectura/escritura (CQRS)",
    "projects.p1.arch.4":
      "Despliegue containerizado con entornos reproducibles",
    "projects.p2.tag": "Identidad · Plataforma",
    "projects.p2.desc":
      "Una plataforma de identidad y autenticación que impulsa el acceso seguro en múltiples productos. Diseñada como una capa centralizada de identidad con soporte OAuth2/OIDC, MFA y autorización granular.",
    "projects.p2.tech.title": "Aspectos Técnicos",
    "projects.p2.tech.1": "Implementación de OAuth 2.0 y OpenID Connect",
    "projects.p2.tech.2": "Autenticación multi-factor (TOTP, WebAuthn)",
    "projects.p2.tech.3":
      "JWTs de corta duración con rotación segura de refresh tokens",
    "projects.p2.tech.4":
      "Limitación de tasa, detección de anomalías y logs de auditoría",

    "arch.eyebrow": "04 — Arquitectura",
    "arch.title": "Cómo pienso sobre sistemas.",
    "arch.mono.title": "Arquitectura Monorepo",
    "arch.mono.desc":
      "Una única fuente de verdad para servicios, librerías compartidas y código de infraestructura. Permite cambios atómicos, herramientas consistentes e iteración rápida entre equipos.",
    "arch.mono.1": "Workspaces con grafos de dependencias aislados",
    "arch.mono.2": "Contratos compartidos y clientes generados",
    "arch.mono.3": "CI solo para afectados, con feedback rápido",
    "arch.auth.title": "Flujo de Autenticación",
    "arch.auth.desc":
      "Autenticación segura y stateless con tokens de acceso de corta duración, rotación de refresh tokens y controles de sesión fuertes. Diseñado para usuarios humanos y llamadas servicio-a-servicio.",
    "arch.auth.1": "Flujos OAuth2 basados en PKCE",
    "arch.auth.2": "Sesiones vinculadas al dispositivo y MFA obligatorio",
    "arch.auth.3": "Revocación centralizada y pista de auditoría",
    "arch.db.title": "Diseño de Bases de Datos",
    "arch.db.desc":
      "Schemas cuidadosamente normalizados donde importa, desnormalización pragmática para caminos de lectura. Tipado fuerte, migraciones como código e índices guiados por patrones reales de consulta.",
    "arch.db.1": "Migraciones versionadas con seguridad de rollback",
    "arch.db.2": "Soft deletes, columnas de auditoría y aislamiento de tenants",
    "arch.db.3": "Réplicas de lectura y capas de caché para escalar",
    "arch.infra.title": "Visión General de Infraestructura",
    "arch.infra.desc":
      "Infraestructura como código, despliegues inmutables y observabilidad desde el primer día. Sistemas diseñados para fallar con gracia y recuperarse automáticamente.",
    "arch.infra.1": "Provisionamiento declarativo con Terraform",
    "arch.infra.2": "Logs estructurados, métricas y trazabilidad distribuida",
    "arch.infra.3": "Estrategias de release blue/green y canary",

    "contact.eyebrow": "05 — Contacto",
    "contact.title": "Construyamos algo sólido.",
    "contact.intro":
      "Abierto a conversaciones sobre ingeniería backend, roles de arquitectura y problemas técnicos interesantes. La mejor forma de contactarme está abajo.",
    "contact.email.label": "Correo",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",

    "footer.copy": "Diseñado por Adolfo Figueiredo © 2026",
    "footer.meta": "Construido con HTML y CSS — sin frameworks, sin ruido.",
  },

  it: {
    "nav.about": "Info",
    "nav.skills": "Competenze",
    "nav.projects": "Progetti",
    "nav.architecture": "Architettura",
    "nav.contact": "Contatti",

    "hero.status": "Disponibile per nuove opportunità",
    "hero.role": "Ingegnere del Software",
    "hero.role.sep1": "Sviluppo Backend",
    "hero.role.sep2": "Architettura del Software",
    "hero.role.sep3": "Progettazione di Database",
    "hero.intro":
      "Progetto e costruisco sistemi backend resilienti, architetture scalabili e database ben modellati. Focalizzato sullo scrivere software manutenibile, osservabile e fatto per durare.",
    "hero.cta.primary": "Vedi Progetti",
    "hero.cta.secondary": "Contattami",

    "about.eyebrow": "01 — Info",
    "about.title": "Ingegneria con intento.",
    "about.summary.title": "Sommario Professionale",
    "about.summary.p1":
      "Ingegnere del software con forte focus su sistemi backend, architettura del software e progettazione di database. Mi piace trasformare problemi ambigui in soluzioni chiare e manutenibili — dalla modellazione del dominio e design delle API fino a infrastruttura e osservabilità.",
    "about.summary.p2":
      "Il mio lavoro si concentra sulla costruzione di sistemi affidabili sotto carico, facili da comprendere e semplici da evolvere. Mi interessano profondamente le astrazioni pulite, i trade-off ben ponderati e il consegnare software che i team possano gestire con sicurezza.",
    "about.summary.h1": "Ingegneria backend-first con mentalità di sistema",
    "about.summary.h2": "Domain-driven design e architettura pulita",
    "about.summary.h3": "Modellazione di database relazionali e NoSQL",
    "about.summary.h4": "Sistemi scalabili, osservabili e di produzione",
    "about.edu.title": "Istruzione",
    "about.edu.period1": "2021 — 2025",
    "about.edu.badge1": "Laurea",
    "about.edu.degree": "Laurea in Informatica",
    "about.edu.degree.desc":
      "Focus su sistemi distribuiti, algoritmi e teoria dei database.",
    "about.edu.period2": "Continuo",
    "about.edu.badge2": "Autodidatta",
    "about.edu.continuous": "Backend e Architettura Avanzata",
    "about.edu.continuous.desc":
      "Studio continuo di system design, performance engineering e infrastruttura.",
    "about.lang.title": "Lingue",
    "about.lang.pt": "Portoghese",
    "about.lang.pt.level": "Nativo",
    "about.lang.en": "Inglese",
    "about.lang.en.level": "Fluente",
    "about.lang.es": "Spagnolo",
    "about.lang.es.level": "Conversazionale",
    "about.lang.it": "Italiano",
    "about.lang.it.level": "Base",

    "skills.eyebrow": "02 — Competenze Tecniche",
    "skills.title": "Gli strumenti del mestiere.",
    "skills.languages": "Linguaggi",
    "skills.backend": "Backend & API",
    "skills.databases": "Database",
    "skills.architecture": "Architettura",
    "skills.infra": "Infrastruttura",
    "skills.tools": "Strumenti e Pratiche",

    "projects.eyebrow": "03 — Progetti in Evidenza",
    "projects.title": "Lavori selezionati.",
    "projects.p1.tag": "Backend · Architettura",
    "projects.p1.desc":
      "Una piattaforma moderna di gestione librerie progettata attorno a un modello di dominio pulito. Costruita per gestire catalogazione complessa, regole di prestito e operazioni multi-tenant con focus su integrità dei dati e manutenibilità a lungo termine.",
    "projects.p1.tech.title": "Aspetti Tecnici",
    "projects.p1.tech.1": "Domain-driven design con contesti delimitati",
    "projects.p1.tech.2":
      "Traccia di audit event-sourced per operazioni di prestito",
    "projects.p1.tech.3":
      "API idempotenti e controllo di concorrenza ottimistico",
    "projects.p1.tech.4": "Copertura test completa con contract testing",
    "projects.p1.arch.title": "Aspetti di Architettura",
    "projects.p1.arch.1":
      "Architettura esagonale che isola le regole di business",
    "projects.p1.arch.2":
      "Bus di eventi asincrono per comunicazione tra servizi",
    "projects.p1.arch.3": "Separazione modelli lettura/scrittura (CQRS)",
    "projects.p1.arch.4": "Deploy containerizzato con ambienti riproducibili",
    "projects.p2.tag": "Identità · Piattaforma",
    "projects.p2.desc":
      "Una piattaforma di identità e autenticazione che abilita accesso sicuro su più prodotti. Progettata come layer centralizzato di identità con supporto OAuth2/OIDC, MFA e autorizzazione granulare.",
    "projects.p2.tech.title": "Aspetti Tecnici",
    "projects.p2.tech.1": "Implementazione di OAuth 2.0 e OpenID Connect",
    "projects.p2.tech.2": "Autenticazione multi-fattore (TOTP, WebAuthn)",
    "projects.p2.tech.3":
      "JWT a breve durata con rotazione sicura dei refresh token",
    "projects.p2.tech.4": "Rate limiting, rilevamento anomalie e log di audit",

    "arch.eyebrow": "04 — Architettura",
    "arch.title": "Come penso ai sistemi.",
    "arch.mono.title": "Architettura Monorepo",
    "arch.mono.desc":
      "Un'unica fonte di verità per servizi, librerie condivise e codice infrastrutturale. Permette modifiche atomiche, strumenti coerenti e iterazione rapida tra team.",
    "arch.mono.1": "Workspaces con grafi di dipendenze isolati",
    "arch.mono.2": "Contratti condivisi e client generati",
    "arch.mono.3": "CI solo per elementi interessati, con feedback rapido",
    "arch.auth.title": "Flusso di Autenticazione",
    "arch.auth.desc":
      "Autenticazione sicura e stateless con token di accesso a breve durata, rotazione dei refresh token e controlli di sessione robusti. Progettato per utenti umani e chiamate servizio-a-servizio.",
    "arch.auth.1": "Flussi OAuth2 basati su PKCE",
    "arch.auth.2": "Sessioni legate al dispositivo e MFA obbligatorio",
    "arch.auth.3": "Revoca centralizzata e traccia di audit",
    "arch.db.title": "Progettazione Database",
    "arch.db.desc":
      "Schema normalizzati con cura dove serve, denormalizzazione pragmatica per i percorsi di lettura. Tipizzazione forte, migrazioni come codice e indici guidati da pattern di query reali.",
    "arch.db.1": "Migrazioni versionate con sicurezza di rollback",
    "arch.db.2": "Soft delete, colonne di audit e isolamento tenant",
    "arch.db.3": "Repliche di lettura e layer di cache per scalare",
    "arch.infra.title": "Panoramica Infrastruttura",
    "arch.infra.desc":
      "Infrastruttura come codice, deploy immutabili e osservabilità integrata fin dal primo giorno. Sistemi progettati per fallire con grazia e riprendersi automaticamente.",
    "arch.infra.1": "Provisioning dichiarativo con Terraform",
    "arch.infra.2": "Log strutturati, metriche e tracing distribuito",
    "arch.infra.3": "Strategie di release blue/green e canary",

    "contact.eyebrow": "05 — Contatti",
    "contact.title": "Costruiamo qualcosa di solido.",
    "contact.intro":
      "Aperto a conversazioni su ingegneria backend, ruoli di architettura e problemi tecnici interessanti. Il modo migliore per raggiungermi è qui sotto.",
    "contact.email.label": "Email",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",

    "footer.copy": "Progettato da Adolfo Figueiredo © 2026",
    "footer.meta": "Costruito con HTML e CSS — senza framework, senza rumore.",
  },
};

// Language metadata
const LANGS = {
  en: { label: "EN", name: "English" },
  pt: { label: "PT", name: "Português" },
  es: { label: "ES", name: "Español" },
  it: { label: "IT", name: "Italiano" },
};

const DEFAULT_LANG = "en";
