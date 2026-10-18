import { site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} Caleb Figueiredo · Luanda, Angola
        </p>
        <p className="footer__note">
          GitHub sob o handle{" "}
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            {site.handle}
          </a>
        </p>
      </div>
    </footer>
  );
}