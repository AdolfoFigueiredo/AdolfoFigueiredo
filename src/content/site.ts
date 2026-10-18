export const site = {
  name: "Adolfo Figueiredo",
  logo: "AdolfoFigueiredo",
  handle: "@AdolfoFigueiredo",
  title: "Adolfo Figueiredo — Full Stack Developer",
  description:
    "Full Stack Developer focado em modelação de dados, APIs e sistemas que aguentam produção. TypeScript, Node.js, PostgreSQL e MySQL.",
  tagline: "Full Stack developer",
  greeting: "Olá, sou",
  intro:
    "Transformo problemas complexos em sistemas funcionais, com foco em backend, dados e modelação de base de dados.",
  location: "Luanda, Angola",
  email: "adolfo.figueiredo@outlook.com",
  github: "https://github.com/AdolfoFigueiredo",
  linkedin: "https://www.linkedin.com/in/adolfofigueiredo28/",
  url: "https://adolfofigueiredo.me",
} as const;

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: "solo" | "equipa";
  period: string;
  stack: string[];
  highlights: string[];
  links: {
    repo?: string;
    demo?: string;
    docs?: string;
  };
  featured: boolean;
  status: "activo" | "arquivado" | "pausado";
  /** Só aparece no site quando existe repo público a comprovar. */
  listed: boolean;
}

export const projects: Project[] = [
  {
    slug: "2am-library",
    title: "2AM — Sistema Integrado de Gestão de Livraria",
    tagline: "Omnichannel · Ecommerce + ERP sobre uma única API",
    description:
      "Projecto académico que unifica venda online e gestão interna sobre a mesma fonte de dados: o cliente vê exactamente o stock que o gestor vê.",
    role: "solo",
    period: "2026",
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
    highlights: [
      "API REST em 3 camadas: Repository → Service → Routes",
      "18 tabelas, 19 chaves estrangeiras, 45 índices",
      "5 views de negócio e 2 stored procedures transaccionais",
      "Prisma ORM para o CRUD; SQL bruto onde a atomicidade importa",
      "Autenticação JWT + bcrypt, validação Zod, error handler global",
      "Backoffice em Next.js, Vitest e CI no GitHub Actions",
    ],
    links: {
      repo: "https://github.com/AdolfoFigueiredo/2AM_Library",
    },
    featured: true,
    status: "activo",
    listed: true,
  },
  {
    slug: "prumo",
    title: "Prumo — Plataforma de Gestão de Estágios",
    tagline: "Turmas, formadores, estagiários, avaliações e quizzes ao vivo",
    description:
      "Plataforma web de gestão de estágios e formação. Participei no ciclo completo do projecto, do levantamento do problema ao deploy.",
    role: "equipa",
    period: "Out 2026",
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Next.js", "React", "Docker"],
    highlights: [
      "Ciclo completo: problema → modelação → implementação → deploy",
      "Modelação do esquema relacional PostgreSQL (21 entidades) em equipa",
      "Backend (NestJS + Prisma) e frontend (Next.js + React + Tailwind)",
      "Deploy em VPS com Docker e CI/CD",
    ],
    links: {},
    featured: true,
    status: "activo",
    listed: true,
  },
  {
    slug: "github-activity",
    title: "GitHub Activity CLI",
    tagline: "Actividade de um utilizador do GitHub, no terminal",
    description:
      "CLI em Java puro que consulta a API do GitHub e apresenta a actividade recente de um utilizador. Zero dependências externas no fetch.",
    role: "solo",
    period: "2026",
    stack: ["Java", "Maven", "GitHub Actions"],
    highlights: [
      "Java standard library para o consumo da API",
      "Tratamento de erros: utilizador inexistente, falha de rede, rate limit",
      "CI a compilar e testar automaticamente",
    ],
    links: {},
    featured: false,
    status: "pausado",
    listed: false,
  },
];

export interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Projecto de equipa em contexto académico",
    title: "Full-Stack Developer",
    period: "Out 2026 · 2 semanas",
    context: "Plataforma de gestão de estágios e formação",
    summary:
      "Participei no ciclo completo do projecto: levantamento do problema, modelação de dados, implementação e deploy em produção.",
    highlights: [
      "Modelámos em equipa o esquema relacional PostgreSQL (21 entidades). A minha responsabilidade foi traduzir as decisões de negócio para o modelo — mapear regras do domínio em entidades, relações e constraints.",
      "Desenvolvi funcionalidades de backend (NestJS + Prisma) e de frontend (Next.js + React + Tailwind).",
      "Participei no pipeline de deploy com Docker e CI/CD.",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "React", "Tailwind", "Docker"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Linguagens",
    items: ["TypeScript", "JavaScript", "Java", "SQL", "Python"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST", "JWT", "bcrypt", "Zod"],
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