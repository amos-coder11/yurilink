"use client";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <LanguageSwitcher />
      <p>© {year} Yury · Hisweeties</p>
    </footer>
  );
}
