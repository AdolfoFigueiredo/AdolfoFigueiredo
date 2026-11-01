export const site = {
  name: "Adolfo Figueiredo",
  logo: "AdolfoFigueiredo",
  handle: "@AdolfoFigueiredo",
  title: "Adolfo Figueiredo — Backend Developer & System Architecture",
  description:
    "Desenvolvedor Backend e Arquitecto de sistemas",
  tagline: "Backend developer & System Architecture",
  greeting: "Olá, sou",
  intro:
    "Transformo problemas complexos em sistemas funcionais",
  location: "Luanda, Angola",
  email: "adolfo.figueiredo28@outlook.com",
  github: "https://github.com/AdolfoFigueiredo",
  linkedin: "https://www.linkedin.com/in/adolfofigueiredo28/",
  url: "https://adolfofigueiredo.me",
} as const;

export type TimelineKind = "work" | "project" | "education";

export interface TimelineEntry {
  id: string;
  kind: TimelineKind;
  period: string;
  title: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  shared?: string;
}

/**
 * Fonte única do percurso — timeline unificada (work, project e education),
 * ordenada do mais recente/ativo para o mais antigo.
 */
export const timeline: TimelineEntry[] = [
  {
    id: "startup-cto",
    kind: "work",
    period: "2024 — Presente",
    title: "Co-founder & Head Of Infraestructure",
    context: "Zentury Corporation",
    summary:"Como co-founder & head of infraestructure na Zentury Corporation, venho aplicando os meus conhecimentos para garantir a evolução da nossa startup ",
    highlights: [
      "Defini a stack e a arquitectura do produto, com backend e dados no centro.",
      "Construí o núcleo técnico do produto: API, base de dados e deploy.",
    ],
    stack: [], 
    shared: "https://zenturyc.com",
  },
  {
    id: "prumo",
    kind: "project",
    period: "Out 2026",
    title: "Prumo — Plataforma de Gestão de Estágios",
    context: "Projecto académico",
    summary:
      "Plataforma de gestão de estágios e formação. Participação no ciclo completo do projecto, do levantamento do problema ao deploy.",
    highlights: [
      "Ciclo completo: problema → modelação → implementação → deploy",
      "Modelação do esquema relacional PostgreSQL (21 entidades) em equipa",
      "Backend (NestJS + Prisma) e frontend (Next.js + React + Tailwind)",
      "Deploy em Self-Hosted com Docker e CI/CD",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Next.js",
      "React",
      "Docker",
    ],
  },
  {
    id: "2am-library",
    kind: "project",
    period: "2026",
    title: "2AM — Sistema Integrado de Gestão de Livraria",
    context: "Projecto académico",
    summary:
      "Projecto académico que unifica venda online e gestão interna sobre a mesma fonte de dados: o cliente vê exactamente o stock que o gestor vê.",
    highlights: [
      "API REST em 3 camadas: Repository → Service → Routes",
      "18 tabelas, 19 chaves estrangeiras, 45 índices",
      "5 views de negócio e 2 stored procedures transaccionais",
      "Prisma ORM para o CRUD; SQL bruto onde a atomicidade importa",
      "Autenticação JWT + bcrypt, validação Zod, error handler global",
      "Backoffice em Next.js, Vitest e CI no GitHub Actions",
    ],
    stack: [
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "Next.js",
      "React",
      "Tailwind",
      "Zod",
      "Vitest",
      "Docker",
    ],
    shared: "https://github.com/AdolfoFigueiredo/2AM_Library",
  },
  {
    id: "itel-editorial",
    kind: "work",
    period: "2025 — presente",
    title: "Editor Gráfico e Textual",
    context: "ITEL Editorial",
    summary:
      "Editor gráfico e textual desde 2025. Escrita técnica e escrita editorial partilham a mesma disciplina: clareza antes da forma.",
    highlights: [
      "Produção editorial com rigor técnico e visual.",
      "Aplico o mesmo cuidado editorial ao documentar decisões técnicas.",
    ],
    stack: ["Markdown", "Figma", "Google Drive", "Google Docs"],

  },
  {
    id: "itel-formation",
    kind: "education",
    period: "2023 — 2027",
    title: "Técnico em Informática",
    context: "ITEL",
    summary: "Formação técnica em informática, onde obtenho fundamentos sobre este mundo maravilhoso que é a informática, onde pude aprender que informática não é apenas sobre criar sites ou reparar computadores, é um mundo mais abrangente e que faz cada vez mais parte do nosso dia-a-dia.",
    highlights: [
      "Fundamentos de informática, redes e desenvolvimento de software.",
      "Como nos conectar com as diversas áreas do saber", 
      "Aprender que ser informático não é apenas crimpar cabo, tem muita equação para resolver :("
    ],
    stack: ["Redes", "Hardware", "Programação", "Sistemas Operativos", "Desenvolvimento de Software", "Modelação de Dados"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Linguagens",
    items: ["TypeScript", "Java", "SQL", "Python", "C"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Spring Boot", "FastAPI"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind", "HTML", "CSS"],
  },
  {
    category: "Dados",
    items: [
      "PostgreSQL",
      "MySQL / MariaDB",
      "Prisma",
      "Views",
      "Stored Procedures",
      "Modelação relacional",
    ],
  },
  {
    category: "Infraestrutura",
    items: ["Docker", "GitHub Actions", "Linux", "Git", "CI/CD"],
  },
];
