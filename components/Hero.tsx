"use client";

import Image from "next/image";
import { VerifiedBadge } from "./VerifiedBadge";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="hero reveal">
      <Image
        className="hero-photo"
        src="/assets/yurifoto.png"
        alt={t.heroAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center top" }}
      />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-name-row">
          <h1 className="hero-brand">Yury</h1>
          <VerifiedBadge />
        </div>
        <p className="hero-handle">@ycnoticias</p>
        <div className="hero-socials">
          <a
            className="hero-social youtube"
            href="https://www.youtube.com/@ycnoticias"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YouTubeIcon size={20} />
          </a>
          <a
            className="hero-social facebook"
            href="https://www.facebook.com/share/19FA9TADC5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon size={20} />
          </a>
          <a
            className="hero-social tiktok"
            href="https://www.tiktok.com/@hisweetiesshop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Shop"
          >
            <TikTokIcon size={20} />
          </a>
          <a
            className="hero-social tiktok"
            href="https://www.tiktok.com/@yc.noticias"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.tiktokNews}
          >
            <TikTokIcon size={20} />
          </a>
          <a
            className="hero-social ig"
            href="https://www.instagram.com/yuryccb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </div>
        <p className="hero-followers">
          <strong>50K+</strong> {t.totalFollowers}
        </p>
      </div>
    </section>
  );
}
