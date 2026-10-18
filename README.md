# Caleb Figueiredo — Portfólio

**Backend Developer · Database Design · Systems Architecture**
Luanda, Angola

---

## Sobre

Portfólio pessoal construído com Next.js (App Router) e TypeScript. Conteúdo
editorial, paleta neutra, foco em leitura longa.

- **Site:** [adolfofigueiredo.me](https://adolfofigueiredo.me)
- **GitHub:** [@AdolfoFigueiredo](https://github.com/AdolfoFigueiredo)
- **LinkedIn:** [in/adolfofigueiredo28](https://www.linkedin.com/in/adolfofigueiredo28/)
- **Email:** calebfigueiredo28@gmail.com

> O handle no GitHub é `@AdolfoFigueiredo`; o nome civil é Caleb Figueiredo.

---

## Projectos

| Projecto | Descrição |
| -------- | --------- |
| [2AM Library](https://github.com/AdolfoFigueiredo/2AM_Library) | Sistema integrado de gestão de livraria (omnichannel). Express + Prisma + Next.js, 18 tabelas, 5 views e 2 stored procedures. |
| Prumo | Plataforma de gestão de estágios. Trabalho em equipa — backend (NestJS + Prisma), frontend (Next.js), modelação de dados (21 entidades) e deploy. |
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
src/
├── app/
│   ├── layout.tsx        Layout raiz, fontes, metadata
│   ├── page.tsx          Home (todas as secções)
│   ├── globals.css       Design tokens + reset + tipografia
│   ├── components.css    Componentes
│   ├── not-found.tsx     404
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Header.tsx        Navegação + toggle de tema
│   ├── Footer.tsx
│   └── RevealProvider.tsx  Animações no scroll
└── content/
    └── site.ts           Projectos, experiência e stack (dados tipados)
```

O conteúdo vive em `src/content/site.ts` como dados tipados em TypeScript.
Adicionar um projecto = acrescentar um objecto. Zero JSX.

### Design system

Os tokens estão em `src/app/globals.css`. Paleta neutra quente ("Warm Neutral"),
com um único acento verde-floresta. Tema claro e escuro via
`data-theme` no `<html>`, com persistência em `localStorage` e sem flash
de tema (script inline no `<head>`).

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

Ver [LICENSE](./LICENSE).