import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
import { site } from "@content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notas de engenharia de ${site.name} — SQL, modelação de dados e decisões técnicas.`,
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="section section--flush page-head">
      <div className="container">
        <header className="section__header">
          <span className="t-label reveal">Blog</span>
          <h1 className="t-h1 reveal">Notas de engenharia.</h1>
          <p className="t-body section__lead reveal">
            Decisões técnicas, o que correu mal, e o que aprendi. Baseado em trabalho real.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="t-body">Ainda não há posts publicados.</p>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <article key={post.slug} className="post-card reveal">
                <div className="post-card__meta">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="t-h3">
                  <Link href={`/blog/${post.slug}`} className="post-card__title">
                    {post.title}
                  </Link>
                </h2>
                <p className="t-body">{post.description}</p>
                <div className="badges">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}