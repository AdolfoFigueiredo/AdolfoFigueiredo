export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

/**
 * Fonte única dos projectos — ciclo completo: problema → modelação → implementação → deploy.
 * Cada projecto tem nome, descrição simples, highlights, stack e link de acesso (repo ou deploy).
 */
export const projects: Project[] = [
  {
    id: "2am-library",
    title: "2AM — Sistema Integrado de Gestão de Livraria",
    description:
      "Projecto académico que unifica venda online e gestão interna sobre a mesma fonte de dados: o cliente vê exactamente o stock que o gestor vê.",
    highlights: [
      "Projeto de aprendizado",
      "Gestão de stock e vendas online unificadas",
    ],
    stack: [
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "Zod",
      "Docker",
    ],
    link: "https://github.com/AdolfoFigueiredo/2AM_Library",
  },
  {
    id: "prumo",
    title: "Prumo — Plataforma de Gestão de Estágios",
    description:
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
];
