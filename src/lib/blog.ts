export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
}

const dateFmt = new Intl.DateTimeFormat("pt-PT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatDate(iso: string) {
  return dateFmt.format(new Date(iso));
}

/** Calcula o tempo de leitura a partir do número de palavras (~200 wpm). */
export function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min de leitura`;
}

/**
 * Minimal frontmatter parser.
 * Formato: bloco `---` no topo com pares `chave: valor`.
 */
function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {} as Record<string, string>, body: raw };

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }

  return { data, body: match[2] };
}

/** Tags em formato `[a, b, c]` viram array. */
function parseTags(value: string): string[] {
  if (!value) return [];
  const inner = value.replace(/^\[|\]$/g, "");
  return inner
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

export async function getAllPosts(): Promise<Post[]> {
  const { readdir, readFile } = await import("node:fs/promises");
  const path = await import("node:path");

  const dir = path.join(process.cwd(), "content", "posts");

  let files: string[] = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await readFile(path.join(dir, file), "utf8");
      const { data, body } = parseFrontmatter(raw);

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title ?? "Sem título",
        description: data.description ?? "",
        date: data.date ?? "1970-01-01",
        tags: parseTags(data.tags),
        readingTime: readingTime(body),
        content: body,
      };
    }),
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  return [...new Set(posts.flatMap((p) => p.tags))].sort();
}