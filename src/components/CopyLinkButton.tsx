"use client";

import { useState } from "react";

export default function CopyLinkButton({ url, label = "Copiar link" }: { url: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível (ex.: http) — sem acção
    }
  };

  return (
    <button type="button" onClick={copy} className="btn btn--ghost">
      {copied ? "Copiado!" : label}
    </button>
  );
}
