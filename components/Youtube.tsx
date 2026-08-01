"use client";

import Image from "next/image";
import { LinkIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const YOUTUBE_URL = "https://www.youtube.com/@ycnoticias";

export function Youtube() {
  const { t } = useI18n();

  return (
    <section className="amazon-section" id="youtube" aria-label="YouTube">
      <div className="videos-head">
        <h2 className="videos-title">YouTube</h2>
        <a
          className="videos-more"
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.youtubeMore}
        </a>
      </div>
      <div className="amazon-list">
        <a
          className="amazon-card featured"
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/yurynoticias.png"
            alt={t.youtubeAlt}
            fill
            priority
            sizes="(max-width: 480px) 100vw, 440px"
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
          />
          <span className="amazon-link-icon" aria-hidden="true">
            <LinkIcon size={20} />
          </span>
          <div className="amazon-scrim" aria-hidden="true" />
          <p className="amazon-title">{t.youtubeTitle}</p>
        </a>
      </div>
    </section>
  );
}
