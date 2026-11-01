export type TimelineKind = "work" | "education";

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
 * Fonte única do percurso — work e education, ordenada do mais recente/ativo
 * para o mais antigo. Projectos têm o seu próprio ficheiro (content/projects.ts).
 */
export const timeline: TimelineEntry[] = [
  {
    id: "startup-cto",
    kind: "work",
    period: "2024 — Presente",
    title: "Co-founder & Head Of Infraestructure",
    context: "Zentury Corporation",
    summary:
      "Como co-founder & head of infraestructure na Zentury Corporation, venho aplicando os meus conhecimentos para garantir a evolução da nossa startup ",
    highlights: [
      "Defini a stack e a arquitectura do produto, com backend e dados no centro.",
      "Construí o núcleo técnico do produto: API, base de dados e deploy.",
    ],
    stack: ["Docker", "CI/CD", "Github", "Base de Dados", "Infraestrutura"],
    shared: "https://zenturyc.com",
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
    summary:
      "Formação técnica em informática, onde obtenho fundamentos sobre este mundo maravilhoso que é a informática, onde pude aprender que informática não é apenas sobre criar sites ou reparar computadores, é um mundo mais abrangente e que faz cada vez mais parte do nosso dia-a-dia.",
    highlights: [
      "Fundamentos de informática, redes e desenvolvimento de software.",
      "Como nos conectar com as diversas áreas do saber",
      "Aprender que ser informático não é apenas crimpar cabo, tem muita equação para resolver :(",
    ],
    stack: ["Redes", "Hardware", "Programação", "Sistemas Operativos", "Desenvolvimento de Software", "Modelação de Dados"],
  },
];
