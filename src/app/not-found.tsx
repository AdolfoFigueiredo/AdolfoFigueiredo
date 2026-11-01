import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container">
        <span className="t-label">Erro 404</span>
        <h1 className="t-display hero__title" style={{ marginTop: 16 }}>
          Esta página não existe.
        </h1>
        <p className="hero__lead">
          O endereço pode ter mudado, ou nunca existiu.
        </p>
        <div className="hero__cta">
          <Link href="/" className="btn btn--primary">
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}