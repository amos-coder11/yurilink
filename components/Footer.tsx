"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <LanguageSwitcher />
      <p>
        © {year} Yury Chacón ·{" "}
        <span className="footer-brand">
          <span className="footer-brand-muted">{t.footerBrandMuted}</span>
          <span className="footer-brand-strong">{t.footerBrandStrong}</span>
        </span>
      </p>
    </footer>
  );
}
