# Adolfo Figueiredo — Portfólio

**Backend Developer · Database Design · Systems Architecture**
Luanda, Angola

---

## Sobre

Portfólio pessoal construído com Next.js (App Router) e TypeScript. Conteúdo
editorial, paleta neutra, foco em leitura longa.

- **Site:** [adolfofigueiredo.me](https://adolfofigueiredo.me)
- **GitHub:** [@AdolfoFigueiredo](https://github.com/AdolfoFigueiredo)
- **LinkedIn:** [in/adolfofigueiredo28](https://www.linkedin.com/in/adolfofigueiredo28/)
- **Email:** adolfo.figueiredo28@outlook.com

> O handle no GitHub é `@AdolfoFigueiredo`; o nome civil é Adolfo Figueiredo.

---

## Projectos

| Projecto | Descrição |
| -------- | --------- |
| [2AM Library](https://github.com/AdolfoFigueiredo/2AM_Library) | Sistema integrado de gestão de livraria (omnichannel). Express + Prisma + Next.js, 18 tabelas, 5 views e 2 stored procedures. |
| Prumo | Plataforma de gestão de estágios. Ciclo completo: backend (NestJS + Prisma), frontend (Next.js), modelação de dados (21 entidades) e deploy. |
| [GitHub Activity CLI](https://github.com/AdolfoFigueiredo/github-activity) | CLI em Java que mostra a actividade de um utilizador do GitHub no terminal. |

---

## Stack

**Linguagens** — TypeScript, JavaScript, Java, SQL, Python
**Backend** — Node.js, Express, NestJS, REST, JWT, bcrypt, Zod
**Frontend** — Next.js, React, Tailwind, HTML, CSS
**Dados** — PostgreSQL, MySQL/MariaDB, Prisma, views, stored procedures, modelação relacional
**Infra** — Docker, GitHub Actions, Linux, Git, CI/CD

---

## Estrutura

```
content/
├── site.ts           Identidade, hero, links e SEO (dados do autor)
├── timeline.ts       Percurso unificado (work, project, education)
├── skills.ts         Stack / habilidades por categoria
└── posts/            Posts em Markdown

src/
├── app/
│   ├── layout.tsx        Layout raiz, fontes, metadata
│   ├── page.tsx          Home (hero + contacto)
│   ├── globals.css       Design tokens + reset + tipografia
│   ├── components.css    Componentes
│   ├── not-found.tsx     404
│   ├── sitemap.ts        Sitemap (todas as rotas + posts)
│   ├── robots.ts
│   ├── rss.xml/route.ts  RSS
│   ├── sobre/            Sobre + stack/skills
│   ├── experiencia/      Timeline de experiências + projectos
│   ├── timeline/         Linha do tempo
│   └── blog/             Blog (+ [slug])
├── components/           Header, Footer, RevealProvider, CopyLinkButton
└── lib/
    └── blog.ts           Leitura de posts (frontmatter + Markdown)

```

Todo o conteúdo do site vive na raiz em `/content/`, organizado por domínio:
`site.ts` (identidade/hero), `timeline.ts` (percurso), `skills.ts` (stack) e
`posts/` (artigos em Markdown).

Os dados tipados em TypeScript são importados via alias `@content/*`
(resolução para `./content/*`). Adicionar um projecto = acrescentar um objecto
na timeline. Zero JSX. Adicionar um post = criar um `.md` em `content/posts/`.

### Design system

Os tokens estão em `src/app/globals.css`. Paleta neutra quente ("Warm Neutral"),
com um único acento âmbar. Tema claro e escuro via `data-theme` no `<html>`,
com persistência em `localStorage` e sem flash de tema (script inline no `<head>`).

---

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

---

## v1 (legacy)

A primeira versão do portfólio (HTML/CSS/JS puro) está preservada em
[`legacy/`](./legacy). O código-fonte original do design anterior.

---

## Licença

Portfólio pessoal — © 2026 Adolfo Figueiredo.
