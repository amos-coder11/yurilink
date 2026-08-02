"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

type Translations = {
  heroAlt: string;
  tiktokBeauty: string;
  tiktokNews: string;
  totalFollowers: string;
  youtubeMore: string;
  youtubeBrand: string;
  youtubeSubtitle: string;
  youtubeTitle: string;
  youtubeAlt: string;
  courses: string;
  coursesMore: string;
  coursesTitle: string;
  coursesAlt: string;
  amazonMore: string;
  amazonTitle: string;
  amazonAlt: string;
  videos: string;
  videosMore: string;
  videoTitles: {
    v1: string;
    v2: string;
    v3: string;
    v4: string;
  };
  language: string;
  spanish: string;
  english: string;
  footerBrandMuted: string;
  footerBrandStrong: string;
};

const translations: Record<Lang, Translations> = {
  es: {
    heroAlt: "Yury Chacón, creadora de contenido",
    tiktokBeauty: "TikTok Belleza",
    tiktokNews: "TikTok Noticias",
    totalFollowers: "Seguidores totales",
    youtubeMore: "Ver canal ›",
    youtubeBrand: "YC Noticias",
    youtubeSubtitle: "Noticias del día",
    youtubeTitle: "YC Noticias | Noticias del día",
    youtubeAlt: "YC Noticias — Noticias del día",
    courses: "Cursos",
    coursesMore: "Más info ›",
    coursesTitle: "Marketing | Mujer, tu marca tu poder",
    coursesAlt: "Curso Mujer, tu marca tu poder",
    amazonMore: "Ver tienda ›",
    amazonTitle: "Mis favoritos en Amazon | Shop my finds",
    amazonAlt: "Mis favoritos en Amazon",
    videos: "Videos destacados",
    videosMore: "Ver todos ›",
    videoTitles: {
      v1: "Cuidado y frescura",
      v2: "Eye Repair 360°",
      v3: "Hair Cap Finds",
      v4: "GoPure Neck Cream",
    },
    language: "Idioma",
    spanish: "Español",
    english: "English",
    footerBrandMuted: "YC ",
    footerBrandStrong: "Noticias",
  },
  en: {
    heroAlt: "Yury Chacón, content creator",
    tiktokBeauty: "TikTok Beauty",
    tiktokNews: "TikTok News",
    totalFollowers: "Total Followers",
    youtubeMore: "View channel ›",
    youtubeBrand: "YC News",
    youtubeSubtitle: "News of the day",
    youtubeTitle: "YC News | News of the day",
    youtubeAlt: "YC News — News of the day",
    courses: "Courses",
    coursesMore: "Learn more ›",
    coursesTitle: "Marketing | Woman, your brand your power",
    coursesAlt: "Course Woman, your brand your power",
    amazonMore: "View store ›",
    amazonTitle: "My Amazon favorites | Shop my finds",
    amazonAlt: "My Amazon favorites",
    videos: "Featured videos",
    videosMore: "See all ›",
    videoTitles: {
      v1: "Care & freshness",
      v2: "Eye Repair 360°",
      v3: "Hair Cap Finds",
      v4: "GoPure Neck Cream",
    },
    language: "Language",
    spanish: "Español",
    english: "English",
    footerBrandMuted: "YC ",
    footerBrandStrong: "News",
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("yury-lang");
    if (saved === "es" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("yury-lang", next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
