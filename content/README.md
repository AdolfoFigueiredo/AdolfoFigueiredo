# Conteúdo do Site

Este diretório é a **fonte única de conteúdo** do portfólio. Tudo o que aparece
no site está organizado aqui.

## Estrutura

```
content/
├── site.ts          # Identidade, hero, links e SEO (dados do autor)
├── timeline.ts      # Percurso: work e education
├── projects.ts      # Projectos (nome, descrição, highlights, stack, link)
├── skills.ts        # Stack / habilidades por categoria
└── posts/           # Artigos em Markdown (frontmatter + corpo)
```

## Como adicionar conteúdo

- **Post:** criar um ficheiro `.md` em `content/posts/<slug>.md` com frontmatter
  (`title`, `description`, `date`, `tags`) e o corpo em Markdown.
- **Projecto:** acrescentar um objecto em `content/projects.ts`.
- **Experiência / formação:** acrescentar/editar entradas em `content/timeline.ts`.
- **Stack:** editar `content/skills.ts`.

## Convenções

- Posts são lidos em runtime a partir de `content/posts/` (slug = nome do ficheiro).
- Dados estruturados (site, timeline, projects, skills) são TypeScript tipado,
  importados via alias `@content/*` (resolução para `./content/*`).
- Conteúdo editorial vive em Markdown; dados estruturados vivem em TypeScript.
