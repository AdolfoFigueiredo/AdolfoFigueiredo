import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getAllPosts, formatDate } from "@/lib/blog";
import { site } from "@/content/site";
import CopyLinkButton from "@/components/CopyLinkButton";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const shareUrl = `${site.url}/blog/${post.slug}`;
  const linkedIn =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitter =
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;

  return (
    <article className="section section--flush page-head">
      <div className="container container--prose">
        <Link href="/blog" className="post__back">
          ← Blog
        </Link>

        <header className="post__header">
          <div className="post-card__meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="t-h1 post__title">{post.title}</h1>
          <p className="t-body post__description">{post.description}</p>
        </header>

        <Prose markdown={post.content} />

        <footer className="post__footer">
          <div className="badges">
            {post.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>

          <div className="post__share">
            <span className="t-label">Partilhar</span>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              LinkedIn
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              X / Twitter
            </a>
            <CopyLinkButton url={shareUrl} />
          </div>
        </footer>
      </div>
    </article>
  );
}

/**
 * Renderizador de Markdown mínimo — cobre o que os posts usam:
 * headings, parágrafos, listas, blockquotes, code inline, blocos de código,
 * links e negrito. Sem dependências, sem dangerouslySetInnerHTML.
 */
function Prose({ markdown }: { markdown: string }) {
  const blocks = parseBlocks(markdown);

  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{inline(block.text)}</h2>;
          case "h3":
            return <h3 key={i}>{inline(block.text)}</h3>;
          case "code":
            return (
              <pre key={i}>
                <code>{block.text}</code>
              </pre>
            );
          case "quote":
            return <blockquote key={i}>{inline(block.text)}</blockquote>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{inline(item)}</li>
                ))}
              </ol>
            );
          default:
            return <p key={i}>{inline(block.text)}</p>;
        }
      })}
    </div>
  );
}

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "code"; text: string };

function parseBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", text: buf.join("\n") });
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4) });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3) });
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: "quote", text: buf.join(" ") });
      continue;
    }

    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("> ") &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: buf.join(" ") });
  }

  return blocks;
}

/** Formatação inline: `código`, **negrito** e [texto](url). */
function inline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));

    const token = match[0];

    if (token.startsWith("`")) {
      nodes.push(<code key={key++}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    } else {
      const m = /\[([^\]]+)\]\(([^)]+)\)/.exec(token);
      if (m) {
        const external = m[2].startsWith("http");
        nodes.push(
          <a
            key={key++}
            href={m[2]}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {m[1]}
          </a>,
        );
      }
    }

    last = match.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));

  return nodes;
}