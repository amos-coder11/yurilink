"use client";

import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className="lang-switch" role="group" aria-label={t.language}>
      <button
        type="button"
        className={`lang-btn${lang === "es" ? " active" : ""}`}
        onClick={() => setLang("es" as Lang)}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-btn${lang === "en" ? " active" : ""}`}
        onClick={() => setLang("en" as Lang)}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
