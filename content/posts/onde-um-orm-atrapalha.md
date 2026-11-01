---
title: Onde um ORM atrapalha
description: O Prisma tornou o CRUD do 2AM mais seguro, mas a lógica transaccional da venda teve de ficar em SQL. Porquê?
date: 2026-10-19
tags: [sql, prisma, arquitectura]
---

No projecto 2AM tenho duas coisas que raramente coexistem: um CRUD com nove
módulos e duas stored procedures transaccionais. Introduzi o Prisma para tratar
da primeira parte. A segunda não cabia.

## O que o ORM resolve bem

O CRUD do 2AM é CRUD a sério: utilizadores, livros, categorias, carrinho,
fornecedores. filtros dinâmicos, ordenação, paginação. Escrever isso à mão em
SQL significa concatenar strings — e aí nasce o SQL injection.

Com o Prisma, `where` é um objecto, as relações são tipadas e o compilador
rejeita um campo que não existe. O `dynamicFilter`, o `dynamicUpdate` e o
`generateDynamicSelect` que eu tinha escrito à mão deixaram de ter propósito.

Isto não é comforto. É a diferença entre um bug que o compilador apanha e um
bug que um utilizador encontra.

## O que o ORM não resolve

`sp_ProcessSale` faz três coisas numa transacção:

1. valida o stock de cada linha
2. insere a venda, os itens e o pagamento
3. reduz o inventário

Se a terceira falha, as duas anteriores têm de desfazer-se. Isto não é
"select where id = ?" — é lógica de negócio que precisa de estar no mesmo
lugar que os dados, a correr no mesmo contexto de transacção.

O Prisma não me impede de escrever SQL. E devia: é uma ferramenta, não uma
filosofia. Mas o que faço é escolher conscientemente onde cada responsabilidade
vive.

## A decisão

```
CRUD e relações      -> Prisma
Atomicidade          -> SQL (stored procedures)
Relatórios e métricas -> views SQL
```

O objectivo nunca foi "usar uma ORM". Era **saber onde cada coisa pertence**.

## O que aprendi

Um ORM é uma escolha de arquitectura, não uma ferramenta de produtividade. Traz
tipos, migrações e segurança — e leva consigo um conjunto de opiniões sobre onde
a lógica deve viver. Aceitar essas opiniões cegamente é tão mau como ignorá-las.

Quando a regra de negócio é complicada o suficiente para justificar uma stored
procedure, provavelmente também é complicada o suficiente para justificar
escrever SQL.